import { PersonalInfo, Education, WorkExperience, Project, Skill, ContactInfo, SocialLink, NavigationItem } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Sai Sree Sadhan Polimera",
  title: "Software Engineer",
  email: "sreesadhan.polimera11@gmail.com",
  phone: "+1 (352) 756 0268",
  about: "I'm a passionate Software Engineer with expertise in full-stack development, AI/ML, and cloud technologies. I love turning complex problems into simple, scalable and efficient solutions and am always eager to learn and apply cutting-edge technologies. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.",
  avatar: "/api/placeholder/400/400"
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science in Computer Science",
    institution: "University of Florida",
    field: "Computer Science",
    startDate: "2023-08-01",
    endDate: "2025-05-31",
    gpa: "3.81/4.0",
    description: "Focused on advanced computer science concepts including AI/ML, cloud computing, and full-stack development.",
    achievements: [
      "Data Structures & Algorithms, Machine Learning, Cloud Computing",
      "Object-Oriented Programming (OOPs), Artificial Intelligence, System Design",
      "Full-Stack Development, Natural Language Processing, Data Science & Analysis, Data Engineering"
    ],
    location: "Gainesville, FL"
  },
  {
    id: "2",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Amrita Vishwa Vidyapeetham",
    field: "Computer Science",
    startDate: "2017-07-01",
    endDate: "2021-07-31",
    gpa: "3.8/4.0",
    description: "Comprehensive computer science education with focus on software development and system design.",
    achievements: [
      "Data Structures & Algorithms, Machine Learning, Cloud Computing",
      "Object-Oriented Programming (OOPs), System Design, Software Development Life Cycle",
      "Full-Stack Development, Data Science & Analysis, Computer Networks, Statistics, Compiler Design, Operating Systems, Computer Architecture, Software Engineering"
    ],
    location: "Coimbatore, India"
  }
]

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "University of Florida",
    location: "Gainesville, FL",
    startDate: "2024-08-02",
    endDate: "Present",
    current: true,
    description: "Leading instruction and development in AI/ML concepts while building data-driven solutions and interactive visualizations.",
    responsibilities: [
      "Led instruction for 60+ students on AI and Machine Learning concepts using environmental datasets, emphasizing pre-processing and feature engineering in Python (NumPy, Pandas) to ensure high-quality inputs for modeling.",
      "Facilitated lab sessions in Python (scikit-learn) to demonstrate classification and regression algorithms, boosting prediction accuracy by 77% and reducing false positives by 26% through effective feature engineering and hyperparameter tuning.",
      "Incorporated prompt engineering with LLMs to assist colleagues extract insights from data, streamlining workflows by 40%.",
      "Developed interactive visualizations in Python (Matplotlib, Seaborn) and Tableau to reveal hidden patterns, enabling real-time trend analysis and driving an 85% improvement in data-driven decision-making accuracy."
    ],
    technologies: ["Artifical Intelligence (AI)", "Machine Learning", "Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Tableau", "LLMs", "Prompt Engineering"]
  },
  {
    id: "2",
    title: "Software Engineer – Full Stack Developer",
    company: "Arrow North Design",
    location: "Raleigh, NC",
    startDate: "2025-01-20",
    endDate: "2025-05-2",
    current: false,
    description: "Designed and developed scalable full-stack web applications with modern technologies and cloud-native architecture.",
    responsibilities: [
      "Designed a scalable full-stack web application using Next.js, TypeScript, and Tailwind CSS for responsive styling, optimizing state management and implementing OAuth/JWT flows, resulting in a 30% performance increase.",
      "Architected cloud-native applications with Firebase (OAuth) for secure authentication, enhanced UI/UX performance via Google Cloud Platform services and achieved 25% faster load times with seamless Vercel deployments.",
      "Integrated RESTful APIs in Python (Flask) by implementing microservices-based architecture with efficient API routing and refined NoSQL queries through proper indexing, reducing query latency by 40% and delivering scalable backend services.",
      "Automated CI/CD pipelines using GitHub Actions and Docker for consistent, scalable builds and enforced code quality via ESLint and unit testing, cutting deployment errors by 75% and accelerating product release cycles."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "OAuth", "JWT Authentication", "Python (Flask)", "RESTful APIs", "NoSQL", "Google Cloud Platform (GCP)", "CI/CD", "GitHub", "Docker", "Vercel", "Git"]
  },
  {
    id: "3",
    title: "Software Engineer – Full Stack Developer",
    company: "TCS",
    location: "Bangalore, India",
    startDate: "2021-04-02",
    endDate: "2023-07-31",
    current: false,
    description: "Led development and testing for enterprise applications while optimizing performance and leading agile teams.",
    responsibilities: [
      "Spearheaded functional, UAT, and QA testing for 10+ enterprise apps using HP ALM for defect tracking and AWS CloudWatch for log monitoring, achieving 98% defect coverage and improving release quality to over 90%.",
      "Enhanced UI/UX design with React Hooks for state management, reducing production issues by 30% and leveraged TypeScript for static typing and AngularJS, enabling 40% faster issue resolution.",
      "Developed data validation logic and backend applications in Node.js (Express.js), integrated REST APIs via Python (Django) for scalable endpoints, and optimized MySQL/PostgreSQL queries to boost performance by 45%.",
      "Led agile teams to increase project efficiency by 80% through Jira for task tracking, Confluence for knowledge sharing, and ServiceNow/MS Excel for workflow documentation, increasing stakeholder satisfaction by 97%."
    ],
    technologies: ["React", "TypeScript", "AngularJS", "Node.js", "Express.js", "Python", "Django", "MySQL", "PostgreSQL", "AWS CloudWatch", "Jira", "Confluence", "ServiceNow", "MS Excel", "HP ALM", "Agile Methodologies", "AWS", "Git", "Project Management", "Leadership", "Team Collaboration", "Communication", "Problem Solving", "Time Management", "Continuous Learning"]
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Agentic AI Systems",
    description: "Built automated AI agents on the MindStudio platform, automating workflows and cutting manual tasks by 45%. Refined Prompt Engineering capabilities to increase task efficiency by 60%, delivering scalable, production-ready solutions.",
    image: "/api/placeholder/600/400",
    technologies: ["MindStudio", "n8n", "RAG", "LLMs", "Automation", "Prompt Engineering"],
    githubUrl: "https://github.com/sreesadhan/agentic-ai-systems",
    liveUrl: "",
    features: [
      "Automated AI agents on MindStudio platform",
      "45% reduction in manual tasks",
      "60% increase in task efficiency",
      "Scalable, production-ready solutions",
      "Advanced prompt engineering capabilities"
    ],
    category: "ai"
  },
  {
    id: "2",
    title: "Cat Fact Tracker",
    description: "Redesigned a fully functional animal fact tracker app with Next.js, TypeScript, and API integrations, attracting 10,000+ active users. Integrated external API with 98% uptime handling 500+ requests per minute.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Next.js", "TypeScript", "RESTful API", "SQL", "Git", "FastAPI"],
    githubUrl: "https://github.com/sreesadhan/cat-fact-tracker",
    liveUrl: "https://cat-fact-tracker.vercel.app",
    features: [
      "10,000+ active users",
      "98% API uptime",
      "500+ requests per minute handling",
      "Real-time cat facts delivery",
      "Next.js and TypeScript frontend",
      "Python FastAPI backend"
    ],
    category: "web"
  },
  {
    id: "3",
    title: "Automated Text Censoring",
    description: "Orchestrated NLP and ETL pipelines, improving processing accuracy by 30% through advanced pre-processing. Established Git workflow and reporting pipelines, reducing manual effort by 40% and accelerating CI/CD execution by 25%.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "PyTest", "Git", "CI/CD", "Power BI", "Transformers", "NLP", "ETL"],
    githubUrl: "https://github.com/sreesadhan/automated-text-censoring",
    liveUrl: "",
    features: [
      "30% improvement in processing accuracy",
      "40% reduction in manual effort",
      "25% acceleration in CI/CD execution",
      "Advanced NLP and ETL pipelines",
      "Git workflow optimization",
      "Power BI reporting integration"
    ],
    category: "ai"
  }
]

export const skills: Skill[] = [
  // Languages
  { id: "1", name: "Python", category: "backend", icon: "🐍" },
  { id: "2", name: "Java", category: "backend", icon: "☕" },
  { id: "3", name: "C/C++", category: "backend", icon: "⚙️" },
  { id: "4", name: "JavaScript", category: "frontend", icon: "🟨" },
  { id: "5", name: "TypeScript", category: "frontend", icon: "📘" },
  { id: "6", name: "HTML5/CSS", category: "frontend", icon: "🌐" },
  { id: "7", name: "R", category: "backend", icon: "📊" },
  { id: "8", name: "Golang", category: "backend", icon: "🐹" },
  
  // Frameworks
  { id: "9", name: "ReactJS", category: "frontend", icon: "⚛️" },
  { id: "10", name: "NextJS", category: "frontend", icon: "⚡" },
  { id: "11", name: "AngularJS", category: "frontend", icon: "🅰️" },
  { id: "12", name: "NodeJS", category: "backend", icon: "🟢" },
  { id: "13", name: "Spring Boot", category: "backend", icon: "🍃" },
  { id: "14", name: "TensorFlow", category: "other", icon: "🤖" },
  { id: "15", name: "PyTorch", category: "other", icon: "🔥" },
  
  // Databases
  { id: "16", name: "SQL", category: "database", icon: "🗄️" },
  { id: "17", name: "NoSQL", category: "database", icon: "📦" },
  { id: "18", name: "MongoDB", category: "database", icon: "🍃" },
  { id: "19", name: "Snowflake", category: "database", icon: "❄️" },
  { id: "20", name: "Netezza", category: "database", icon: "🔷" },
  
  // Cloud & DevOps
  { id: "21", name: "AWS", category: "devops", icon: "☁️" },
  { id: "22", name: "Azure", category: "devops", icon: "🔷" },
  { id: "23", name: "GCP", category: "devops", icon: "☁️" },
  { id: "24", name: "Docker", category: "devops", icon: "🐳" },
  { id: "25", name: "Kubernetes", category: "devops", icon: "⚓" },
  { id: "26", name: "Git", category: "devops", icon: "📝" },
  
  // Analytics & ML
  { id: "27", name: "Pandas", category: "other", icon: "🐼" },
  { id: "28", name: "NumPy", category: "other", icon: "🔢" },
  { id: "29", name: "scikit-learn", category: "other", icon: "🧠" },
  { id: "30", name: "Tableau", category: "other", icon: "📊" },
  { id: "31", name: "Power BI", category: "other", icon: "📈" },
  
  // Other Tools
  { id: "32", name: "Kafka", category: "other", icon: "📨" },
  { id: "33", name: "Spark", category: "other", icon: "🔥" },
  { id: "34", name: "Linux/Unix", category: "other", icon: "🐧" },
  { id: "35", name: "Jira", category: "other", icon: "📋" },
  { id: "36", name: "Confluence", category: "other", icon: "📚" }
]

export const contactInfo: ContactInfo = {
  email: "sreesadhan.polimera11@gmail.com",
  phone: "+1 (352) 756 0268",
  linkedin: "https://www.linkedin.com/in/sree-sadhan/",
  github: "https://github.com/sreesadhan7",
  twitter: "",
  portfolio: ""
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/sreesadhan7",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sree-sadhan/",
    icon: "linkedin"
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