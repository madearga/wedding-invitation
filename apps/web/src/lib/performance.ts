// Simple performance monitoring for wedding invitation
export class PerformanceMonitor {
  private static startTime: number = Date.now();

  // Monitor page load time
  static logPageLoad(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = Date.now() - PerformanceMonitor.startTime;
        console.log(`🚀 Wedding invitation loaded in ${loadTime}ms`);
        
        // Log Web Vitals if available
        if ('performance' in window && 'getEntriesByType' in performance) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            console.log('📊 Performance metrics:', {
              domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
              firstContentfulPaint: PerformanceMonitor.getFirstContentfulPaint(),
              totalLoadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
            });
          }
        }
      });
    }
  }

  // Get First Contentful Paint
  private static getFirstContentfulPaint(): number | null {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      return fcpEntry ? Math.round(fcpEntry.startTime) : null;
    }
    return null;
  }

  // Monitor cache hit rate
  static logCacheHit(key: string): void {
    console.log(`💾 Cache hit: ${key}`);
  }

  // Monitor API response times
  static async monitorAPI<T>(
    apiCall: () => Promise<T>,
    apiName: string
  ): Promise<T> {
    const startTime = Date.now();
    try {
      const result = await apiCall();
      const endTime = Date.now();
      console.log(`🌐 API ${apiName} completed in ${endTime - startTime}ms`);
      return result;
    } catch (error) {
      const endTime = Date.now();
      console.error(`❌ API ${apiName} failed after ${endTime - startTime}ms:`, error);
      throw error;
    }
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  PerformanceMonitor.logPageLoad();
}