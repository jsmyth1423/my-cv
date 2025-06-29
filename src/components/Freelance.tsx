"use client";

import { Box, Heading, Text, VStack, Flex, Tag, Link as ChakraLink } from "@chakra-ui/react";
import React from 'react';
import Section from "./Section";
import { Project } from "@/types/cv";
import NextLink from "next/link";

interface FreelanceProjectsProps {
  projects: Project[];
  bgGradient?: string;
  color?: string;
  position?: string;
  overflow?: string;
}

const FreelanceProjects: React.FC<FreelanceProjectsProps> = ({ projects, bgGradient, color, position, overflow }) => {
  return (
    <Section
      id="freelance"
      title="Community & Consulting"
      bgGradient={bgGradient}
      color={color}
      position={position}
      overflow={overflow}
      chevron={{ textContent: "You must have learnt this somewhere?", href: "#education" }}

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
        {projects.map((project, index) => (
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
            <Heading as="h3" fontSize="2xl" fontWeight="bold" color="whiteAlpha.900" mb="2">
              {project.name}
            </Heading>
            <Text fontSize="lg" color="purple.300" mb="1">
              {project.role}
            </Text>
            <Text fontSize="sm" color="whiteAlpha.700" mb="4">
              {project.dates}
            </Text>
            <VStack as="ul" spacing="1" align="stretch" listStyleType="disc" pl="4" color="whiteAlpha.700">
              {project.description.map((point, i) => (
                <Text as="li" key={i}>{point}</Text>
              ))}
            </VStack>
            <Flex wrap="wrap" gap="2" mt="4">
              {project.technologies.map((tech, i) => (
                <Tag
                  key={i}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                  px="3"
                  py="1"
                >
                  <Text fontSize="xs" fontWeight="medium">{tech}</Text>
                </Tag>
              ))}
            </Flex>
            {project.link && (
              <Box mt="4">
                <ChakraLink
                  as={NextLink}
                  href={project.link}
                  isExternal
                  color="blue.300"
                  _hover={{ textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Learn More &rarr;
                </ChakraLink>
              </Box>
            )}
          </Box>
        ))}
      </VStack>
    </Section>
  );
};

export default FreelanceProjects;