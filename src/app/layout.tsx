import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sadhan - Software Engineer Portfolio',
  description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'Django'],
  authors: [{ name: 'Sadhan' }],
  creator: 'Sadhan',
  openGraph: {
    title: 'Sadhan - Software Engineer Portfolio',
    description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadhan - Software Engineer Portfolio',
    description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
} 