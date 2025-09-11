import { NextResponse } from 'next/server';
import { redis, REDIS_KEYS } from '@/lib/redis';

// GET /api/wishes/stats - Get wishes statistics
export async function GET() {
  try {
    // Get total count
    const totalCount = await redis.get(REDIS_KEYS.WISHES_COUNT) || 0;
    
    // Get all wishes to analyze
    const wishes = await redis.zrange(REDIS_KEYS.WISHES, 0, -1);

    // Parse and analyze wishes
    const parsedWishes = wishes.map(wish => {
      try {
        return typeof wish === 'string' ? JSON.parse(wish) : wish;
      } catch {
        return null;
      }
    }).filter(Boolean);

    // Calculate attendance stats
    const attendanceStats = {
      attending: 0,
      'not-attending': 0,
      maybe: 0,
    };

    parsedWishes.forEach(wish => {
      if (wish.attendance && attendanceStats.hasOwnProperty(wish.attendance)) {
        attendanceStats[wish.attendance as keyof typeof attendanceStats]++;
      }
    });

    // Calculate recent wishes (last 24 hours)
    const twentyFourHoursAgo = Date.now() - (24 * 60 * 60 * 1000);
    const recentWishes = parsedWishes.filter(wish => {
      return new Date(wish.timestamp).getTime() > twentyFourHoursAgo;
    }).length;

    return NextResponse.json({
      success: true,
      data: {
        total: Number(totalCount),
        recent24h: recentWishes,
        attendance: attendanceStats,
        lastUpdated: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error('Failed to fetch wishes stats:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch statistics'
    }, { status: 500 });
  }
}