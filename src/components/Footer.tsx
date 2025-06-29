"use client";

import { Box, Text, Flex, Link as ChakraLink, VStack, Heading } from "@chakra-ui/react";
import React from 'react';
import NextLink from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { CVData } from "@/types/cv";

interface FooterProps {
  contact: CVData['contact'];
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="footer"
      as="footer"
      bg="gray.950" 
      color="gray.200" 
      py="10" 
      textAlign="center"
      position="relative"
      overflow="hidden"
    >

      <Box
        position="absolute"
        inset="0"
        zIndex="0"
        bgImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
        animation="pulse 2s infinite"
      />

      <VStack spacing="6" align="center" justify="center" position="relative" zIndex="1">

        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white" mb="2">
          Get in Touch
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.300" maxW="2xl" px="4">
          I'm currently seeking new opportunities and collaborations. Feel free to reach out!
        </Text>


        <Flex gap="6" my="4"> 
          <ChakraLink
            as={NextLink}
            href={`mailto:${contact.email}`}
            isExternal
            fontSize="4xl" 
            color="gray.200" 
            _hover={{ color: "purple.300", transform: "scale(1.1)" }} 
            transition="all 0.2s ease-in-out"
            aria-label="Email"
          >
            <FaEnvelope />
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="4xl" 
            color="gray.200" 
            _hover={{ color: "blue.300", transform: "scale(1.1)" }} 
            transition="all 0.2s ease-in-out"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="4xl" 
            color="gray.200"
            _hover={{ color: "gray.400", transform: "scale(1.1)" }} 
            transition="all 0.2s ease-in-out"
            aria-label="GitHub"
          >
            <FaGithub />
          </ChakraLink>
        </Flex>


        <Text fontSize="md" color="gray.400" mb="6"> 
          Or send me an email directly at:{" "}
          <ChakraLink href={`mailto:${contact.email}`} color="purple.300" _hover={{ textDecoration: "underline" }}>
            {contact.email}
          </ChakraLink>
        </Text>

        <Text fontSize="sm" color="gray.500">
          &copy; {currentYear} Jordan Smyth. All rights reserved.
        </Text>
        <Text fontSize="xs" color="gray.600">
          Built with Next.js and Chakra UI.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;