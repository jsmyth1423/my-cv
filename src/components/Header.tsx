"use client";

import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/system";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import NextLink from "next/link";
import ChevronDown from "./ChevronDown";

interface HeaderProps {
  name: string;
  tagline: string;
}

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounceSlow = keyframes`
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const Header: React.FC<HeaderProps> = ({ name, tagline }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Box
      as={motion.header}
      position="relative"
      w="full"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      bgGradient="linear(to-br, indigo.900, purple.900, rose.900)"
      overflow="hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Box position="absolute" inset="0" bg="black" opacity="0.3" zIndex="0" />
      <Box
        position="absolute"
        inset="0"
        zIndex="0"
        bgImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
        animation="pulse 4s infinite"
      />

      <Box position="relative" zIndex="10" textAlign="center" px="4">
        <Heading
          as={motion.h1}
          fontSize={{ base: "5xl", md: "7xl" }}
          fontWeight="bold"
          lineHeight="tight"
          letterSpacing="tighter"
          mb="4"
          variants={itemVariants}
        >
          {name}
        </Heading>
        <Text
          as={motion.p}
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="light"
          mb="8"
          variants={itemVariants}
        >
          {tagline}
        </Text>
        <Flex
          as={motion.div}
          gap="4"
          justify="center"
          variants={itemVariants}
        >
          <Button
            as={NextLink}
            href="#experience"
            variant="outline"
            borderColor="white"
            color="white"
            _hover={{transform: "scale(1.1)"}}
            py="3"
            px="8"
            rounded="full"
            fontSize="lg"
            fontWeight="semibold"
            transition="all 0.3s ease"
          >
            View My Work
          </Button>
          <Button
            as={NextLink}
            href="#footer"
            variant="outline"
            borderColor="white"
            color="white"
            _hover={{ transform: "scale(1.1)" }}
            py="3"
            px="8"
            rounded="full"
            fontSize="lg"
            fontWeight="semibold"
            transition="all 0.3s ease"
          >
            Contact Me
          </Button>
        </Flex>
      </Box>
      <ChevronDown textContent="Interested?" href="#about" />
    </Box>
  );
};

export default Header;