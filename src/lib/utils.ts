import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })
}

export function calculateAge(birthDate: string) {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return age
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    // Get element position relative to document
    const elementTop = element.offsetTop
    const navHeight = 80 // Account for fixed navigation height
    const targetPosition = elementTop - navHeight
    
    // Use window.scrollTo for better cross-browser compatibility
    // Especially important for Android browsers
    try {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    } catch (error) {
      // Fallback for older browsers that don't support smooth behavior
      window.scrollTo(0, targetPosition)
    }
    
    // Additional fallback using requestAnimationFrame for Android compatibility
    if (window.scrollY !== targetPosition) {
      const startTime = performance.now()
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 800 // 800ms animation
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        
        // Easing function for smooth animation
        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        const currentPosition = startPosition + distance * easeInOutCubic(progress)
        
        window.scrollTo(0, currentPosition)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }
} 