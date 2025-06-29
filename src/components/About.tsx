"use client";

import { Box, Heading, Text, VStack, Flex, Image } from "@chakra-ui/react";
import React from 'react';
import Section from "./Section";
import NextLink from "next/link";
import ChevronDown from "./ChevronDown";


interface AboutProps {
  summary: string;
  bgGradient?: string;
  color?: string;
  position?: string;
  overflow?: string;
}

const About: React.FC<AboutProps> = ({ summary, bgGradient, color, position, overflow }) => {
  return (
    <Section
      id="about"
      title="About Me"
      bgGradient={bgGradient}
      color={color}
      minHeight="100vh"
      chevron={{ textContent: "What do I know?", href: "#skills" }}
    >
      <Box
        position="absolute"
        inset="0"
        zIndex="0"
        bgImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
        animation="pulse 2s infinite"
      />
      <Flex
        position="relative"
        zIndex="1"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: "8", md: "12" }}
        maxW={{ base: "90%", sm: "xl", md: "4xl", lg: "6xl", xl: "7xl" }}
        mx="auto"
        px="6"
        py={{ base: "8", md: "10" }}
        borderWidth="1px"
        borderColor="whiteAlpha.400"
        borderRadius="lg"
        bg="whiteAlpha.100"
        shadow="md"
        backdropFilter="blur(5px)"
      >
        <Box flexShrink={0}>
          <Image
            src="https://i.imgur.com/xSiF13n.jpeg"
            alt="Your Profile Picture"
            borderRadius="full"
            boxSize={{ base: "150px", md: "200px", lg: "250px" }}
            objectFit="cover"
            shadow="lg"
            borderColor="whiteAlpha.700"
            borderWidth="2px"
          />
        </Box>

        <VStack spacing="4" textAlign={{ base: "center", md: "left" }} flex="1">
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" lineHeight="relaxed">
            {summary}
          </Text>
        </VStack>
      </Flex>
    </Section>
  );
};

export default About;