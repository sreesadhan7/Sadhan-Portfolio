'use client'

import Image from 'next/image'
import { useState, useCallback, useEffect, useRef } from 'react'
import { imagePreloader } from '@/utils/imagePreloader'
import { getConnectionQuality, getImageQuality } from '@/utils/imageOptimization'
import { enhancedImagePerformanceMonitor } from '@/utils/enhancedImagePerformanceMonitor'

interface ProjectImageProps {
  src: string
  alt: string
  title: string
  category: string
  priority?: boolean
  eager?: boolean
}

export function ProjectImage({ src, alt, title, category, priority = false, eager = false }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [shouldLoad, setShouldLoad] = useState(eager || priority)
  const [hasStartedLoading, setHasStartedLoading] = useState(false)
  const [currentImageSrc, setCurrentImageSrc] = useState(src)
  const imgRef = useRef<HTMLDivElement>(null)

  // Get adaptive image quality based on connection
  const connectionQuality = getConnectionQuality()
  const imageQuality = getImageQuality(
    priority ? 'high' : 'normal',
    connectionQuality
  )

  // Since we only use WebP images now, no need for complex fallback logic
  const getImageSources = useCallback((originalSrc: string) => {
    return {
      webp: originalSrc, // Direct WebP path
      fallback: originalSrc // Same path as fallback
    }
  }, [])

  const imageSources = getImageSources(src)

  // Create a lighter, more pleasant blur placeholder based on category
  const createBlurPlaceholder = () => {
    if (category.toLowerCase() === 'ai') {
      // Blue-ish placeholder for AI projects
      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABIDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EACIQAAICAgEEAwEAAAAAAAAAAAECABEDEiEEMUFREyJhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2EZgCdSTNEWF8zPGjuNb9p4hQXYlR0+swxb9QO8AZCx3I7Sthw42B5iBkDvAAkKm9mALTf6gnSgRMcWKgDXYQD/2Q=="
    } else {
      // Green-ish placeholder for web projects
      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABIDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EACIQAAICAgEEAwEAAAAAAAAAAAECABEDEiEEMUFREyJhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2EZAFVP3Pczpjba9J4mQAgFY8nf2niFBdiVHT6zDFv1A7wBkLHcjtK2HDjYHmIGQO8ACQqb2YAtN/qCdKBExxYqANdhAP/Z"
    }
  }

  const handleImageError = useCallback(() => {
    // Since we only have WebP images, just show error state
    console.error(`WebP image failed to load: ${src}`)
    setImageError(true)
    setIsLoading(false)
  }, [src])

  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
    enhancedImagePerformanceMonitor.completeLoad(
      currentImageSrc, 
      imagePreloader.isPreloaded(currentImageSrc),
      currentImageSrc !== src // fallback was used if different from original
    )
  }, [currentImageSrc, src])

  // Track when image starts loading
  useEffect(() => {
    if (shouldLoad && !hasStartedLoading) {
      setHasStartedLoading(true)
      enhancedImagePerformanceMonitor.startLoad(currentImageSrc, priority)
    }
  }, [shouldLoad, hasStartedLoading, currentImageSrc, priority])

  // Reset error state when src changes
  useEffect(() => {
    setImageError(false)
    setIsLoading(true)
    setCurrentImageSrc(src)
  }, [src])

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (shouldLoad || !imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px', // Increased from 50px for earlier loading
        threshold: 0.1
      }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [shouldLoad])

  // Check if image is already preloaded
  useEffect(() => {
    if (imagePreloader.isPreloaded(currentImageSrc)) {
      setIsLoading(false)
      setHasStartedLoading(true)
    }
  }, [currentImageSrc])

  return (
    <div 
      ref={imgRef}
      className="h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 bg-gradient-to-br from-portfolio-primary/10 to-portfolio-primary/5 flex items-center justify-center relative overflow-hidden flex-shrink-0"
    >
      {!imageError ? (
        <>
          {/* Enhanced loading skeleton - only show if actually loading */}
          {(isLoading && hasStartedLoading) && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing animation */}
                <div className="absolute inset-0 bg-portfolio-primary/20 rounded-full animate-ping"></div>
                <div className="text-2xl xs:text-3xl sm:text-4xl opacity-50">
                  {category.toLowerCase() === 'ai' ? '🤖' : '🌐'}
                </div>
              </div>
              {/* Loading bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <div className="h-full bg-portfolio-primary animate-pulse w-3/4"></div>
              </div>
            </div>
          )}

          {/* Default state before loading starts */}
          {!hasStartedLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-primary/10 flex items-center justify-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl opacity-30">
                {category.toLowerCase() === 'ai' ? '🤖' : '🌐'}
              </div>
            </div>
          )}
          
          {/* Actual image - only render when shouldLoad is true */}
          {shouldLoad && (
            <Image
              src={currentImageSrc}
              alt={alt}
              fill
              className={`object-cover transition-all duration-500 ease-out ${
                isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              sizes="(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
              priority={priority}
              quality={imageQuality}
              placeholder="blur"
              blurDataURL={createBlurPlaceholder()}
              loading={priority ? 'eager' : 'lazy'}
            />
          )}
        </>
      ) : (
        /* Enhanced fallback design when image fails to load */
        <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl opacity-30 animate-pulse">
            {category.toLowerCase() === 'ai' ? '🤖' : '🌐'}
          </div>
          <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 right-2 xs:right-3 sm:right-4 text-center">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded px-2 py-1 border border-gray-200 dark:border-gray-600">
              {title}
            </p>
          </div>
        </div>
      )}
      
      {/* Category Badge */}
      <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4">
        <span className="px-2 xs:px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-700 capitalize shadow-sm">
          {category.toLowerCase() === 'ai' ? 'AI' : category}
        </span>
      </div>
    </div>
  )
}
