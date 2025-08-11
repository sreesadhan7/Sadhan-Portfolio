import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Sadhan Portfolio',
  description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'Django'],
  authors: [{ name: 'Sai Sree Sadhan Polimera' }],
  creator: 'Sai Sree Sadhan Polimera',
  openGraph: {
    title: 'Sree Sadhan - Software Engineer Portfolio',
    description: 'Professional portfolio showcasing my skills, experience, and projects in software engineering.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sree Sadhan - Software Engineer Portfolio',
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
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* ✅ Set theme before React hydrates */}
        <Script id="theme-init" strategy="beforeInteractive">
            {`
              try {
                var t = localStorage.getItem('theme');
                if (!t) {
                  localStorage.setItem('theme', 'light'); // ✅ Default theme
                  t = 'light';
                }
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground dark:bg-slate-900 dark:text-slate-100`}> 
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
} 