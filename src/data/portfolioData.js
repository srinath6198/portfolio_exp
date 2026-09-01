
import srinathImage from "../assets/srinath.png";
import srinathVideo from "../assets/srinathvideo.mp4";
import portraitImage from "../assets/portraitImage.jpg";
import srinathcricketImage from "../assets/srinathcrick.jpeg";  
export const personalData = {
  name: "Srinath M",
  brandName: "SRINATH",
  role: "Senior Frontend & UI Engineer",
  headline: "Digital engineering for high-performing product teams",
  subheadline: "Crafting scalable web architectures, design systems, and fluid interactive interfaces for the next generation of builders.",
  availability: "Available for high-impact contracts & select full-time roles",
  location: "India • Remote Worldwide",

  // Contact & Socials
  email: "msrinath6109@gmail.com",
  github: "https://github.com/srinath6198",
  linkedin: "https://www.linkedin.com/in/srinath-m-39a64817a/",
  twitter: "https://twitter.com/srinath_dev",

  // Unsplash Editorial Images (Curated high-res imagery)
  images: {
    heroTeam: srinathImage,
    engineerPortrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // Focused portrait
    engineerAtWork: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", // Developer with laptop
    architecturalCta: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop", // Monochrome modern architectural landmark
    workspace: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
  }
};

// Hero Key Metrics Bar
export const heroStats = [
  { value: "1.8+", label: "Years Experience", sub: "Professional development" },
  { value: "5+", label: "Projects Completed", sub: "Business & web applications" },
  { value: "10+", label: "Technologies", sub: "Frontend, backend & database" },
  { value: "3", label: "Platforms", sub: "Web, Desktop & Android" }
];

// Philosophy / Value Propositions ("Designed for the next generation of builders...")
export const philosophyPillars = [
  {
    id: "01",
    title: "Engineering with Clean Architecture",
    description:
      "Designing scalable full-stack applications with reusable React components, structured backend services, and maintainable code across JavaScript, TypeScript, Node.js, and Python.",
    badge: "Architecture"
  },
  {
    id: "02",
    title: "Modern Frontend Experiences",
    description:
      "Crafting responsive and intuitive interfaces using React.js, TypeScript, SCSS, Redux, and modern UI libraries with a strong focus on usability and performance.",
    badge: "Frontend"
  },
  {
    id: "03",
    title: "APIs, Authentication & Integration",
    description:
      "Building and integrating REST APIs with Node.js, Express.js, and Python while implementing authentication, session management, CRUD workflows, and reliable data flow.",
    badge: "Backend"
  },
  {
    id: "04",
    title: "Real-World Business Solutions",
    description:
      "Developing practical applications such as billing and business management systems across Web, Desktop, and Android using React.js, Electron.js, Capacitor, MySQL, and MongoDB.",
    badge: "Solutions"
  }
];

export const competenciesData = {
  kicker: "Technical Expertise",
  title: "Building modern full-stack applications with clean and scalable solutions",
  subtitle:
    "I develop responsive web applications and business solutions using React.js, Node.js, Python, TypeScript, MongoDB, and MySQL, with a strong focus on reusable components, reliable APIs, and maintainable code.",
  portraitImage: portraitImage,
  points: [
    {
      title: "React.js & Modern Frontend",
      detail:
        "Building responsive and reusable interfaces with React.js, JavaScript, TypeScript, SCSS, Redux, Vite, and modern UI component libraries."
    },
    {
      title: "Node.js, Express.js & Python",
      detail:
        "Developing backend services and REST APIs with Node.js, Express.js, and Python, including business logic, authentication, validation, and API integration."
    },
    {
      title: "MongoDB & MySQL Development",
      detail:
        "Working with SQL and NoSQL databases to implement CRUD operations, queries, joins, filtering, relationships, and efficient data retrieval."
    },
    {
      title: "Cross-Platform Application Development",
      detail:
        "Developing business applications across Web, Desktop, and Android using React.js, Electron.js, and Capacitor with a focus on performance and usability."
    }
  ]
};

export const engagementTiers = [
  {
    id: "tier-1",
    tag: "Core Development",
    title: "Full-Stack Web Application Development",
    highlight: "React & Node.js",
    description:
      "Building responsive and scalable web applications from frontend UI to backend APIs, database integration, authentication, and business logic.",
    features: [
      "Modern React.js & TypeScript development",
      "Reusable and responsive UI components",
      "REST API development & integration",
      "Node.js & Express.js backend development",
      "MongoDB & MySQL database integration"
    ],
    ctaText: "View My Work"
  },
  {
    id: "tier-2",
    tag: "Application Solutions",
    title: "Business & Cross-Platform Applications",
    highlight: "Web • Desktop • Android",
    description:
      "Developing practical business applications such as billing and management systems across multiple platforms using modern JavaScript technologies.",
    features: [
      "Billing & business management applications",
      "Customer, product & sales modules",
      "Invoice & payment workflows",
      "Electron.js desktop applications",
      "Capacitor Android applications"
    ],
    ctaText: "Explore Projects"
  },
  {
    id: "tier-3",
    tag: "Backend Development",
    title: "API & Database Development",
    highlight: "Node.js • Python • SQL",
    description:
      "Creating reliable backend services and database-driven solutions that connect business logic with modern frontend applications.",
    features: [
      "Node.js & Express.js REST APIs",
      "Python backend development",
      "MySQL queries, joins & filtering",
      "MongoDB & Mongoose integration",
      "CRUD operations & API debugging"
    ],
    ctaText: "Discuss a Project"
  }
];
// Project Showcase ("Meet the products you'll work with")
export const featuredProjects = [
  {
    id: "proj-1",
    title: "Pozo App",
    category: "Retail & POS Application",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    description:
      "A retail application built for managing products, customers, sales, billing, orders, onboarding, and day-to-day store operations.",
    stats: "Retail operations & billing platform",
    tags: ["React JS", "Redux", "Ant Design", "REST API", "SCSS"],
    liveUrl: "https://github.com/srinath6198",
    client: "Pozo",
    role: "React Developer"
  },

  {
    id: "proj-2",
    title: "Pozo Buyer",
    category: "E-Commerce / Buyer Application",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
    description:
      "A buyer-focused application for browsing products, managing customer interactions, and supporting the purchasing workflow.",
    stats: "Buyer-focused shopping experience",
    tags: ["React JS", "Redux", "REST API", "Ant Design", "JavaScript"],
    liveUrl: "https://github.com/srinath6198",
    client: "Pozo",
    role: "React Developer"
  },

  {
    id: "proj-3",
    title: "Pozo Capacitor App",
    category: "Mobile Retail Application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    description:
      "A mobile version of the Pozo retail application developed using React and Capacitor, with native mobile integrations including barcode and QR code scanning.",
    stats: "Cross-platform mobile retail app",
    tags: [
      "React JS",
      "Capacitor",
      "Android",
      "ML Kit",
      "QR Scanner",
      "REST API"
    ],
    liveUrl: "https://github.com/srinath6198",
    client: "Pozo",
    role: "React Developer"
  },

  {
    id: "proj-4",
    title: "Pozo Common App",
    category: "Retail Common Platform",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    description:
      "A reusable retail application foundation containing common UI components, authentication, APIs, multilingual support, customer management, billing, and shared business functionality.",
    stats: "Reusable retail application platform",
    tags: [
      "React JS",
      "Vite",
      "Redux",
      "Ant Design",
      "i18next",
      "REST API"
    ],
    liveUrl: "https://github.com/srinath6198",
    client: "Pozo",
    role: "React Developer"
  }
];
// Tech Stack Ecosystem Grid
export const techStackEcosystem = [
  {
    name: "React.js",
    category: "Core Framework",
    level: "Advanced",
    iconName: "FaReact"
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    level: "Advanced",
    iconName: "SiJavascript"
  },
  {
    name: "Redux",
    category: "State Management",
    level: "Advanced",
    iconName: "SiRedux"
  },
  {
    name: "Vite",
    category: "Build Tool",
    level: "Advanced",
    iconName: "SiVite"
  },
  {
    name: "Ant Design",
    category: "UI Framework",
    level: "Advanced",
    iconName: "SiAntdesign"
  },
  {
    name: "SCSS",
    category: "Styling",
    level: "Advanced",
    iconName: "FaSass"
  },
  {
    name: "Capacitor",
    category: "Mobile Development",
    level: "Intermediate",
    iconName: "SiCapacitor"
  },
  {
    name: "REST API",
    category: "API Integration",
    level: "Advanced",
    iconName: "SiFastapi"
  },
  {
    name: "React Hook Form",
    category: "Form Management",
    level: "Advanced",
    iconName: "SiReacthookform"
  },
  {
    name: "i18next",
    category: "Internationalization",
    level: "Intermediate",
    iconName: "SiI18next"
  },
  {
    name: "Git",
    category: "Version Control",
    level: "Advanced",
    iconName: "FaGitAlt"
  }
];

export const caseStudiesSpotlight = [
  {
    id: "cs-1",
    title: "Building a scalable retail experience with React",
    tagline: "Pozo App — Retail, billing, customer and product management",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    metricValue: "Multiple",
    metricLabel: "Retail workflows integrated into a single application",
    description:
      "Worked on the Pozo retail application using React.js, Redux, Ant Design and REST APIs. Implemented product and customer management, sales and billing workflows, authentication, OTP verification, API integrations, table functionality and reusable UI components."
  },

  {
    id: "cs-2",
    title: "Taking the Pozo retail experience to mobile",
    tagline: "Pozo Capacitor App — Cross-platform mobile retail application",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    metricValue: "Android",
    metricLabel: "React application integrated with native mobile capabilities",
    description:
      "Worked on converting the Pozo retail experience into a mobile application using React and Capacitor. Integrated native functionality including barcode and QR code scanning, handled Android-specific requirements, and maintained API-driven retail workflows across the mobile application."
  },

  {
    id: "cs-3",
    title: "Reusable components for a consistent retail platform",
    tagline: "Pozo Common App — Shared UI and application architecture",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000&auto=format&fit=crop",
    metricValue: "Reusable",
    metricLabel: "Shared components and common application functionality",
    description:
      "Developed and maintained reusable React components and common functionality for the Pozo retail platform. Worked with Vite, Redux, Ant Design, SCSS, React Hook Form, REST APIs and internationalization to provide a consistent development and user experience."
  }
];

// Testimonials (Quotes & Leadership reviews)
export const testimonialsData = [
  {
    id: 1,
    quote:
      "Srinath has been a reliable React developer who consistently takes ownership of his tasks. He worked on different Pozo application modules and handled UI development, API integration, and bug fixes effectively.",
    author: "Team Lead",
    role: "Pozo Project",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    quote:
      "Srinath worked well with the team and was actively involved in developing reusable React components, integrating APIs, and improving the overall application experience. He was always willing to learn and take on new challenges.",
    author: "Project Manager",
    role: "Pozo Project",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    quote:
      "Srinath contributed to both web and mobile development using React and Capacitor. His work on API integration, authentication, QR and barcode scanning, and responsive UI helped improve the Pozo application.",
    author: "Senior Developer",
    role: "Pozo Project",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5
  }
];

// FAQ & Disclosures Accordion
// FAQ & Disclosures Accordion

export const faqDisclosures = [
  {
    question: "What is your primary tech stack and engineering focus?",
    answer:
      "My primary focus is React.js development. I have experience working with JavaScript, Redux, Vite, Ant Design, SCSS, REST APIs, React Hook Form, and Capacitor. I focus on building responsive user interfaces, integrating APIs, developing reusable components, and implementing business features."
  },

  {
    question: "What type of projects have you worked on?",
    answer:
      "I have worked on Pozo retail applications, including the Pozo App, Pozo Buyer, Pozo Common App, and Pozo Capacitor mobile application. My work includes product and customer management, sales and billing workflows, authentication, OTP verification, API integration, reusable UI components, and mobile functionality."
  },

  {
    question: "What is your experience with mobile application development?",
    answer:
      "I have worked with React and Capacitor to develop mobile applications for the Pozo project. I have worked on Android-related functionality and integrated features such as barcode and QR code scanning while connecting the application with REST APIs."
  },

  {
    question: "How do you approach API integration?",
    answer:
      "I integrate REST APIs with React applications using Redux-based API services and handle loading states, successful responses, validation, and API errors. I have worked with APIs for authentication, OTP verification, products, customers, brands, product types, billing, and other retail application features."
  },

  {
    question: "Do you work with reusable React components?",
    answer:
      "Yes. I have worked on reusable React components for common application functionality, including inputs, dropdowns, date pickers, buttons, tables, forms, and other shared UI components. I focus on keeping components reusable and maintaining consistency across the application."
  },

  {
    question: "What is your experience with state management?",
    answer:
      "I have experience using Redux for state management in React applications. I have used Redux actions and API thunks to manage application data, authentication flows, API responses, and other shared application states."
  },

  {
    question: "Do you have experience with form handling and validation?",
    answer:
      "Yes. I have worked with React Hook Form for creating and managing forms, handling form values, validation, submission, and error states. I have used it in different application modules such as master forms and authentication-related workflows."
  },

  {
    question: "What are you currently looking for?",
    answer:
      "I am looking for opportunities as a React Developer or Software Developer where I can use my React.js experience, contribute to real-world applications, improve my technical skills, and continue growing as a frontend developer."
  }
];

// Footer Navigation & Social Links
export const footerLinks = {
  navigation: [
    { label: "Overview", href: "#hero" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Capabilities", href: "#competencies" },
    { label: "Engagement", href: "#engagement" },
    { label: "Work", href: "#projects" },
    { label: "FAQ", href: "#faq" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/srinath6198" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/srinath-m-39a64817a/" },
    { label: "Twitter / X", href: "https://twitter.com/srinath_dev" },
    { label: "Email", href: "mailto:msrinath6109@gmail.com" }
  ],
  disclaimer:
    "Designed and developed with a focus on clean UI, performance, responsiveness, and maintainable React code. All rights reserved."
};

// Education History
export const educationData = [
  {
    id: "edu-1",
    degree: "B.E. Computer Science and Engineering",
    institution: "Adhiyamaan College of Engineering, Hosur",
    period: "Aug 2020 – May 2023"
  },
  {
    id: "edu-2",
    degree: "Diploma in Computer Science",
    institution: "Er. Perumal Manimekalai Polytechnic College, Hosur",
    period: "Aug 2017 – May 2019"
  }
];

// Work Experience Timeline

export const experienceData = [
  {
    id: "exp-1",
    badge: "Professional Experience",
    role: "React Developer",
    company: "Pozomind Technologies Pvt. Ltd.",
    location: "Hosur",
    period: "2024 – Aug 2026",
    description:
      "Worked on Pozo retail applications using React.js, Redux, Vite, Ant Design, SCSS, REST APIs, and Capacitor. Developed responsive user interfaces, integrated APIs, and implemented features for web and mobile applications.",

    achievements: [
      "Developed responsive and reusable React.js components for Pozo retail applications",

      "Worked on Pozo App, Pozo Buyer, Pozo Common App, and Pozo Capacitor mobile application",

      "Integrated REST APIs for product, customer, brand, product type, sales, billing, authentication, and other retail application features",

      "Implemented login, OTP verification, authentication, session management, protected application flows, and refresh-token functionality",

      "Used Redux for application state management and API integration using Redux-based services and thunks",

      "Worked with React Hook Form to develop forms, validation, submission handling, and error management",

      "Implemented mobile functionality using Capacitor and worked with barcode and QR code scanning for the Android application",

      "Developed CRUD functionality, table filtering, sorting, pagination, status management, and API-driven business workflows",

      "Worked with reusable common components including inputs, dropdowns, date pickers, buttons, tables, and form components",

      "Worked with Git, GitHub, and OpenProject for version control, task management, sprint tracking, and Agile development"
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Redux",
      "Vite",
      "Ant Design",
      "SCSS",
      "React Hook Form",
      "REST APIs",
      "Capacitor",
      "Git",
      "GitHub"
    ]
  },

  {
    id: "exp-2",
    badge: "Internship",
    role: "MERN Full Stack Development Intern",
    company: "Innovaskill Technologies Private Limited",
    location: "Bangalore",
    period: "Apr 2023 – Jul 2023",
    description:
      "Worked on web application development using MERN stack (React.js, Express.js, MongoDB, Node.js), built responsive interfaces, integrated APIs, and performed CRUD operations with databases.",

    achievements: [
      "Developed responsive and reusable React.js components and integrated REST APIs for client applications",

      "Developed backend APIs using Node.js and Express.js and integrated them with frontend components",

      "Implemented MongoDB schema design and performed CRUD operations for data management",

      "Integrated frontend components with backend services and handled API responses",

      "Identified and resolved application bugs during development and testing",

      "Worked with Git and GitHub for source code management and team collaboration"
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "GitHub"
    ]
  }
];

// Skills Data for Skills Section
export const skillsData = {
  frontend: [
    {
      name: 'React.js',
      level: 'Advanced',
      desc: 'Building reusable, responsive and scalable user interfaces.',
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      desc: 'Modern ES6+ development, asynchronous programming and problem solving.',
      color: '#F7DF1E'
    },
    {
      name: 'TypeScript',
      level: 'Advanced',
      desc: 'Type-safe and maintainable application development.',
      color: '#3178C6'
    },
    {
      name: 'HTML5',
      level: 'Advanced',
      desc: 'Semantic and accessible web structure.',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      level: 'Advanced',
      desc: 'Responsive layouts, animations and modern styling.',
      color: '#1572B6'
    },
    {
      name: 'SCSS',
      level: 'Advanced',
      desc: 'Modular and maintainable styling architecture.',
      color: '#CC6699'
    },
    {
      name: 'Redux',
      level: 'Advanced',
      desc: 'Application state management and predictable data flow.',
      color: '#764ABC'
    }
  ],

  backend: [
    {
      name: 'Node.js',
      level: 'Advanced',
      desc: 'Building scalable backend services and server-side applications.',
      color: '#339933'
    },
    {
      name: 'Express.js',
      level: 'Advanced',
      desc: 'Developing REST APIs, middleware and backend application logic.',
      color: '#FFFFFF'
    },
    {
      name: 'Python',
      level: 'Intermediate',
      desc: 'Backend development, scripting and application logic.',
      color: '#3776AB'
    },
    {
      name: 'REST API',
      level: 'Advanced',
      desc: 'Designing and integrating RESTful APIs between frontend and backend.',
      color: '#6366F1'
    },
    {
      name: 'MongoDB',
      level: 'Advanced',
      desc: 'NoSQL database development with document-based data models.',
      color: '#47A248'
    },
    {
      name: 'Mongoose',
      level: 'Advanced',
      desc: 'MongoDB object modeling and schema-based application development.',
      color: '#880000'
    },
    {
      name: 'MySQL',
      level: 'Advanced',
      desc: 'SQL queries, CRUD operations, joins, filtering and data retrieval.',
      color: '#4479A1'
    },
    {
      name: 'SQL',
      level: 'Advanced',
      desc: 'Database queries, joins, relationships and data management.',
      color: '#336791'
    }
  ],

  uiEngineering: [
    {
      name: 'Ant Design',
      level: 'Advanced',
      desc: 'Building enterprise-ready interfaces with reusable UI components.',
      color: '#1677FF'
    },
    {
      name: 'Material UI',
      level: 'Intermediate',
      desc: 'Creating responsive interfaces using Material Design components.',
      color: '#007FFF'
    },
    {
      name: 'Vite',
      level: 'Advanced',
      desc: 'Fast and modern frontend development and build tooling.',
      color: '#646CFF'
    }
  ],

  tools: [
    {
      name: 'Git',
      level: 'Advanced',
      desc: 'Version control and collaborative software development.',
      color: '#F05032'
    },
    {
      name: 'GitHub',
      level: 'Advanced',
      desc: 'Source control, collaboration and project management.',
      color: '#FFFFFF'
    },
    {
      name: 'Postman',
      level: 'Advanced',
      desc: 'API development, testing and debugging.',
      color: '#FF6C37'
    },
    {
      name: 'Electron.js',
      level: 'Intermediate',
      desc: 'Building cross-platform desktop applications.',
      color: '#47848F'
    },
    {
      name: 'Capacitor',
      level: 'Intermediate',
      desc: 'Building mobile applications from modern web technologies.',
      color: '#119EFF'
    }
  ]
};

// Marquee Tech List

export const marqueeTechList = [
  "React.js",
  "JavaScript",
  "Redux",
  "Vite",
  "Ant Design",
  "SCSS",
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "REST APIs",
  "SQL",
  "Capacitor",
  "Git",
  "GitHub"
];

// Profile Summary

export const profileData = {
  summary:
    "React Developer with 1.8 years of experience building responsive web and mobile applications using React.js, JavaScript, Redux, Vite, Ant Design, SCSS, Node.js, Express.js, and Capacitor. Experienced in REST API integration, CRUD operations, authentication, OTP verification, reusable component development, and application debugging. Worked on Pozo retail applications, including product, customer, sales, billing, and mobile application features. Currently expanding backend development skills with Python and FastAPI."
};

// Cricket / Beyond Code Data
export const cricketData = {
  name: "Srinath M",
  role: "Right-Hand Batter | Right-Arm Off Break",
  profileType: "Classicist / Aspirant",
  cricheroesUrl: "https://cricheroes.com/player-profile/10713808/srinath-m/matches",
  image: srinathcricketImage,
  video: srinathVideo,
  highlights: [
    "Right-hand batter with classical technique",
    "Right-arm off-break bowler",
    "Active CricHeroes profile with recorded matches",
    "Passionate cricketer and team player"
  ],
  achievements: [
    "Competitive club-level cricketer",
    "Consistent batting performer",
    "Active participation in local tournaments"
  ]
};