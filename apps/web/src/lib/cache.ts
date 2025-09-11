// Simple localStorage cache utility for wedding invitation
export class SimpleCache {
  private static readonly CACHE_PREFIX = 'wedding_cache_';
  private static readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

  static set(key: string, data: any, ttl: number = SimpleCache.DEFAULT_TTL): void {
    try {
      const cacheKey = SimpleCache.CACHE_PREFIX + key;
      const cacheData = {
        data,
        timestamp: Date.now(),
        ttl
      };
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      // Silent fail for localStorage issues (e.g., quota exceeded, private browsing)
      console.warn('Cache set failed:', error);
    }
  }

  static get(key: string): any | null {
    try {
      const cacheKey = SimpleCache.CACHE_PREFIX + key;
      const cached = localStorage.getItem(cacheKey);
      
      if (!cached) return null;
      
      const cacheData = JSON.parse(cached);
      const isExpired = Date.now() - cacheData.timestamp > cacheData.ttl;
      
      if (isExpired) {
        localStorage.removeItem(cacheKey);
        return null;
      }
      
      return cacheData.data;
    } catch (error) {
      // Silent fail and cleanup
      console.warn('Cache get failed:', error);
      return null;
    }
  }

  static remove(key: string): void {
    try {
      const cacheKey = SimpleCache.CACHE_PREFIX + key;
      localStorage.removeItem(cacheKey);
    } catch (error) {
      console.warn('Cache remove failed:', error);
    }
  }

  static clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(SimpleCache.CACHE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Cache clear failed:', error);
    }
  }

  // Check if browser supports localStorage
  static isSupported(): boolean {
    try {
      const test = '__cache_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}

// Wedding-specific cache keys
export const CACHE_KEYS = {
  WISHES_PAGE: (page: number) => `wishes_page_${page}`,
  WISHES_STATS: 'wishes_stats',
  COUNTDOWN_DATA: 'countdown_data'
} as const;