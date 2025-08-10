export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location?: string
  birthDate?: string
  about: string
  avatar: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  description: string
  achievements: string[]
  location?: string
}

export interface WorkExperience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  responsibilities: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  features: string[]
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other'
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'databases' | 'cloud' | 'analytics' | 'leadership'
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

export interface ContactInfo {
  email: string
  phone: string
  linkedin?: string
  github?: string
  twitter?: string
  portfolio?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface NavigationItem {
  label: string
  href: string
  icon?: string
}

export interface AnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
} 