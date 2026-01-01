
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "IT Student",
  university: "RMIT University Vietnam",
  major: "Bachelor of Information Technology",
  graduation: "2026",
  email: "s1234567@rmit.edu.vn",
  location: "Ho Chi Minh City, Vietnam",
  bio: "Passionate IT student at RMIT Vietnam focused on building scalable web applications and exploring AI integration. Driven by problem-solving and clean code architectures.",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'RMIT Campus Navigator',
    description: 'A React-based interactive map for RMIT South Saigon campus helping new students find classrooms and facilities.',
    longDescription: 'Navigating a new university campus can be overwhelming. The RMIT Campus Navigator was built as a solution for the annual "Orientation Week" to help freshmen find their way through buildings A, B, and the library area with ease. It features real-time search, accessibility-friendly routing, and points of interest like study rooms and food stalls.',
    features: [
      'Interactive vector-based map rendering',
      'Real-time classroom search algorithm',
      'Integration with RMIT building data',
      'Mobile-first responsive design for on-the-go students'
    ],
    role: 'Lead Frontend Developer',
    year: '2023',
    tech: ['React', 'Tailwind CSS', 'Mapbox API'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'Eco-Tracker System',
    description: 'A full-stack application designed for the RMIT Sustainability challenge to track personal carbon footprints.',
    longDescription: 'Winner of the RMIT Sustainability Innovation Award 2023. Eco-Tracker is a comprehensive dashboard that allows users to log daily activities—like commuting, diet, and electricity usage—to calculate their carbon footprint. It provides actionable insights and local recycling spots near HCMC to encourage greener living.',
    features: [
      'Complex calculation engine for carbon metrics',
      'Data visualization with Chart.js',
      'Secure user authentication with JWT',
      'Community leaderboard and gamification elements'
    ],
    role: 'Full Stack Developer',
    year: '2023',
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'AI Study Assistant',
    description: 'Utilizing Gemini API to help students summarize RMIT course materials and generate practice quizzes.',
    longDescription: 'Leveraging modern LLM capabilities, this tool was designed to help fellow IT students tackle heavy academic readings. By uploading lecture slides or notes, the assistant generates key summaries, flashcards, and even suggests relevant coding exercises from the RMIT syllabus.',
    features: [
      'Seamless integration with Gemini 1.5 Flash',
      'Document parsing (PDF/Text)',
      'Automated quiz generation',
      'History tracking for persistent study sessions'
    ],
    role: 'AI Engineer / UI Designer',
    year: '2024',
    tech: ['Next.js', 'Gemini AI', 'TypeScript', 'Prisma'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: 'fab fa-js-square', color: '#3178C6' },
  { name: 'React', level: 85, category: 'Frontend', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', icon: 'fab fa-css3-alt', color: '#38BDF8' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'Backend', icon: 'fab fa-node-js', color: '#339933' },
  { name: 'Java', level: 75, category: 'Backend', icon: 'fab fa-java', color: '#007396' },
  { name: 'Python', level: 70, category: 'Backend', icon: 'fab fa-python', color: '#3776AB' },

  // Database
  { name: 'PostgreSQL', level: 70, category: 'Database', icon: 'fas fa-database', color: '#336791' },
  { name: 'MongoDB', level: 75, category: 'Database', icon: 'fas fa-leaf', color: '#47A248' },

  // Tools
  { name: 'Git/GitHub', level: 85, category: 'Tools', icon: 'fab fa-github', color: '#ffffff' },
  { name: 'Docker', level: 60, category: 'Tools', icon: 'fab fa-docker', color: '#2496ED' },

  // Soft Skills
  { name: 'Agile/Scrum', level: 85, category: 'Soft Skills', icon: 'fas fa-sync-alt', color: '#FFD700' },
  { name: 'UI/UX Design', level: 75, category: 'Soft Skills', icon: 'fas fa-paint-brush', color: '#F24E1E' },
];
