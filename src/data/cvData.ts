// src/data/cvData.ts
import { CVData } from "@/types/cv";

const cvData: CVData = {
  name: "Jordan Smyth",
  tagline: "Versatile & Impact-Driven Software Engineer",
  summary: `I'm a Software Engineer with 3+ years of experience building high-quality web and mobile applications across diverse industries, including media, charitable sectors, and finance. My passion lies in delivering impactful solutions that improve performance, accessibility, and user engagement through thoughtful architecture and UX-focused engineering. I'm comfortable working across full stack projects and collaborating in cross-functional Agile teams to drive real change.`,
  skills: [
    { name: "React", category: "Frontend", description: "A JavaScript library for building user interfaces, especially single-page applications." },
    { name: "React Native", category: "Frontend", description: "A framework for building native mobile apps using React." },
    { name: "TypeScript", category: "Frontend", description: "A superset of JavaScript that adds static types to the language, improving code quality and maintainability." },
    { name: "JavaScript", category: "Frontend", description: "The programming language that enables interactive web pages." },
    { name: "Tailwind CSS", category: "Frontend", description: "A utility-first CSS framework for rapidly building custom user interfaces." },
    { name: "Chakra UI", category: "Frontend", description: "A simple, modular and accessible component library for React applications." },
    { name: "Tamagui (Web & Native)", category: "Frontend", description: "A UI kit for React Native & Web, providing universal design systems and performant components." },
    { name: "Node.js", category: "Backend", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side development." },
    { name: "Python (Django, Flask)", category: "Backend", description: "A versatile programming language, often used for web development with frameworks like Django (full-stack) and Flask (microframework)." },
    { name: "Contentful", category: "CMS", description: "A headless CMS that allows you to manage content and deliver it to any digital channel via APIs." },
    { name: "Wagtail", category: "CMS", description: "A powerful, user-friendly CMS built on Django for creating and managing websites." },
    { name: "AWS (EC2, S3, Lambda)", category: "Cloud & Infrastructure", description: "Amazon Web Services: EC2 (virtual servers), S3 (object storage), Lambda (serverless compute) for cloud solutions." },
    { name: "Git", category: "Cloud & Infrastructure", description: "A distributed version control system for tracking changes in source code during software development." },
    { name: "CI/CD Pipelines", category: "Cloud & Infrastructure", description: "Continuous Integration/Continuous Delivery pipelines automate the stages of software delivery, from code commit to deployment." },
    { name: "Applitools (Eyes)", category: "Testing", description: "An AI-powered visual testing and monitoring tool for ensuring application UI quality across devices and browsers." },
    { name: "Jest/Vitest", category: "Testing", description: "JavaScript testing frameworks commonly used for unit and integration testing of React and Node.js applications." },
    { name: "Cypress", category: "Testing", description: "A front-end testing tool built for the modern web, focused on end-to-end testing." },
    { name: "Maestro", category: "Testing", description: "An open-source mobile UI testing framework for Android and iOS applications." },
    { name: "Keysight (formerly Eggplant)", category: "Testing", description: "A platform for intelligent test automation, including functional, performance, and visual testing across various technologies." },
    { name: "Firebase", category: "Authentication", description: "A Google-backed platform for developing mobile and web applications, including robust authentication services." },
    { name: "Auth0", category: "Authentication", description: "A flexible, drop-in solution to add authentication and authorization services to your applications." },
    { name: "PostgreSQL", category: "Databases", description: "A powerful, open-source relational database system known for its reliability and feature robustness." },
    { name: "MongoDB", category: "Databases", description: "A NoSQL, document-oriented database that stores data in flexible, JSON-like documents." },
    { name: "MySQL", category: "Databases", description: "A widely used open-source relational database management system." },
    { name: "DynamoDB", category: "Databases", description: "A fast and flexible NoSQL database service provided by AWS for all applications that need consistent, single-digit millisecond latency at any scale." },
    { name: "Agile Methodologies", category: "Development Practices", description: "Iterative and incremental approaches to software development that focus on collaboration, flexibility, and rapid delivery." },
    { name: "RESTful API Design", category: "Development Practices", description: "Designing web services using the Representational State Transfer (REST) architectural style for efficient data exchange." },
    { name: "Cross-functional teams", category: "Development Practices", description: "Teams composed of individuals with diverse skill sets working together to achieve a common goal." },
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
        "Scaled a small community into one of the largest on its platform, growing membership from just a few hundred to over 400 thousand users.",
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