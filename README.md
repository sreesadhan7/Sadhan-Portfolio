# Sadhan Portfolio 🚀

A modern, animated portfolio website built with **Next.js**, **TypeScript**, **Three.js** for 3D effects and deployed seamlessly on **Vercel**. This portfolio showcases education, work experience, projects, skills, and contact information in a visually appealing single-page application.

## ✨ Features

- **Modern Design**: Clean, professional design with gradient colors and glass effects
- **Smooth Animations**: Framer Motion animations for smooth user experience
- **3D Background**: Three.js powered floating particles for aesthetic appeal
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode Ready**: Built with dark mode support
- **Performance Optimized**: Next.js 14 with App Router for optimal performance
- **Advanced Image Optimization**: Intelligent preloading and adaptive quality based on connection speed
- **Real-time Analytics**: Vercel Analytics and Speed Insights for performance monitoring
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Contact via Resend**: Serverless email sending using Resend API through a Next.js API route
- **Deployed on Vercel**: Instant, secure, and globally distributed deployment for maximum performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router for server-side rendering and optimal performance
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth, performant animations
- **Three.js**: 3D graphics library for background effects
- **React Three Fiber**: React renderer for Three.js
- **Lucide React**: Beautiful, customizable icons

### Performance & Analytics
- **Vercel Analytics**: Real-time web analytics and performance insights
- **Vercel Speed Insights**: Core Web Vitals monitoring and optimization
- **Image Optimization**: Advanced image preloading and adaptive quality based on connection speed
- **Performance Monitoring**: Enhanced monitoring for image loading and user interactions

### Email/Contact
- **Resend API**: Emails are sent via a Next.js API route at `src/app/api/send-email/route.ts` using your `RESEND_API_KEY`

### **Deployment**
- **Vercel** – CI/CD, global CDN, and instant deployments

## 🚀 Why This Tech Stack?

### Next.js 14
- **App Router**: Modern file-based routing system
- **Server-Side Rendering**: Better SEO and initial page load
- **Automatic Code Splitting**: Optimized bundle sizes
- **Built-in Performance**: Image optimization, font optimization

### TypeScript
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Maintainability**: Easier to maintain large codebases
- **Team Collaboration**: Clear interfaces and contracts

### Tailwind CSS
- **Rapid Development**: Build UIs quickly with utility classes
- **Consistent Design**: Predefined design system
- **Responsive**: Built-in responsive utilities
- **Customizable**: Easy to extend and customize

### Framer Motion
- **Performance**: Optimized animations that don't block the main thread
- **Declarative**: Simple, intuitive API
- **Gestures**: Built-in support for touch and mouse interactions
- **Accessibility**: Respects user preferences for reduced motion

### Three.js + React Three Fiber
- **3D Graphics**: Create immersive 3D experiences
- **Performance**: Hardware-accelerated 3D rendering
- **Cross-platform**: Works on all modern browsers
- **React Integration**: Seamless integration with React components

## 📁 Project Structure

```
sadhan-portfolio/                           # Project root
├── public/                                 # Static assets served as-is
│   ├── logos/                              # Company / tech logos
│   ├── projectImages/                      # Project screenshots and images
│   ├── favicon.png                         # Browser tab icon
│   ├── MVNC4784.JPG                        # Profile/hero image
│   └── resume.pdf                          # Downloadable résumé
│
├── src/                                    # Application source
│   ├── app/                                # Next.js App Router
│   │   ├── globals.css                     # Global styles & animations
│   │   ├── responsive-fixes.css            # Additional responsive design fixes
│   │   ├── layout.tsx                      # Root layout component
│   │   ├── page.tsx                        # Main landing page
│   │   └── api/                            # Serverless API routes
│   │       ├── send-email/                 # Email endpoint folder
│   │       │   └── route.ts               # Next.js API to send mail via Resend
│   │       └── chat/                       # RAG chatbot endpoint folder
│   │           └── route.ts               # Embed query → retrieve chunks → generate answer
│   │
│   ├── components/                         # Reusable UI components
│   │   ├── About.tsx                       # About & education section
│   │   ├── Chatbot.tsx                     # Floating RAG chatbot widget
│   │   ├── Contact.tsx                     # Contact form & info
│   │   ├── Experience.tsx                  # Experience timeline
│   │   ├── FloatingParticles.tsx           # Three.js background particles
│   │   ├── Footer.tsx                      # Footer with links
│   │   ├── Hero.tsx                        # Hero / intro section
│   │   ├── ImagePrefetch.tsx               # Performance: Image preloading component
│   │   ├── Navigation.tsx                  # Top navigation bar
│   │   ├── PerformanceMonitor.tsx          # Performance monitoring initialization
│   │   ├── ProjectImage.tsx                # Optimized project image component
│   │   ├── Projects.tsx                    # Projects showcase
│   │   ├── Skills.tsx                      # Skills grid
│   │   └── ThemeToggle.tsx                 # Light/Dark mode toggle
│   │
│   ├── data/
│   │   └── portfolio.ts                    # Static content (projects, skills, etc.)
│   │
│   ├── hooks/
│   │   └── useOptimizedNavigation.ts       # Custom hook for optimized project navigation
│   │
│   ├── lib/
│   │   └── utils.ts                        # Helpers & utilities
│   │
│   ├── types/
│   │   └── index.ts                        # Shared TypeScript types & interfaces
│   │
│   └── utils/                              # Performance optimization utilities
│       ├── enhancedImagePerformanceMonitor.ts  # Advanced image performance tracking
│       ├── imageOptimization.ts            # Adaptive image quality based on connection
│       └── imagePreloader.ts               # Intelligent image preloading system
│
├── scripts/
│   └── generate_kb.py                      # Offline script: embeds KB chunks → public/knowledge-base.json
├── requirements.txt                        # Python dependency for KB generation (google-genai)
├── .env.local                              # Local env vars (e.g., RESEND_API_KEY, GOOGLE_API_KEY)
├── .gitignore                              # Git ignore rules
├── next-env.d.ts                           # Next.js TypeScript ambient types
├── next.config.js                          # Next.js configuration
├── package-lock.json                       # NPM lockfile
├── package.json                            # Scripts & dependencies
├── postcss.config.js                       # PostCSS config (used by Tailwind)
├── PROJECT_OVERVIEW.md                     # High-level docs (optional)
├── QUICK_START.md                          # Quick setup notes (optional)
├── RAG_CHATBOT.md                          # RAG chatbot architecture and setup guide
├── README.md                               # Project readme
├── RESEND_SETUP.md                         # Resend API setup guide
├── RESPONSIVE_IMPLEMENTATION.md            # Responsive design implementation details
├── tailwind.config.js                      # Tailwind CSS configuration
└── tsconfig.json                           # TypeScript compiler options
```

## 🎯 Key Components

### Navigation
- Sticky navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Scroll-to-top functionality

### Hero Section
- Personal introduction with animated text
- Social media links
- Call-to-action buttons
- 3D avatar placeholder

### About Section
- Personal information
- Education timeline
- Animated content reveal

### Experience Section
- Work experience timeline
- Company details and technologies
- Responsive layout

### Projects Section
- Filterable project categories
- Project cards with animations
- GitHub and live demo links

### Skills Section
- Categorized skills by proficiency
- Animated progress bars
- Technology icons

### Contact Section
- Contact form with validation
- Contact information display
- Social media links
- Form submission feedback

### 3D Background
- Floating particles using Three.js
- Smooth animations
- Performance optimized

### Performance Optimization Components
- **ImagePrefetch**: Intelligent image preloading for faster project image loading
- **PerformanceMonitor**: Real-time performance monitoring and metrics collection
- **ProjectImage**: Adaptive image loading with connection-aware quality optimization
- **useOptimizedNavigation**: Custom hook for optimized project navigation and preloading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sadhan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables (Resend)**
   Create a `.env.local` at the project root and add:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Deployment on Vercel
This portfolio is deployed on Vercel for:
- Instant builds & previews
- Global CDN delivery
- Automatic HTTPS

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  portfolio: {
    primary: '#3b82f6',    // Blue
    secondary: '#8b5cf6',  // Purple
    accent: '#06b6d4',     // Cyan
  }
}
```

### Content
Update portfolio content in `src/data/portfolio.ts`:
- Personal information
- Education details
- Work experience
- Projects
- Skills
- Contact information

### Animations
Customize animations in `src/app/globals.css`:
- Keyframe animations
- Animation durations
- Easing functions

## 🔧 Development

### Adding New Sections
1. Create component in `src/components/`
2. Add to `src/app/page.tsx`
3. Update navigation in `src/data/portfolio.ts`
4. Add corresponding types in `src/types/index.ts`

### Performance Optimization
- Use the `ImagePrefetch` component to preload images
- Implement `PerformanceMonitor` for tracking metrics
- Utilize `ProjectImage` for optimized image rendering
- Leverage `useOptimizedNavigation` hook for smart preloading

### Styling
- Use Tailwind CSS utility classes
- Create custom components in `globals.css`
- Follow the established design system

### Animations
- Use Framer Motion for component animations
- CSS animations for simple effects
- Maintain performance with `will-change` and `transform3d`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode support is built-in and automatically detects system preferences. Customize colors in the CSS variables.

## 🚀 Performance Optimization

### Built-in Next.js Optimizations
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component with adaptive loading
- **Font Optimization**: Next.js font optimization
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

### Advanced Performance Features
- **Intelligent Image Preloading**: Background preloading of project images based on priority
- **Connection-Aware Loading**: Adaptive image quality based on user's connection speed
- **Performance Monitoring**: Real-time tracking of image load times and user interactions
- **Optimized Navigation**: Smart preloading of content when users hover over navigation items
- **Vercel Analytics**: Built-in analytics for performance insights and user behavior
- **Core Web Vitals Monitoring**: Speed Insights for LCP, FID, and CLS optimization

## � Documentation

This project includes comprehensive documentation for different aspects:

- **README.md** - Main project documentation (this file)
- **RAG_CHATBOT.md** - Deep dive into the RAG chatbot: architecture, knowledge base, setup, and design decisions
- **PROJECT_OVERVIEW.md** - High-level architecture and design decisions
- **QUICK_START.md** - Fast setup guide for developers
- **RESEND_SETUP.md** - Detailed guide for setting up email functionality
- **RESPONSIVE_IMPLEMENTATION.md** - Complete responsive design implementation details

## �🔮 Future Enhancements

- **CMS Integration (optional)**: If you want editable content in the future
- **Blog Section**: Technical articles and insights
- **Portfolio Analytics**: Visitor tracking and insights
- **Interactive 3D Models**: More complex 3D elements
- **PWA Support**: Progressive web app features
- **Internationalization**: Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: sreesadhan.polimera11@gmail.com
---

Built with ❤️ using modern web technologies 