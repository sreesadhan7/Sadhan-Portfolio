# Sadhan Portfolio - Complete Project Overview 🚀

## 🎯 Project Summary

This is a comprehensive portfolio website built to showcase education, work experience, projects, skills, and contact information in a modern, animated single-page application with 3D visual effects.

## 🏗️ Architecture Overview

### Frontend (Next.js 14 + TypeScript)
- **Single Page Application**: All content loads in one page with smooth scrolling
- **Component-Based**: Modular React components for maintainability
- **Type Safety**: Full TypeScript implementation for robust development
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js optimizations for fast loading
- **Serverless Email**: Next.js API route integrates with Resend to send emails without a separate backend

### Email (Resend API)
- **API Route**: `src/app/api/send-email/route.ts`
- **Security**: API key stored in `.env.local` as `RESEND_API_KEY`
- **Deliverability**: High deliverability through Resend infrastructure

## 🛠️ Tech Stack Deep Dive

### Why Next.js 14?
- **App Router** for modern routing
- **SSR/SSG** where needed
- **Performance**: Image/font optimization, code splitting

### Why TypeScript?
- Compile-time safety, better tooling, maintainability

### Why Tailwind CSS?
- Fast UI building, responsive utilities, consistent design system

### Why Framer Motion?
- Smooth, performant animations with declarative API

### Why Resend?
- Professional email delivery
- No server maintenance
- Simple REST API integration

## 📁 File Structure (Simplified)

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── send-email/
│           └── route.ts
├── components/
├── data/
├── lib/
└── types/
```

## 🔄 Data Flow and State Management
- **Static Data**: `src/data/portfolio.ts`
- **Local State**: React hooks for UI state
- **Form Handling**: Controlled inputs in `Contact.tsx`
- **Email Sending**: POST to `/api/send-email` → Resend API

## 🔒 Security Considerations
- **API Key**: Keep `RESEND_API_KEY` in `.env.local`
- **Validation**: Both client and API route validate required fields
- **CORS**: Not required since API route is same origin

## 🌐 Deployment
- **Hosting**: Vercel (recommended) or Netlify
- **Env Vars**: Add `RESEND_API_KEY` in project settings
- **DNS (optional)**: Configure a custom domain for branded sender later

## 🔮 Future Enhancements
- Blog, CMS integration, analytics, PWA, i18n, richer 3D scenes

---

This portfolio demonstrates modern frontend engineering with a clean, serverless approach to contact handling using Resend. 