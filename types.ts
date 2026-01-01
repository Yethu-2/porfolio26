
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tech: string[];
  link: string;
  github?: string;
  image: string;
  role?: string;
  year?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Soft Skills';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
