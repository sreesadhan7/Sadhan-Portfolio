/**
 * Enhanced image performance monitoring with detailed metrics
 */

interface ImageLoadMetrics {
  src: string
  startTime: number
  endTime?: number
  loadDuration?: number
  wasPreloaded: boolean
  priority: boolean
  fileSize?: number
  format: string
  fallbackUsed?: boolean
}

class EnhancedImagePerformanceMonitor {
  private metrics: Map<string, ImageLoadMetrics> = new Map()
  private slowLoadThreshold = 1000 // 1 second
  private verySlowLoadThreshold = 2000 // 2 seconds

  /**
   * Start tracking image load
   */
  startLoad(src: string, priority: boolean = false): void {
    const format = this.getImageFormat(src)
    
    this.metrics.set(src, {
      src,
      startTime: performance.now(),
      wasPreloaded: false,
      priority,
      format
    })

    if (typeof window !== 'undefined' && window.console) {
      console.log(`🖼️ Loading image: ${src} (${format.toUpperCase()}, ${priority ? 'HIGH' : 'NORMAL'} priority)`)
    }
  }

  /**
   * Complete tracking image load
   */
  completeLoad(src: string, wasPreloaded: boolean = false, fallbackUsed: boolean = false): void {
    const metric = this.metrics.get(src)
    if (!metric) return

    const endTime = performance.now()
    const loadDuration = endTime - metric.startTime

    metric.endTime = endTime
    metric.loadDuration = loadDuration
    metric.wasPreloaded = wasPreloaded
    metric.fallbackUsed = fallbackUsed

    // Log performance info
    this.logPerformance(metric)

    // Track slow loading images
    if (loadDuration > this.slowLoadThreshold) {
      this.handleSlowLoad(metric)
    }
  }

  /**
   * Get image format from src
   */
  private getImageFormat(src: string): string {
    if (src.includes('.webp')) return 'webp'
    if (src.includes('.avif')) return 'avif' 
    if (src.includes('.jpg') || src.includes('.jpeg')) return 'jpeg'
    if (src.includes('.png')) return 'png'
    return 'unknown'
  }

  /**
   * Log performance metrics
   */
  private logPerformance(metric: ImageLoadMetrics): void {
    if (typeof window === 'undefined' || !window.console) return

    const { src, loadDuration, wasPreloaded, priority, format, fallbackUsed } = metric
    const fileName = src.split('/').pop() || src

    if (loadDuration! < this.slowLoadThreshold) {
      console.log(`✅ ${fileName} loaded in ${loadDuration!.toFixed(0)}ms (${format.toUpperCase()}${wasPreloaded ? ', preloaded' : ''}${fallbackUsed ? ', fallback used' : ''})`)
    } else if (loadDuration! < this.verySlowLoadThreshold) {
      console.warn(`⚠️ ${fileName} loaded slowly in ${loadDuration!.toFixed(0)}ms (${format.toUpperCase()}${wasPreloaded ? ', preloaded' : ''}${fallbackUsed ? ', fallback used' : ''})`)
    } else {
      console.error(`🐌 ${fileName} loaded very slowly in ${loadDuration!.toFixed(0)}ms (${format.toUpperCase()}${wasPreloaded ? ', preloaded' : ''}${fallbackUsed ? ', fallback used' : ''})`)
    }
  }

  /**
   * Handle slow loading images
   */
  private handleSlowLoad(metric: ImageLoadMetrics): void {
    const { src, loadDuration, format } = metric
    
    // Suggest optimizations
    const suggestions = []
    
    if (format === 'png') {
      suggestions.push('Consider using WebP or AVIF format')
    }
    
    if (loadDuration! > this.verySlowLoadThreshold) {
      suggestions.push('Image may be too large - consider further compression')
    }
    
    if (!metric.wasPreloaded && metric.priority) {
      suggestions.push('Consider preloading this high-priority image')
    }

    if (suggestions.length > 0 && typeof window !== 'undefined' && window.console) {
      console.group(`🔧 Optimization suggestions for ${src.split('/').pop()}:`)
      suggestions.forEach(suggestion => console.log(`• ${suggestion}`))
      console.groupEnd()
    }
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    totalImages: number
    averageLoadTime: number
    slowImages: number
    preloadedImages: number
    formatBreakdown: Record<string, number>
  } {
    const completedMetrics = Array.from(this.metrics.values())
      .filter(m => m.loadDuration !== undefined)

    if (completedMetrics.length === 0) {
      return {
        totalImages: 0,
        averageLoadTime: 0,
        slowImages: 0,
        preloadedImages: 0,
        formatBreakdown: {}
      }
    }

    const totalLoadTime = completedMetrics.reduce((sum, m) => sum + (m.loadDuration || 0), 0)
    const slowImages = completedMetrics.filter(m => (m.loadDuration || 0) > this.slowLoadThreshold).length
    const preloadedImages = completedMetrics.filter(m => m.wasPreloaded).length
    
    const formatBreakdown = completedMetrics.reduce((breakdown, m) => {
      breakdown[m.format] = (breakdown[m.format] || 0) + 1
      return breakdown
    }, {} as Record<string, number>)

    return {
      totalImages: completedMetrics.length,
      averageLoadTime: totalLoadTime / completedMetrics.length,
      slowImages,
      preloadedImages,
      formatBreakdown
    }
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear()
  }

  /**
   * Log performance summary to console
   */
  logSummary(): void {
    if (typeof window === 'undefined' || !window.console) return

    const summary = this.getPerformanceSummary()
    
    console.group('📊 Image Loading Performance Summary:')
    console.log(`Total images loaded: ${summary.totalImages}`)
    console.log(`Average load time: ${summary.averageLoadTime.toFixed(0)}ms`)
    console.log(`Slow loading images (>${this.slowLoadThreshold}ms): ${summary.slowImages}`)
    console.log(`Preloaded images: ${summary.preloadedImages}`)
    console.log('Format breakdown:', summary.formatBreakdown)
    console.groupEnd()
  }
}

// Export singleton instance
export const enhancedImagePerformanceMonitor = new EnhancedImagePerformanceMonitor()

// Auto-log summary every 30 seconds in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  setInterval(() => {
    const summary = enhancedImagePerformanceMonitor.getPerformanceSummary()
    if (summary.totalImages > 0) {
      enhancedImagePerformanceMonitor.logSummary()
    }
  }, 30000)
}
