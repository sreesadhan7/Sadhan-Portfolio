# Sadhan Portfolio 🚀

A modern, animated portfolio website built with Next.js, TypeScript, and Three.js for 3D effects. This portfolio showcases education, work experience, projects, skills, and contact information in a visually appealing single-page application.

## ✨ Features

- **Modern Design**: Clean, professional design with gradient colors and glass effects
- **Smooth Animations**: Framer Motion animations for smooth user experience
- **3D Background**: Three.js powered floating particles for aesthetic appeal
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode Ready**: Built with dark mode support
- **Performance Optimized**: Next.js 14 with App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Contact via Resend**: Serverless email sending using Resend API through a Next.js API route

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router for server-side rendering and optimal performance
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth, performant animations
- **Three.js**: 3D graphics library for background effects
- **React Three Fiber**: React renderer for Three.js
- **Lucide React**: Beautiful, customizable icons

### Email/Contact
- **Resend API**: Emails are sent via a Next.js API route at `src/app/api/send-email/route.ts` using your `RESEND_API_KEY`

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
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main page component
│   └── api/
│       └── send-email/
│           └── route.ts    # Next.js API route to send mail via Resend
├── components/             # Reusable UI components
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About and education section
│   ├── Experience.tsx      # Work experience section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills and technologies
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer section
│   └── FloatingParticles.tsx # 3D background particles
├── data/                   # Static data and content
│   └── portfolio.ts        # Portfolio data structure
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions
└── types/                  # TypeScript type definitions
    └── index.ts            # Interface definitions
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

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font optimization
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔮 Future Enhancements

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

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using modern web technologies 