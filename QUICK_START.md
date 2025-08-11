# 🚀 Quick Start Guide - Sadhan Portfolio

## ✨ What's Built

Your portfolio is now complete with:
- ✅ **Modern Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- ✅ **All Sections**: Hero, About, Experience, Projects, Skills, Contact, Footer
- ✅ **Smooth Animations**: Framer Motion animations throughout
- ✅ **3D Background**: Three.js floating particles for visual appeal
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Contact Form**: Functional contact form with validation
- ✅ **Professional UI**: Clean, modern design with gradient effects

## 🚀 How to Run

### 1. Environment setup (Resend)
Create a `.env.local` file in the project root with:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```
Restart the dev server after adding or changing env vars.

### 2. Development Server
```bash
npm run dev
```
Open http://localhost:3000

### 3. Build for production:
```bash
npm run build
npm start
```

## 🎨 Customize Your Portfolio

### 1. Update Personal Information
Edit `src/data/portfolio.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  about: "Your personal description...",
  age: 25,
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567"
};
```

### 2. Update Education
```typescript
export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    location: "City, Country",
    startDate: "2020-09",
    endDate: "2024-05",
    gpa: "3.8",
    achievements: ["Dean's List", "Honors Program"]
  }
];
```

### 3. Update Work Experience
```typescript
export const workExperience: WorkExperience[] = [
  {
    id: "1",
    title: "Software Engineer Intern",
    company: "Tech Company",
    location: "City, Country",
    startDate: "2023-06",
    endDate: "2023-08",
    description: "Your role description...",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
    technologies: ["React", "Node.js", "Python"]
  }
];
```

### 4. Update Projects
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web Apps",
    features: ["Feature 1", "Feature 2"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com"
  }
];
```

### 5. Update Skills
```typescript
export const skills: Skill[] = [
  {
    id: "1",
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    proficiency: "Advanced"
  }
];
```

### 6. Update Contact Information
```typescript
export const contactInfo: ContactInfo = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country"
};
```

### 7. Update Social Links
```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin
  }
];
```

## 🎨 Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  portfolio: {
    primary: '#3b82f6',    // Change to your preferred blue
    secondary: '#8b5cf6',  // Change to your preferred purple
    accent: '#06b6d4',     // Change to your preferred cyan
  }
}
```

## 📱 Test Responsiveness

1. **Desktop**: View at http://localhost:3000
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize browser to ~375px width
4. **DevTools**: Use Chrome DevTools device simulation

## 🔧 Key Files to Know

- **`src/app/page.tsx`**: Main page layout
- **`src/data/portfolio.ts`**: All your content
- **`src/components/`**: Individual section components
- **`src/app/globals.css`**: Global styles and animations
- **`tailwind.config.js`**: Color scheme and customizations

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Recommended for Next.js)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build: `npm run build`
2. Upload `out/` folder to Netlify

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Push `out/` folder to `gh-pages` branch

## 🎯 Next Steps

### Phase 1: Content (Current)
- ✅ Portfolio structure complete
- ✅ All sections implemented
- ✅ Responsive design ready
- ✅ Serverless contact form via Resend

### Phase 2: Content Personalization
- 🔄 Update personal information
- 🔄 Add your projects
- 🔄 Customize colors and styling
- 🔄 Add your own images

## 🆘 Need Help?

### Common Issues:
1. **Port 3000 in use**: Change port in `package.json`
2. **Build errors**: Check TypeScript types
3. **Styling issues**: Verify Tailwind CSS classes

### Resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🎉 Congratulations!

You now have a professional, modern portfolio that showcases:
- ✨ Beautiful animations and 3D effects
- 📱 Perfect responsiveness on all devices
- 🚀 Fast performance with Next.js
- 🎨 Modern design with Tailwind CSS
- 🔧 Easy customization and maintenance

**Your portfolio is ready to impress employers! 🚀**

---

**Current Status**: ✅ **RUNNING** at http://localhost:3000
**Next Action**: Customize the content in `src/data/portfolio.ts` 