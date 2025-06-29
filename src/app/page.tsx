"use client";

import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FreelanceProjects from "@/components/Freelance";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import cvData from "@/data/cvData";

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50" color="gray.800">
      <Header name={cvData.name} tagline={cvData.tagline} />
      <About
        summary={cvData.summary}
        bgGradient="linear(to-br, rose.900, orange.900)"
        color="white"
        position="relative"
        overflow="hidden"
      />
      <Skills
        skills={cvData.skills}
        bgGradient="linear(to-br, orange.900, green.900)"
        color="white"
        position="relative"
        overflow="hidden"
      />
      <Experience
        experience={cvData.experience}
        bgGradient="linear(to-br, green.900, blue.900)"
        color="white"
        position="relative"
        overflow="hidden"
      />
      <FreelanceProjects
        projects={cvData.freelanceProjects}
        bgGradient="linear(to-br, blue.900, purple.900)"
        color="white"
        position="relative"
        overflow="hidden"
      />
      <Education
        education={cvData.education}
        bgGradient="linear(to-br, purple.900, gray.900)"
        color="white"
        position="relative"
        overflow="hidden"
      />
      <Footer contact={cvData.contact} />
    </Box>
  );
}