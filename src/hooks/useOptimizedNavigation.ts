'use client'

import { useState, useEffect, useCallback } from 'react'
import { imagePreloader } from '@/utils/imagePreloader'

interface Project {
  id: string
  image: string
  title: string
  category: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  features?: string[]
}

interface UseOptimizedProjectNavigationOptions {
  projects: Project[]
  preloadCount?: number
  transitionDelay?: number
}

/**
 * Hook that provides optimized project navigation with preloading and smooth transitions
 */
export function useOptimizedProjectNavigation({
  projects,
  preloadCount = 3,
  transitionDelay = 150
}: UseOptimizedProjectNavigationOptions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Preload images around current index
  const preloadAroundIndex = useCallback((index: number) => {
    const imagesToPreload: string[] = []
    
    // Get images around the current index (previous, current, next few)
    for (let i = -1; i <= preloadCount; i++) {
      const imageIndex = (index + i + projects.length) % projects.length
      imagesToPreload.push(projects[imageIndex].image)
    }

    // Preload images
    imagePreloader.preloadImages(imagesToPreload, {
      sizes: "(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px",
      quality: 85
    }).catch(console.warn)
  }, [projects, preloadCount])

  // Preload images when index changes
  useEffect(() => {
    preloadAroundIndex(currentIndex)
  }, [currentIndex, preloadAroundIndex])

  // Optimized navigation functions with transitions
  const navigateToNext = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const nextIndex = (currentIndex + 1) % projects.length
    
    // Preload next few images before transition
    preloadAroundIndex(nextIndex)
    
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setIsTransitioning(false)
    }, transitionDelay)
  }, [currentIndex, projects.length, isTransitioning, preloadAroundIndex, transitionDelay])

  const navigateToPrevious = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    
    // Preload previous few images before transition
    preloadAroundIndex(prevIndex)
    
    setTimeout(() => {
      setCurrentIndex(prevIndex)
      setIsTransitioning(false)
    }, transitionDelay)
  }, [currentIndex, projects.length, isTransitioning, preloadAroundIndex, transitionDelay])

  const navigateToIndex = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    
    // Preload images around target index
    preloadAroundIndex(index)
    
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, transitionDelay)
  }, [currentIndex, isTransitioning, preloadAroundIndex, transitionDelay])

  // Check if image is preloaded
  const isImagePreloaded = useCallback((imageSrc: string) => {
    return imagePreloader.isPreloaded(imageSrc)
  }, [])

  // Get projects to display (current + adjacent)
  const getDisplayProjects = useCallback((count: number = 3) => {
    const result = []
    for (let i = 0; i < Math.min(count, projects.length); i++) {
      const index = (currentIndex + i) % projects.length
      result.push(projects[index])
    }
    return result
  }, [currentIndex, projects])

  return {
    currentIndex,
    isTransitioning,
    navigateToNext,
    navigateToPrevious,
    navigateToIndex,
    getDisplayProjects,
    isImagePreloaded,
    preloadAroundIndex
  }
}

/**
 * Hook for smooth category transitions with preloading
 */
export function useOptimizedCategoryNavigation<T extends string>(
  initialCategory: T,
  onCategoryChange?: (category: T) => void
) {
  const [category, setCategory] = useState<T>(initialCategory)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeCategory = useCallback((newCategory: T, transitionDelay: number = 200) => {
    if (isTransitioning || newCategory === category) return

    setIsTransitioning(true)
    
    setTimeout(() => {
      setCategory(newCategory)
      onCategoryChange?.(newCategory)
      setIsTransitioning(false)
    }, transitionDelay)
  }, [category, isTransitioning, onCategoryChange])

  return {
    category,
    isTransitioning,
    changeCategory
  }
}
