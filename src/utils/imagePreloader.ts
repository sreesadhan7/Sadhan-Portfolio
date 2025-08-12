'use client'

/**
 * Image preloader utility for optimizing image loading performance
 */

interface PreloadOptions {
  priority?: boolean
  quality?: number
  sizes?: string
}

class ImagePreloader {
  private preloadedImages: Set<string> = new Set()
  private preloadPromises: Map<string, Promise<void>> = new Map()

  /**
   * Preload a single image (simplified for WebP only)
   */
  preloadImage(src: string, options: PreloadOptions = {}): Promise<void> {
    if (this.preloadedImages.has(src)) {
      return Promise.resolve()
    }

    if (this.preloadPromises.has(src)) {
      return this.preloadPromises.get(src)!
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image()
      
      img.onload = () => {
        this.preloadedImages.add(src)
        this.preloadPromises.delete(src)
        resolve()
      }
      
      img.onerror = () => {
        this.preloadPromises.delete(src)
        reject(new Error(`Failed to preload image: ${src}`))
      }

      // Set image attributes for better optimization
      if (options.sizes) {
        img.sizes = options.sizes
      }
      
      img.src = src
    })

    this.preloadPromises.set(src, promise)
    return promise
  }

  /**
   * Preload multiple images
   */
  async preloadImages(sources: string[], options: PreloadOptions = {}): Promise<void> {
    const promises = sources.map(src => this.preloadImage(src, options))
    await Promise.all(promises)
  }

  /**
   * Preload images with priority queue
   */
  async preloadImagesWithPriority(
    highPriority: string[],
    lowPriority: string[],
    options: PreloadOptions = {}
  ): Promise<void> {
    // Preload high priority images first
    await this.preloadImages(highPriority, { ...options, priority: true })
    
    // Then preload low priority images in the background with delay
    setTimeout(() => {
      this.preloadImages(lowPriority, { ...options, priority: false }).catch(console.warn)
    }, 1000) // 1 second delay to avoid blocking
  }

  /**
   * Check if image is preloaded
   */
  isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src)
  }

  /**
   * Clear preload cache
   */
  clearCache(): void {
    this.preloadedImages.clear()
    this.preloadPromises.clear()
  }

  /**
   * Get cache stats
   */
  getCacheStats(): { preloaded: number, pending: number } {
    return {
      preloaded: this.preloadedImages.size,
      pending: this.preloadPromises.size
    }
  }
}

// Singleton instance
export const imagePreloader = new ImagePreloader()

/**
 * Hook for preloading project images based on current index
 */
export function useProjectImagePreloader(
  projectImages: string[],
  currentIndex: number,
  preloadCount: number = 5 // Increased from 3 to 5
) {
  const preloadAroundIndex = (index: number) => {
    const imagesToPreload: string[] = []
    const highPriority: string[] = []
    const lowPriority: string[] = []

    // Get images around the current index with more aggressive preloading
    for (let i = -2; i <= preloadCount; i++) { // Changed from -1 to -2
      const imageIndex = (index + i + projectImages.length) % projectImages.length
      const imageSrc = projectImages[imageIndex]
      
      if (i <= 2) { // Increased high priority range
        highPriority.push(imageSrc)
      } else {
        lowPriority.push(imageSrc)
      }
    }

    // Preload with priority
    imagePreloader.preloadImagesWithPriority(
      highPriority,
      lowPriority,
      {
        sizes: "(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px",
        quality: 85
      }
    ).catch(console.warn)
  }

  // Preload images around current index whenever it changes
  if (typeof window !== 'undefined') {
    preloadAroundIndex(currentIndex)
  }

  return { preloadAroundIndex, isPreloaded: imagePreloader.isPreloaded }
}

/**
 * Generate optimized image URLs for Next.js Image component
 */
export function getOptimizedImageUrl(src: string, width: number, quality: number = 85): string {
  if (src.startsWith('/')) {
    // For local images, let Next.js handle optimization
    return src
  }
  return src
}

/**
 * Generate responsive image sizes string
 */
export function getResponsiveImageSizes(): string {
  return "(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
}
