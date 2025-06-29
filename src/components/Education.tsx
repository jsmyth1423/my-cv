"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from 'react';
import Section from "./Section";
import { Education as EducationType } from "@/types/cv";

interface EducationProps {
  education: EducationType[];
  bgGradient?: string;
  color?: string;
  position?: string;
  overflow?: string;
}

const Education: React.FC<EducationProps> = ({ education, bgGradient, color, position, overflow }) => {
  return (
    <Section
      id="education"
      title="Education"
      bgGradient={bgGradient}
      color={color}
      position={position}
      overflow={overflow}
      chevron={{ textContent: "How do I contact you?", href: "#footer" }}

    >
      <Box
        position="absolute"
        inset="0"
        zIndex="0"
        bgImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
        animation="pulse 2s infinite"
      />
      <VStack spacing="8" align="stretch" position="relative" zIndex="1">
        {education.map((edu, index) => (
          <Box
            key={index}
            bg="whiteAlpha.100"
            p="6"
            borderRadius="lg"
            shadow="md"
            _hover={{ shadow: "lg" }}
            transition="shadow 0.3s ease"
            borderWidth="1px"
            borderColor="whiteAlpha.400"
            backdropFilter="blur(5px)"
          >
            <Heading as="h3" fontSize="2xl" fontWeight="bold" color="whiteAlpha.900" mb="1">
              {edu.institution}
            </Heading>
            <Text fontSize="lg" color="purple.300" mb="1">
              {edu.degree}
            </Text>
            <Text fontSize="md" color="whiteAlpha.700">
              {edu.dates}
            </Text>
            {edu.details && (
              <Text mt="2" color="whiteAlpha.700">
                {edu.details}
              </Text>
            )}
          </Box>
        ))}
      </VStack>
    </Section>
  );
};

export default Education;