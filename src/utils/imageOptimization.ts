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
    slow: { high: 60, normal: 50, low: 40 },
    normal: { high: 85, normal: 75, low: 65 },
    fast: { high: 95, normal: 85, low: 75 }
  }
  
  return qualityMatrix[connectionQuality][priority]
}
