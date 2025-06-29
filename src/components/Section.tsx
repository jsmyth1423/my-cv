"use client";

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import ChevronDown from "./ChevronDown";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bg?: string;
  color?: string;
  bgGradient?: string;
  position?: string;
  overflow?: string;
  minHeight?: string
  chevron?: {
    textContent: string;
    href: string;
  }
}

const Section: React.FC<SectionProps> = ({ id, title, children, bg, color, bgGradient, overflow, minHeight = "100vh", chevron }) => {
  return (
    <Box
      as={motion.section}
      id={id}
      py={{ base: "16", md: "24" }}
      bg={bg}
      color={color || "gray.800"}
      bgGradient={bgGradient}
      overflow={overflow}
      minHeight={minHeight}
      position="relative"
      display="flex"
      flexDirection="column"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      alignItems="center"
    >
      <Box maxWidth="4xl" mx="auto" px={{ base: "4", md: "8" }} flex="1">
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          textAlign="center"
          mb="12"
          position="relative"
          color={color}
        >
          {title}
        </Heading>
        {children}
      </Box>
      {chevron && (
        <ChevronDown textContent={chevron.textContent} href={chevron.href} />
      )}
    </Box>
  );
};

export default Section;