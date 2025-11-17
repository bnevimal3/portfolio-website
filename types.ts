import { LucideIcon } from 'lucide-react';

export interface Experience {
  role: string;
  company: string;
  period: string;
  projects: {
    name: string;
    details: string;
    technologies: string[];
  }[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
}