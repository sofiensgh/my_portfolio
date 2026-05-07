export type NavSection = 'home' | 'projects' | 'about' | 'contact'

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  year: string
  title: string
  role: string
  description: string
  tech: string[]
  links?: { label: 'GitHub' | 'Live'; href: string }[]
}

export type Experience = {
  title: string
  org: string
  location?: string
  date: string
  bullets: string[]
}

export const brand = {
  domain: 'sofien.dev',
  name: 'Sofien Essghaier',
  location: 'Tunis, Tunisia',
  tagline: 'Building digital products that just work.',
  availability: 'AVAILABLE FOR INTERNSHIPS & FREELANCE — 2026',
  avatar: '/avatar.png',
}

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:sofiensghaier2@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/sofiensgh' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sofien-essghaier-61b5862a2',
  },
]

// GitHub configuration
export const githubConfig = {
  username: import.meta.env.VITE_GITHUB_USERNAME || 'sofiensgh',
  pinnedRepos: [] as string[], // Add repo names here to pin them at the top
}

export const projects: Project[] = [
  {
    year: '2026',
    title: 'AI Calling Assistant Dashboard',
    role: 'FULL-STACK DEVELOPER',
    description:
      'Realtime call monitoring + analytics dashboard with streaming events, role-based access, and a clean operator UI.',
    tech: ['Vapi AI', 'React', 'Tailwind', 'Node.js', 'MongoDB'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
  {
    year: '2025',
    title: 'MERN Job Board',
    role: 'FULL-STACK DEVELOPER',
    description:
      'End-to-end job platform with auth, saved searches, admin moderation, and a responsive UI built for speed.',
    tech: ['MERN', 'React Router', 'JWT', 'Tailwind', 'Vite'],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
  {
    year: '2024',
    title: 'Web Scraping Toolkit',
    role: 'WEB DATA & SCRAPING TRAINEE',
    description:
      'A scalable scraping pipeline with anti-bot strategies, scheduled runs, and structured exports for analytics.',
    tech: ['Puppeteer', 'Node.js', 'TypeScript', 'Playwright', 'Docker'],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
  {
    year: '2024',
    title: 'Portfolio Starter (this site)',
    role: 'FRONT-END DEVELOPER',
    description:
      'A modern, animated single-page portfolio with smooth-scrolling sections and a dark glass UI.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
]

export const education = {
  degree: 'Bachelor of Software Engineering (GLSI)',
  school: 'TekUp University',
  detail: 'Tunis, Tunisia · 2023 — 2026',
  logo: '/tekup.png',
  coursework: [
    'Data Structures & Algorithms',
    'Databases (SQL/NoSQL)',
    'Web Development (MERN)',
    'Software Architecture & Design Patterns',
    'Operating Systems & Networks',
  ],
}

export const experiences: Experience[] = [
  {
    title: 'Web Data & Scraping Trainee',
    org: 'Internship',
    location: 'Tunis',
    date: '2025 — 2026',
    bullets: [
      'Built robust scraping flows with retries, rate-limiting, and clean output schemas.',
      'Automated runs and data exports for dashboards and reporting.',
    ],
  },
  {
    title: 'Full-Stack Trainee',
    org: 'Internship',
    location: 'Tunis',
    date: '2024 — 2025',
    bullets: [
      'Delivered MERN features end-to-end: APIs, UI, auth, and database models.',
      'Improved performance with caching and query optimizations.',
    ],
  },
  {
    title: 'Junior Front-End Trainee',
    org: 'Internship',
    location: 'Remote',
    date: '2024',
    bullets: [
      'Implemented responsive UI components and design systems in React.',
      'Introduced accessible patterns, keyboard navigation, and consistent semantics.',
    ],
  },
]

export const aboutBadges = [
  'Tunis, Tunisia',
  'Software Engineering @ TekUp',
  'Building MERN-stack projects',
  'Arabic · English · French',
]

