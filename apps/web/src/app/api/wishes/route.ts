import { NextRequest, NextResponse } from 'next/server';
import { redis, REDIS_KEYS, type WishData, generateWishId, sanitizeWishData } from '@/lib/redis';

// GET /api/wishes - Retrieve wishes with pagination
export async function GET(request: NextRequest) {
  try {
    // Parse pagination parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Calculate offset for pagination
    const offset = (page - 1) * limit;
    const end = offset + limit - 1;

    // Get wishes for current page from Redis sorted set (newest first) 
    const wishes = await redis.zrange(REDIS_KEYS.WISHES, offset, end, { rev: true });

    // Get total count for pagination info
    const totalCount = await redis.zcard(REDIS_KEYS.WISHES);

    // Parse wishes data
    const parsedWishes = wishes.map(wish => {
      try {
        return typeof wish === 'string' ? JSON.parse(wish) : wish;
      } catch {
        return null;
      }
    }).filter(Boolean);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasMore = page < totalPages;

    return NextResponse.json({
      success: true,
      data: parsedWishes,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages,
        hasMore,
        count: parsedWishes.length,
      },
    });
  } catch (error) {
    console.error('Failed to fetch wishes:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch wishes',
    }, { status: 500 });
  }
}

// POST /api/wishes - Create a new wish
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name?.trim() || !body.message?.trim() || !body.attendance) {
      return NextResponse.json({
        success: false,
        error: 'Nama, pesan, dan status kehadiran wajib diisi',
      }, { status: 400 });
    }

    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Sanitize and prepare wish data
    const sanitizedData = sanitizeWishData({ ...body, ip });
    const wishId = generateWishId();
    const timestamp = new Date().toISOString();
    
    const wishData: WishData = {
      id: wishId,
      timestamp,
      ...sanitizedData,
    };

    // Store in Redis sorted set (score = timestamp for ordering)
    const score = Date.now();
    await redis.zadd(REDIS_KEYS.WISHES, { score, member: JSON.stringify(wishData) });

    // Increment wishes counter
    await redis.incr(REDIS_KEYS.WISHES_COUNT);

    // Return success response
    return NextResponse.json({
      success: true,
      data: wishData,
      message: 'Harapan berhasil dikirim!'
    });

  } catch (error) {
    console.error('Failed to create wish:', error);
    return NextResponse.json({
      success: false,
      error: 'Gagal mengirim harapan. Silakan coba lagi.'
    }, { status: 500 });
  }
}

// DELETE /api/wishes - Clear all wishes (admin only)
export async function DELETE(request: NextRequest) {
  try {
    // Simple admin check (you can implement proper auth)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== 'Bearer admin-token') {
      return NextResponse.json({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    // Clear all wishes
    await redis.del(REDIS_KEYS.WISHES);
    await redis.del(REDIS_KEYS.WISHES_COUNT);

    return NextResponse.json({
      success: true,
      message: 'All wishes cleared'
    });

  } catch (error) {
    console.error('Failed to clear wishes:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to clear wishes'
    }, { status: 500 });
  }
}