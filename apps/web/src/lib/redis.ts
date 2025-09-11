import { Redis } from '@upstash/redis';

// Initialize Redis client with Upstash
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Redis keys
export const REDIS_KEYS = {
  WISHES: 'wedding:wishes',
  WISHES_COUNT: 'wedding:wishes:count',
};

// Types
export interface WishData {
  id: string;
  name: string;
  message: string;
  attendance: 'attending' | 'not-attending' | 'maybe';
  timestamp: string;
  ip?: string;
}

// Utility functions
export const generateWishId = () => {
  return `wish_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const sanitizeWishData = (data: any): Omit<WishData, 'id' | 'timestamp'> => {
  return {
    name: String(data.name || '').trim().substring(0, 100),
    message: String(data.message || '').trim().substring(0, 500),
    attendance: ['attending', 'not-attending', 'maybe'].includes(data.attendance) 
      ? data.attendance 
      : 'maybe',
    ip: String(data.ip || '').substring(0, 45), // IPv6 max length
  };
};