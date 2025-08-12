'use client'

import { useEffect } from 'react'
import { projects } from '@/data/portfolio'
import { imagePreloader } from '@/utils/imagePreloader'

interface ImagePrefetchProps {
  priority?: number // Number of images to preload with high priority
}

/**
 * Component that prefetches project images for better performance
 * Should be included in the layout or main page to start preloading early
 */
export function ImagePrefetch({ priority = 5 }: ImagePrefetchProps) { // Increased from 3 to 5
  useEffect(() => {
    const preloadProjectImages = async () => {
      try {
        // Get all project images
        const allImages = projects.map(project => project.image)
        
        // Split into high and low priority - more aggressive preloading
        const highPriorityImages = allImages.slice(0, priority)
        const lowPriorityImages = allImages.slice(priority)

        // Preload with priority queue
        await imagePreloader.preloadImagesWithPriority(
          highPriorityImages,
          lowPriorityImages,
          {
            sizes: "(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px",
            quality: 85
          }
        )

        console.log(`✅ Preloaded ${highPriorityImages.length} high-priority images, ${lowPriorityImages.length} low-priority images loading in background`)
      } catch (error) {
        console.warn('⚠️ Error preloading images:', error)
      }
    }

    // Start preloading immediately, no delay
    preloadProjectImages()
  }, [priority])

  // This component doesn't render anything
  return null
}

/**
 * Hook to prefetch images for a specific category
 */
export function useCategoryImagePrefetch(category: 'all' | 'ai' | 'web') {
  useEffect(() => {
    const categoryImages = category === 'all' 
      ? projects.map(p => p.image)
      : projects
          .filter(p => p.category.toLowerCase() === category)
          .map(p => p.image)

    // Preload category-specific images
    imagePreloader.preloadImages(categoryImages, {
      sizes: "(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px",
      quality: 85
    }).catch(console.warn)
  }, [category])
}
