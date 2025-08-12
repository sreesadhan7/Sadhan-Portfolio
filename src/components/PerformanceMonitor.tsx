'use client'

import { enhancedImagePerformanceMonitor } from '@/utils/enhancedImagePerformanceMonitor'
import { useEffect } from 'react'

/**
 * Client component to initialize performance monitoring
 */
export function PerformanceMonitor() {
  useEffect(() => {
    // Log initial setup in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 Enhanced image performance monitoring initialized')
    }
  }, [])
  
  return null
}
