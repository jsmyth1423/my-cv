"use client";

import { Box, Heading, Text, Flex, Tag, useColorModeValue } from "@chakra-ui/react";
import React from 'react';
import Section from "./Section";
import { Skill } from "@/types/cv";

interface SkillsProps {
  skills: Skill[];
  bgGradient?: string;
  color?: string;
  position?: string;
  overflow?: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, bgGradient, color, position, overflow }) => {
  const categoryColorMap: { [key: string]: string } = {
    "Frontend": "blue",
    "Backend": "green",
    "CMS": "orange",
    "Cloud & Infrastructure": "purple",
    "Testing": "red",
    "Authentication": "teal",
    "Databases": "cyan",
    "Development Practices": "pink",
  };

  return (
    <Section
      id="skills"
      title="My Skills"
      bgGradient={bgGradient}
      color={color}
      position={position}
      overflow={overflow}
      chevron={{ textContent: "What have I done?", href: "#experience" }}
    >
      <Box
        position="absolute"
        inset="0"
        zIndex="0"
        bgImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
        animation="pulse 2s infinite"
      />
      <Box position="relative" zIndex="1">
        <Text fontSize="lg" textAlign="center" mb="8" color="whiteAlpha.800">
          A diverse toolkit for delivering robust and engaging applications.
        </Text>
        <Flex wrap="wrap" justify="center" gap="4">
          {skills.map((skill) => (
            <Tag
              key={skill.name}
              size={{ base: "md", md: "lg" }}
              borderRadius="full"
              variant="solid"
              colorScheme={categoryColorMap[skill.category] || "gray"}
              px={{ base: "3", md: "4" }}
              py={{ base: "1.5", md: "2" }}
              cursor="default"
              shadow="sm"
              _hover={{ shadow: "md", transform: "scale(1.02)" }}
              transition="all 0.2s ease-in-out"
            >
              <Text fontSize="md" fontWeight="medium">{skill.name}</Text>
            </Tag>
          ))}
        </Flex>
        <Box mt="12" textAlign="center">
          <Flex wrap="wrap" justify="center" gap="4">
            {Object.entries(categoryColorMap).map(([category, colorScheme]) => (
              <Flex key={category} align="center" gap="2">
                <Box w="4" h="4" borderRadius="full" bg={`${colorScheme}.500`} />
                <Text fontSize="sm" color="whiteAlpha.800">{category}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Section>
  );
};

export default Skills;