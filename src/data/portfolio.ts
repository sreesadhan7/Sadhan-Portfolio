import { PersonalInfo, Education, WorkExperience, Project, Skill, ContactInfo, SocialLink, NavigationItem } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Sadhan",
  title: "Software Engineer",
  email: "sadhan@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  birthDate: "1998-06-15",
  about: "I'm a passionate Software Engineer with a strong foundation in modern web technologies and a keen eye for creating exceptional user experiences. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.",
  avatar: "/api/placeholder/400/400"
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    field: "Computer Science",
    startDate: "2016-08-01",
    endDate: "2020-05-15",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, algorithms, and data structures. Completed capstone project on machine learning applications.",
    achievements: [
      "Dean's List for 4 consecutive years",
      "Computer Science Honor Society member",
      "Led 3 successful hackathon projects",
      "Graduated with distinction"
    ]
  },
  {
    id: "2",
    degree: "High School Diploma",
    institution: "Tech High School",
    field: "Science and Technology",
    startDate: "2012-09-01",
    endDate: "2016-06-15",
    gpa: "4.0/4.0",
    description: "Specialized in science and technology with focus on computer programming and mathematics.",
    achievements: [
      "Valedictorian",
      "National Merit Scholar",
      "President of Computer Science Club",
      "First place in state science fair"
    ]
  }
]

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    title: "Software Engineer Intern",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "2019-06-01",
    endDate: "2019-08-31",
    current: false,
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    responsibilities: [
      "Built responsive web interfaces using React and TypeScript",
      "Implemented RESTful APIs using Node.js and Express",
      "Collaborated with designers to improve user experience",
      "Participated in code reviews and agile development processes"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Git"]
  },
  {
    id: "2",
    title: "Teaching Assistant",
    company: "UC Berkeley",
    location: "Berkeley, CA",
    startDate: "2018-09-01",
    endDate: "2020-05-15",
    current: false,
    description: "Assisted professors in teaching computer science courses and helped students understand complex programming concepts.",
    responsibilities: [
      "Led weekly discussion sections for CS61A and CS61B",
      "Graded programming assignments and provided feedback",
      "Held office hours to help students with programming challenges",
      "Created supplementary learning materials and examples"
    ],
    technologies: ["Python", "Java", "Data Structures", "Algorithms"]
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with modern web technologies. Features include user authentication, product management, shopping cart, and payment processing.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/sadhan/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Admin dashboard for product management",
      "Payment processing with Stripe",
      "Responsive design for all devices"
    ],
    category: "web"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/sadhan/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    features: [
      "Real-time task updates",
      "Team collaboration and sharing",
      "Progress tracking and analytics",
      "Drag and drop interface",
      "Mobile responsive design",
      "Dark mode support"
    ],
    category: "web"
  },
  {
    id: "3",
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by machine learning that can understand context and provide helpful responses.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
    githubUrl: "https://github.com/sadhan/ai-chatbot",
    liveUrl: "https://ai-chatbot-demo.vercel.app",
    features: [
      "Natural language processing",
      "Context-aware conversations",
      "Multi-language support",
      "Learning from user interactions",
      "Integration with external APIs",
      "Analytics dashboard"
    ],
    category: "ai"
  }
]

export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "React", category: "frontend", proficiency: "advanced", icon: "⚛️" },
  { id: "2", name: "Next.js", category: "frontend", proficiency: "advanced", icon: "⚡" },
  { id: "3", name: "TypeScript", category: "frontend", proficiency: "advanced", icon: "📘" },
  { id: "4", name: "Tailwind CSS", category: "frontend", proficiency: "advanced", icon: "🎨" },
  { id: "5", name: "HTML/CSS", category: "frontend", proficiency: "expert", icon: "🌐" },
  { id: "6", name: "JavaScript", category: "frontend", proficiency: "expert", icon: "🟨" },
  
  // Backend
  { id: "7", name: "Python", category: "backend", proficiency: "advanced", icon: "🐍" },
  { id: "8", name: "Django", category: "backend", proficiency: "intermediate", icon: "🎯" },
  { id: "9", name: "Node.js", category: "backend", proficiency: "intermediate", icon: "🟢" },
  { id: "10", name: "Express.js", category: "backend", proficiency: "intermediate", icon: "🚂" },
  
  // Database
  { id: "11", name: "PostgreSQL", category: "database", proficiency: "intermediate", icon: "🐘" },
  { id: "12", name: "MongoDB", category: "database", proficiency: "intermediate", icon: "🍃" },
  { id: "13", name: "SQLite", category: "database", proficiency: "advanced", icon: "💾" },
  
  // DevOps
  { id: "14", name: "Git", category: "devops", proficiency: "advanced", icon: "📝" },
  { id: "15", name: "Docker", category: "devops", proficiency: "beginner", icon: "🐳" },
  { id: "16", name: "AWS", category: "devops", proficiency: "beginner", icon: "☁️" },
  
  // Other
  { id: "17", name: "Machine Learning", category: "other", proficiency: "intermediate", icon: "🤖" },
  { id: "18", name: "Data Structures", category: "other", proficiency: "advanced", icon: "🏗️" },
  { id: "19", name: "Algorithms", category: "other", proficiency: "advanced", icon: "⚙️" }
]

export const contactInfo: ContactInfo = {
  email: "sadhan@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/sadhan",
  github: "https://github.com/sadhan",
  twitter: "https://twitter.com/sadhan",
  portfolio: "https://sadhan.dev"
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/sadhan",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/sadhan",
    icon: "linkedin"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/sadhan",
    icon: "twitter"
  },
  {
    platform: "Portfolio",
    url: "https://sadhan.dev",
    icon: "globe"
  }
]

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Projects", href: "#projects", icon: "code" },
  { label: "Skills", href: "#skills", icon: "zap" },
  { label: "Contact", href: "#contact", icon: "mail" }
] 