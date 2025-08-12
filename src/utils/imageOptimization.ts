/**
 * Image optimization utilities for better performance
 */

/**
 * Detect connection quality for adaptive loading
 */
export function getConnectionQuality(): 'slow' | 'normal' | 'fast' {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'normal'
  }
  
  const connection = (navigator as any).connection
  if (!connection) return 'normal'
  
  // Check effective connection type
  const effectiveType = connection.effectiveType
  
  if (effectiveType === 'slow-2g' || effectiveType === '2g') {
    return 'slow'
  }
  
  if (effectiveType === '4g') {
    return 'fast'
  }
  
  return 'normal'
}

/**
 * Get image quality based on connection and priority
 */
export function getImageQuality(
  priority: 'high' | 'normal' | 'low',
  connectionQuality: 'slow' | 'normal' | 'fast' = 'normal'
): number {
  const qualityMatrix = {
    slow: { high: 50, normal: 40, low: 30 },     // More aggressive compression for slow connections
    normal: { high: 75, normal: 65, low: 55 },  // Reduced quality for faster loading
    fast: { high: 85, normal: 75, low: 65 }     // Still good quality on fast connections
  }
  
  return qualityMatrix[connectionQuality][priority]
}
