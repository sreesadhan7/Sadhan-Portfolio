import { PersonalInfo, Education, WorkExperience, Project, Skill, ContactInfo, SocialLink, NavigationItem } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Sree Sadhan",
  title: "Software Engineer",
  email: "sreesadhan.polimera11@gmail.com",
  phone: "+1 (352) 756 0268",
  about: "I'm a passionate Software Engineer with expertise in Full-Stack Development, AI/ML, Data Engineering & Analysis, Application Testing and cloud technologies. I enjoy transforming complex challenges into scalable and user-friendly solutions, and I’m driven by a constant curiosity to learn and apply the latest advancements in technology. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or watching anime.",
  avatar: "/MVNC4784.JPG"
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science in Computer Science",
    institution: "University of Florida",
    field: "Computer Science",
    startDate: "2023-08-21",
    endDate: "2025-05-06",
    gpa: "3.81/4.0",
    description: "Focused on advanced computer science concepts including AI/ML, cloud computing, and full-stack development.",
    achievements: [
      "Data Structures & Algorithms, Machine Learning, Cloud Computing",
      "Object-Oriented Programming (OOPs), Artificial Intelligence, System Design",
      "Full-Stack Development, Natural Language Processing, Data Engineering"
    ],
    location: "Gainesville, FL, USA"
  },
  {
    id: "2",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Amrita Vishwa Vidyapeetham",
    field: "Computer Science",
    startDate: "2017-07-02",
    endDate: "2021-07-31",
    gpa: "3.8/4.0",
    description: "Comprehensive computer science education with focus on software development and system design.",
    achievements: [
      "Data Structures & Algorithms, Machine Learning, Cloud Computing",
      "Object-Oriented Programming (OOPs), System Design, Software Development Life Cycle",
      "Full-Stack Development, Data Science & Analysis, Computer Networks, Compiler Design, Operating Systems, Computer Architecture, Software Engineering"
    ],
    location: "Coimbatore, India"
  }
]

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    title: "Software Engineer – Full Stack",
    company: "Parse Software Development",
    location: "Lincoln, NE, USA",
    startDate: "2025-10-13",
    endDate: "2026-01-03",
    current: true,
    description: "Engineering HIPAA-compliant service data platforms and scalable cloud infrastructure for regulated production systems in financial services.",
    responsibilities: [
      "Engineered a HIPAA-compliant service data platform utilizing React, TypeScript, Java (Spring Boot) and PostgreSQL, streamlining backend services while achieving sub-2ms 95% REST API response times across high-frequency client workflows.",
      "Architected scalable AWS (ALB, EKS, IAM, S3) infrastructure using Terraform (IaC) and Docker orchestration, establishing zero-downtime deployments and reducing environment provisioning time by 80% for regulated production systems.",
      "Fortified CI/CD deployment pipelines via GitHub for automating Unit testing (JUnit, JMeter) and rollout validation, sustaining 99.8% production uptime and accelerating release cycles by 60% across distributed financial services.",
      "Implemented OAuth2, session-based RBAC with audit trails and role-based checks, reducing manual reconciliation effort by 30%."
    ],
    technologies: ["React", "TypeScript", "Java (Spring Boot)", "PostgreSQL", "AWS (ALB, EKS, IAM, S3)", "Terraform", "Docker", "CI/CD", "JUnit", "JMeter", "OAuth2", "RBAC", "GitHub"],
    companyLogoUrl: "/logos/Parse.png"
  },
  {
    id: "2",
    title: "Graduate Research Assistant",
    company: "University of Florida",
    location: "Gainesville, FL, USA",
    startDate: "2025-01-01",
    endDate: "2025-12-05",
    current: false,
    description: "Developed modular microservices and real-time AI/ML workflows supporting 500+ concurrent users across production deployments.",
    responsibilities: [
      "Developed modular microservices using React (Next.js), TypeScript and Java (Spring MVC), decreasing user-facing page load times by 40% across production deployments serving 500+ concurrent users.",
      "Scaled real-time backend operations with Python on GCP and GitHub-based CI/CD pipelines, sustaining 500+ requests/min with 98% uptime through automated testing workflows.",
      "Orchestrated Kafka-driven ETL pipelines and AI/ML + NLP workflows with Python (LangChain, Hugging Face), LLMs, and SQL databases to support real-time data workflows, improving automated redaction accuracy by 30%."
    ],
    technologies: ["React (Next.js)", "TypeScript", "Java (Spring MVC)", "Python", "GCP", "Kafka", "LangChain", "Hugging Face", "LLMs", "SQL", "CI/CD", "GitHub"],
    companyLogoUrl: "/logos/UF logo.png"
  },
  {
    id: "3",
    title: "Software Engineer Intern",
    company: "Arrow North Design",
    location: "Raleigh, NC, USA",
    startDate: "2025-01-01",
    endDate: "2025-05-02",
    current: false,
    description: "Spearheaded full-stack development with TypeScript, React and GraphQL for real-time data flows across distributed cloud-native microservices.",
    responsibilities: [
      "Spearheaded development of a full-stack application with TypeScript, React (Next.js) and GraphQL, elevating frontend performance by 30% for real-time data flows processed across distributed microservices.",
      "Architected cloud-native microservices using Python (Flask) with RESTful APIs on Azure, optimizing NoSQL data models to reduce API latency by 40% against high-throughput request volumes.",
      "Automated release pipelines leveraging CI/CD (GitHub) and Docker, cutting deployment failures by 75% and accelerating frontend load times by 25% through performance-first engineering practices."
    ],
    technologies: ["TypeScript", "React (Next.js)", "GraphQL", "Python (Flask)", "RESTful APIs", "Azure", "NoSQL", "CI/CD", "GitHub", "Docker"],
    companyLogoUrl: "/logos/Arrow North Design.jpeg"
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "TCS",
    location: "Bangalore, India",
    startDate: "2021-04-01",
    endDate: "2023-08-18",
    current: false,
    description: "Delivered mission-critical enterprise workflows, optimized high-volume trading systems, and led cross-functional Agile teams across 10+ AWS-hosted applications.",
    responsibilities: [
      "Delivered mission-critical workflows using Java (Spring Boot), Node.js and Python, generating RESTful APIs that reduced trade confirmation response times by 45% for high-volume SQL data transaction processing.",
      "Overhauled front-office UI/UX components with React, AngularJS and JavaScript while optimizing MySQL queries for data reporting pipelines, dropping production incidents by 30% across 10+ AWS-hosted trading systems.",
      "Streamlined software release quality across platforms using Test-Driven Development (TDD) and Unit Testing (JUnit) automation workflows, yielding an 87% reduction in post-release defects in regulated production environments.",
      "Directed 3+ cross-functional Agile (Scrum) teams via Jira and Confluence to deliver client-facing modules on schedule, enforcing HIPAA compliance and participating in on-call rotations, raising stakeholder satisfaction to 90%."
    ],
    technologies: ["Java (Spring Boot)", "Node.js", "Python", "React", "AngularJS", "JavaScript", "MySQL", "PostgreSQL", "RESTful APIs", "TDD", "JUnit", "AWS", "Jira", "Confluence", "Agile (Scrum)", "HIPAA"],
    companyLogoUrl: "/logos/TCS.jpg"
  }
]

export const projects: Project[] = [
  {
    id: "0",
    title: "Redactor AI",
    description: "A real-time document redaction platform powered by LLMs and Transformer models. Processes sensitive documents using ETL pipelines and projects redaction patterns through interactive dashboards for review accuracy and compliance.",
    image: "/projectImages/personal-data-censoring.webp",
    technologies: ["Python", "React", "JavaScript", "SQL", "LLMs", "Transformer Models", "Snowflake", "Streamlit", "Tableau", "GitHub CI/CD"],
    githubUrl: "https://github.com/sreesadhan7",
    features: [
      "55% faster release cycles via GitHub CI/CD",
      "40% reduction in manual processing effort",
      "85% improvement in review accuracy via Streamlit & Tableau dashboards"
    ],
    category: "ai"
  },
  {
    id: "1",
    title: "Agentic AI Systems",
    description: "A collection of automated AI-powered solutions built using the MindStudio Platform, designed to solve real-world problems and streamline everyday tasks.",
    image: "/projectImages/agentic-ai-systems.webp",
    technologies: ["MindStudio", "n8n", "RAG", "LLMs", "AI Agents", "Prompt Engineering", "Automation"],
    githubUrl: "https://github.com/sreesadhan7/AI-Agents-Portfolio",
    features: [
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
    description: "Cat Fact Tracker is a simple app that fetches, displays, and manages interesting cat facts. Users can view random facts, track favorites, and access a history of previously viewed facts.",
    image: "/projectImages/cat-fact-tracker.webp",
    technologies: ["Python", "Next.js", "TypeScript", "Git","React", "RESTful API", "SQL", "FastAPI"],
    githubUrl: "https://github.com/sreesadhan7/cat-fact-tracker",
    features: [
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
    title: "Sadhan Portfolio",
    description: "Personal Portfolio consisting my experience and projects.",
    image: "/projectImages/sadhan-portfolio.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/sreesadhan7/Sadhan-Portfolio",
    features: [
      "Showcases experience and projects",
      "Modern UI/UX",
      "Responsive design"
    ],
    category: "web"
  },
  {
    id: "4",
    title: "Solana Crypto Transaction",
    description: "A professional-grade Solana portfolio dashboard that allows users to connect their wallets and view balances, tokens, and transaction history. Demonstrates modern React development with Web3 integration, featuring a polished purple/violet theme and full mobile responsiveness.",
    image: "/projectImages/solana-crypto-transaction.webp",
    technologies: ["Solana", "React", "Next.js", "Web3", "TypeScript"],
    githubUrl: "https://github.com/sreesadhan7/Solana-Crypto-Transaction-dashboard",
    features: [
      "Wallet connection",
      "Token and transaction history",
      "Mobile responsive"
    ],
    category: "web"
  },
  {
    id: "5",
    title: "Email System Sender",
    description: "An email system sender built using AngularJS, Node.js, MySQL, and REST API. The webpage allows users to enter their name and email address into a form, storing the data in a MySQL database and sending a confirmation email to the provided address.",
    image: "/projectImages/email-system-sender.webp",
    technologies: ["AngularJS", "Node.js", "MySQL", "REST API"],
    githubUrl: "https://github.com/sreesadhan7/Email-System-Sender",
    features: [
      "User form for email entry",
      "MySQL database integration",
      "Confirmation email sending"
    ],
    category: "web"
  },
  {
    id: "6",
    title: "Data Engineering Pipeline",
    description: "A Python-based application integrating data visualization with a user-friendly web interface. Processes incident data extracted from PDFs issued by the Norman, Oklahoma Police Department to create meaningful insights through clustering and comparison visualizations.",
    image: "/projectImages/data-engineering-pipeline.webp",
    technologies: ["Python", "Flask", "scikit-learn", "Visualization"],
    githubUrl: "https://github.com/sreesadhan7/Data-Clustering-Analysis-and-Visualization-Pipeline",
    features: [
      "PDF data extraction",
      "Clustering analysis",
      "Interactive visualizations"
    ],
    category: "ai"
  },
  {
    id: "7",
    title: "The Unredactor",
    description: "A Python application that automates the recovery of redacted names in textual data. Processes training and test datasets, learning patterns from context to accurately predict and replace redacted names.",
    image: "/projectImages/the-unredactor.webp",
    technologies: ["Python", "NLP", "spaCy"],
    githubUrl: "https://github.com/sreesadhan7/The_Unredactor",
    features: [
      "Redacted name recovery",
      "Contextual pattern learning",
      "Automated prediction and replacement"
    ],
    category: "ai"
  },
  {
    id: "8",
    title: "Personal Data Censoring",
    description: "A Python-based redaction system that automates the identification and censoring of sensitive information within text files. The application leverages a global dictionary and spaCy pipeline for efficient data processing.",
    image: "/projectImages/personal-data-censoring.webp",
    technologies: ["Python", "spaCy", "NLP"],
    githubUrl: "https://github.com/sreesadhan7/Personal-Data-Censoring",
    features: [
      "Sensitive data identification",
      "Automated redaction",
      "spaCy pipeline integration"
    ],
    category: "ai"
  },
  {
    id: "9",
    title: "Data Automation Pipeline",
    description: "Automates the extraction of data from PDFs and inserts it into an SQL database.",
    image: "/projectImages/data-automation-pipeline.webp",
    technologies: ["Python", "PDF Extraction", "SQL", "Automation"],
    githubUrl: "https://github.com/sreesadhan7/Data-Collector_PDF-to-SQL-Automation",
    features: [
      "PDF data extraction",
      "SQL database automation",
      "Data transformation pipeline"
    ],
    category: "ai"
  },
  {
    id: "10",
    title: "Data Extraction Processing",
    description: "A project dedicated to extracting and processing data, leveraging APIs and Python for robust data workflows.",
    image: "/projectImages/data-extraction-processing.webp",
    technologies: ["Python", "API", "Data Processing"],
    githubUrl: "https://github.com/sreesadhan7/Data_Extraction-Processing",
    features: [
      "API data extraction",
      "Automated data processing",
      "Workflow optimization"
    ],
    category: "ai"
  },
  {
    id: "11",
    title: "Global Warming - Deep Dive",
    description: "An in-depth analysis of global warming data, including both backend and frontend components for data visualization and management.",
    image: "/projectImages/global-warming-deep-dive.webp",
    technologies: ["Python", "React", "Database", "Visualization"],
    githubUrl: "https://github.com/sreesadhan7/dbBack",
    features: [
      "Global warming data analysis",
      "Backend and frontend integration",
      "Data visualization"
    ],
    category: "web"
  },
  {
    id: "12",
    title: "Airline FAQ",
    description: "A frequently asked questions system for airlines, built using AWS RDS & Lambda.",
    image: "/projectImages/airline-faq.webp",
    technologies: ["EJS", "AWS RDS", "Lambda"],
    githubUrl: "https://github.com/sreesadhan7/Airline-FAQ",
    features: [
      "Airline FAQ system",
      "AWS RDS integration",
      "Serverless architecture"
    ],
    category: "web"
  },
  {
    id: "13",
    title: "Guide Me",
    description: "A guide allocation project made as per DBMS course requirements.",
    image: "/projectImages/guide-me.webp",
    technologies: ["EJS", "DBMS", "Web App"],
    githubUrl: "https://github.com/sreesadhan7/Guide-Me",
    features: [
      "Guide allocation system",
      "DBMS integration",
      "Web-based interface"
    ],
    category: "web"
  },
  {
    id: "14",
    title: "Elective Management System",
    description: "An online Elective Management system built in NuxtJS and Firestore.",
    image: "/projectImages/elective-management-system.webp",
    technologies: ["Vue.js", "NuxtJS", "Firestore"],
    githubUrl: "https://github.com/sreesadhan7/Elective-Management-System",
    features: [
      "Elective management",
      "NuxtJS frontend",
      "Firestore backend"
    ],
    category: "web"
  }
]

export const skills: Skill[] = [
  // Frontend Development
  { id: "1", name: "ReactJS", category: "frontend", icon: "⚛️" },
  { id: "2", name: "NextJS", category: "frontend", icon: "⚡" },
  { id: "3", name: "AngularJS", category: "frontend", icon: "🅰️" },
  { id: "4", name: "JavaScript", category: "frontend", icon: "🟨" },
  { id: "5", name: "TypeScript", category: "frontend", icon: "📘" },
  { id: "6", name: "HTML5", category: "frontend", icon: "🌐" },
  { id: "7", name: "Tailwind CSS", category: "frontend", icon: "💠" },
  { id: "8", name: "Three.js", category: "frontend", icon: "🧊" },
  { id: "9", name: "Vue.js", category: "frontend", icon: "🟩" },
  { id: "10", name: "D3.js", category: "frontend", icon: "📈" },

  // Backend Development
  { id: "11", name: "Python", category: "backend", icon: "🐍" },
  { id: "12", name: "Java", category: "backend", icon: "☕" },
  { id: "13", name: "C/C++", category: "backend", icon: "⚙️" },
  { id: "14", name: "NodeJS", category: "backend", icon: "🟢" },
  { id: "15", name: "Spring Boot", category: "backend", icon: "🍃" },
  { id: "16", name: "Golang", category: "backend", icon: "🐹" },
  { id: "17", name: "Django", category: "backend", icon: "🌱" },
  { id: "18", name: "Flask", category: "backend", icon: "🍶" },
  { id: "19", name: "Express.js", category: "backend", icon: "🚂" },
  { id: "69", name: "GraphQL", category: "backend", icon: "🔺" },

  // Databases & Storage
  { id: "20", name: "SQL", category: "databases", icon: "🗄️" },
  { id: "21", name: "NoSQL", category: "databases", icon: "📦" },
  { id: "22", name: "MongoDB", category: "databases", icon: "🍃" },
  { id: "23", name: "Snowflake", category: "databases", icon: "❄️" },
  { id: "24", name: "Netezza", category: "databases", icon: "🔷" },
  { id: "25", name: "PostgreSQL", category: "databases", icon: "🐘" },
  { id: "26", name: "MySQL", category: "databases", icon: "🐬" },
  { id: "27", name: "JSON", category: "databases", icon: "🔣" },

  // Cloud & DevOps
  { id: "28", name: "AWS", category: "cloud", icon: "☁️" },
  { id: "29", name: "Azure", category: "cloud", icon: "🔷" },
  { id: "30", name: "GCP", category: "cloud", icon: "☁️" },
  { id: "31", name: "Docker", category: "cloud", icon: "🐳" },
  { id: "32", name: "Kubernetes", category: "cloud", icon: "⚓" },
  { id: "33", name: "Git", category: "cloud", icon: "📝" },
  { id: "34", name: "GitHub", category: "cloud", icon: "🐙" },
  { id: "35", name: "VSCode", category: "cloud", icon: "💻" },
  { id: "36", name: "Vercel", category: "cloud", icon: "▲" },
  { id: "37", name: "Firebase", category: "cloud", icon: "🔥" },
  { id: "38", name: "HP ALM", category: "cloud", icon: "🧪" },
  { id: "39", name: "Linux/Unix", category: "cloud", icon: "🐧" },
  { id: "40", name: "Kafka", category: "cloud", icon: "📨" },
  { id: "41", name: "Spark", category: "cloud", icon: "🔥" },
  { id: "42", name: "CI/CD", category: "cloud", icon: "🔄" },
  { id: "43", name: "Cursor AI", category: "cloud", icon: "🤖" },
  { id: "70", name: "Terraform", category: "cloud", icon: "🏗️" },

  // Analytics & Data Science
  { id: "44", name: "Pandas", category: "analytics", icon: "🐼" },
  { id: "45", name: "NumPy", category: "analytics", icon: "🔢" },
  { id: "46", name: "scikit-learn", category: "analytics", icon: "🧠" },
  { id: "47", name: "TensorFlow", category: "analytics", icon: "🤖" },
  { id: "48", name: "PyTorch", category: "analytics", icon: "🔥" },
  { id: "49", name: "Tableau", category: "analytics", icon: "📊" },
  { id: "50", name: "Power BI", category: "analytics", icon: "📈" },
  { id: "51", name: "MS Excel", category: "analytics", icon: "📊" },
  { id: "52", name: "Jira", category: "analytics", icon: "📋" },
  { id: "53", name: "Confluence", category: "analytics", icon: "📚" },
  { id: "54", name: "Agile", category: "analytics", icon: "🏃" },
  { id: "55", name: "NLP", category: "analytics", icon: "🗣️" },
  { id: "56", name: "R", category: "analytics", icon: "📊" },
  { id: "57", name: "LLMs", category: "analytics", icon: "🧠" },
  { id: "58", name: "RAG", category: "analytics", icon: "🔗" },
  { id: "71", name: "LangChain", category: "analytics", icon: "⛓️" },
  { id: "72", name: "Hugging Face", category: "analytics", icon: "🤗" },

  // Leadership & Management
  { id: "59", name: "Project Management", category: "leadership", icon: "📅" },
  { id: "60", name: "Team Collaboration", category: "leadership", icon: "🤝" },
  { id: "61", name: "Individual Contributor", category: "leadership", icon: "🧑‍💻" },
  { id: "62", name: "Open Communication", category: "leadership", icon: "💬" },
  { id: "63", name: "Strategic Planning", category: "leadership", icon: "🧭" },
  { id: "64", name: "Conflict Resolution", category: "leadership", icon: "🕊️" },
  { id: "65", name: "Mentoring & Coaching", category: "leadership", icon: "🎓" },
  { id: "66", name: "Cross-functional Leadership", category: "leadership", icon: "🌐" },
  { id: "67", name: "Time Management", category: "leadership", icon: "⏰" },
  { id: "68", name: "Decision Making", category: "leadership", icon: "🧠" }
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