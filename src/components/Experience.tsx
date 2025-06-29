"use client";

import { Box, Heading, Text, VStack, Flex, Tag } from "@chakra-ui/react";
import React from 'react';
import Section from "./Section";
import { Experience as ExperienceType, ExperienceDetail } from "@/types/cv";

interface ExperienceProps {
  experience: ExperienceType[];
  bgGradient?: string;
  color?: string;
  position?: string;
  overflow?: string;
}

const Experience: React.FC<ExperienceProps> = ({ experience, bgGradient, color, position, overflow }) => {
  return (
    <Section
      id="experience"
      title="Experience"
      bgGradient={bgGradient}
      color={color}
      position={position}
      overflow={overflow}
      chevron={{ textContent: "Anything else?", href: "#freelance" }}
    >
      <Box
        position="absolute"
        inset="0"
        zIndex="0"
        bgImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
        animation="pulse 2s infinite"
      />
      <VStack spacing={{ base: "8", md: "12" }} align="stretch" position="relative" zIndex="1">
        {experience.map((exp, index) => (
          <Box
            key={index}
            bg="whiteAlpha.100"
            p={{ base: "6", md: "8" }}
            borderRadius="lg"
            shadow="xl"
            _hover={{ shadow: "2xl" }}
            transition="shadow 0.3s ease"
            borderWidth="1px"
            borderColor="whiteAlpha.400"
            backdropFilter="blur(5px)"
          >
            <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="whiteAlpha.900" mb="2">
              {exp.company}
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="purple.300" mb="2">
              {exp.role}
            </Text>
            <Text fontSize="md" color="whiteAlpha.700" mb="6">
              {exp.dates}
            </Text>

            <VStack spacing={{ base: "6", md: "8" }} align="stretch">
              {exp.details.map((detail: ExperienceDetail) => (
                <Box key={detail.id} borderLeft="4px solid" borderColor="purple.300" pl="4" py="1">
                  <Heading as="h4" fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold" color="whiteAlpha.900" mb="4" >
                    {detail.title}
                  </Heading>

                  <VStack as="ul" spacing="1" align="stretch" listStyleType="disc" pl="4" color="whiteAlpha.700">
                    {detail.description.map((point, i) => (
                      <Text as="li" key={i}>{point}</Text>
                    ))}
                  </VStack>
                  <Flex wrap="wrap" gap="2" mt="4">
                    {detail.technologies.map((tech, i) => (
                      <Tag
                        key={i}
                        size="md"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="purple"
                        px="3"
                        py="1"
                      >
                        <Text fontSize="xs" fontWeight="medium">{tech}</Text>
                      </Tag>
                    ))}
                  </Flex>
                </Box>
              ))}
            </VStack>
          </Box>
        ))
        }
      </VStack >
    </Section >
  );
};

export default Experience;