// src/types/cv.ts

export interface Skill {
  name: string;
  category: string;
  description: string
  icon?: string;
}

export interface ExperienceDetail {
  id: string;
  title: string;
  description: string[];
  technologies: string[];
  dates: string
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  details: ExperienceDetail[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  details?: string;
}

export interface Project {
  name: string;
  role: string;
  dates: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface CVData {
  name: string;
  tagline: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  freelanceProjects: Project[];
  education: Education[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}