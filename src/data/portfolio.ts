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
      "Full-Stack Development, Natural Language Processing, Data Engineering"
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
      "Full-Stack Development, Data Science & Analysis, Computer Networks, Compiler Design, Operating Systems, Computer Architecture, Software Engineering"
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
    description: "A collection of automated AI-powered solutions built using the MindStudio Platform, designed to solve real-world problems and streamline everyday tasks.",
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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