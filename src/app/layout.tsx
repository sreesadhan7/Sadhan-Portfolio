import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './responsive-fixes.css'
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import { ImagePrefetch } from '@/components/ImagePrefetch'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'

// Optimize font loading with display swap and preload
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Sree Sadhan - Software Engineer Portfolio',
    template: '%s | Sree Sadhan Portfolio'
  },
  description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'Django'],
  authors: [{ name: 'Sai Sree Sadhan Polimera' }],
  creator: 'Sai Sree Sadhan Polimera',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Sree Sadhan - Software Engineer Portfolio',
    description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Sree Sadhan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sree Sadhan - Software Engineer Portfolio',
    description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload only critical assets for faster initial load */}
        <link rel="preload" href="/MVNC4784.JPG" as="image" type="image/jpeg" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Preload only first project image - FIXED: use .webp */}
        <link rel="preload" href="/projectImages/agentic-ai-systems.webp" as="image" type="image/webp" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="preconnect" href="https://github.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline for faster rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
            html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
            body{margin:0;line-height:inherit}
            :root{--background:0 0% 100%;--foreground:222.2 84% 4.9%}
            .dark{--background:222.2 84% 4.9%;--foreground:210 40% 98%}
          `
        }} />
        
        {/* ✅ Set theme before React hydrates - Optimized */}
        <Script id="theme-init" strategy="beforeInteractive">
            {`
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'light';
                  document.documentElement.classList.toggle('dark', t === 'dark');
                } catch (e) {}
              })();
            `}
        </Script>
      </head>
      <body className={`${inter.className} ${inter.variable} antialiased bg-background text-foreground dark:bg-slate-900 dark:text-slate-100 font-sans`} suppressHydrationWarning>
        <ImagePrefetch priority={2} />
        <PerformanceMonitor />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
} 