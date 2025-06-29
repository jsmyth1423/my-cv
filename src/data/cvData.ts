// src/data/cvData.ts
import { CVData } from "@/types/cv";

const cvData: CVData = {
  name: "Jordan Smyth",
  tagline: "Versatile & Impact-Driven Software Engineer",
  summary: `I'm a Software Engineer with 3+ years of experience building high-quality web and mobile applications across diverse industries, including media, charitable sectors, and finance. My passion lies in delivering impactful solutions that improve performance, accessibility, and user engagement through thoughtful architecture and UX-focused engineering. I'm comfortable working across full stack projects and collaborating in cross-functional Agile teams to drive real change.`,
  skills: [
    { name: "React", category: "Frontend" },
    { name: "React Native", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Chakra UI", category: "Frontend" },
    { name: "Tamagui (Web & Native)", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python (Django, Flask)", category: "Backend" },
    { name: "Contentful", category: "CMS" },
    { name: "Wagtail", category: "CMS" },
    { name: "AWS (EC2, S3, Lambda)", category: "Cloud & Infrastructure" },
    { name: "Git", category: "Cloud & Infrastructure" },
    { name: "CI/CD Pipelines", category: "Cloud & Infrastructure" },
    { name: "Applitools (Eyes)", category: "Testing" },
    { name: "Jest/Vitest", category: "Testing" },
    { name: "Cypress", category: "Testing" },
    { name: "Maestro", category: "Testing" },
    { name: "Keysight (formerly Eggplant)", category: "Testing" },
    { name: "Firebase", category: "Authentication" },
    { name: "Auth0", category: "Authentication" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "DynamoDB", category: "Databases" },
    { name: "Agile Methodologies", category: "Development Practices" },
    { name: "RESTful API Design", category: "Development Practices" },
    { name: "Cross-functional teams", category: "Development Practices" },
  ],
  experience: [
    {
      company: "AND Digital",
      role: "Product Developer",
      dates: "September 2022 - August 2025",
      details: [
        {
          id: "observer",
          title: "The Observer",
          dates: "February 2025 - Present",
          description: [
            "Architected the foundation for The Observer’s new digital platform spanning web and native apps (React Native + Next.js), using Tamagui to unify component development across all platforms.",
            "Built a WCAG 2.2 compliant UI library and core navigation infrastructure to support scalable content delivery.",
            "Integrated Wagtail CMS into the frontend stack, enabling automated population of editorial content into responsive article layouts for web and mobile.",
            "Delivered a modular, future-proof foundation aligning with the client’s strategic shift toward digital and mobile first publishing.",
          ],
          technologies: ["React Native", "Next.js", "Tamagui", "Wagtail", "TypeScript", "Firebase"],
        },
        {
          id: "cruk",
          title: "Cancer Research UK",
          dates: "August 2023 - January 2025",
          description: [
            "Drove the development effort of a CMS migration from Drupal to Contentful across CRUK’s flagship site and sub-brands (StandUpToCancer, Race4Life, Race4Life Events).",
            "Rebuilt the main donation platform and content experience using Next.js/React, resulting in improved accessibility and higher conversion rates.",
            "Developed a robust component library (Chakra UI + Storybook), adopted organisation wide for faster, more consistent delivery.",
            "Integrated AWS APIs and CRON based event data ingestion to support dynamic event listings.",
            "Delivered a secure, scalable form solution replacing over 100 legacy Drupal forms, incorporating custom components and Zod based validation.",
            "Spearheaded development on a scripted migration tool which would scrape the existing site and extract the relevant data and page structure to facilitate both transfer and stakeholder review.",
            "Contributed technical input to a formal RFP response, outlining implementation strategy, architectural approach, and feasibility to support CRUK’s future digital roadmap and secure additional project work.",
          ],
          technologies: ["Next.js", "React", "Contentful", "Chakra UI", "Storybook", "AWS", "Zod", "TypeScript"],
        },
        {
          id: "mortgagehub",
          title: "Mortgage Hub",
          dates: "October 2022 - March 2023",
          description: [
            "Designed and implemented a complex commercial lending user interface with React and MUI.",
            "Coordinated closely with client side backend teams to deliver platform wide structural changes.",
            "Refactored legacy code to improve stability, scalability, and developer velocity.",
            "Added unit and end-to-end testing amounting to 85% coverage in the project and full coverage of the buy-to-let journey",
          ],
          technologies: ["React", "MUI", "Node.js", "TypeScript", "GraphQL"],
        },
      ],
    },
  ],
  freelanceProjects: [
    {
      name: "Karuta Bot - Discord",
      role: "Community Manager - Freelance",
      dates: "Jan 2021 - Present",
      description: [
        "Scaled a small community into one of the largest on its platform, growing membership to over 400k users.",
        "Managed day-to-day operations and set standards for a large support team, ensuring consistent, professional user interactions.",
        "Actively engaged with the player base to identify user needs, gather feedback, and relay actionable insights to product and development teams.",
        "Delivered on-demand consultancy services to game developers, including UX feedback, feature suggestions, and live operational support.",
      ],
      technologies: ["Community Management", "User Experience (UX)", "Consultancy"]
    }
  ],
  education: [
    {
      institution: "General Assembly",
      degree: "Software Engineering Immersive",
      dates: "February 2022 - April 2022",
    },
    {
      institution: "University of Edinburgh",
      degree: "English Literature (MA)",
      dates: "2017-2021",
      details: "Attained Upper Second-Class Honours",
    },
  ],
  contact: {
    email: "jsmyth1423@gmail.com",
    linkedin: "https://www.linkedin.com/in/jordan-a-smyth/",
    github: "https://github.com/jsmyth1423",
  },
};

export default cvData;