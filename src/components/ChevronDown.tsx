"use client"

import { Box, Text } from "@chakra-ui/react"
import { keyframes } from "@chakra-ui/system";
import NextLink from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface ChevronDownProps {
  textContent: string
  href: string
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

const ChevronDown: React.FC<ChevronDownProps> = ({ textContent, href }) => {
  return (
    <>
      <Box
        mt="6"
        mb="4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      ><Box
        as={NextLink}
        href={href}
        position="absolute"
        bottom="10"
        zIndex="10"
        color="white"
        fontSize="4xl"
        animation={`${bounceSlow} 2s infinite`}
        aria-label="Scroll to About Me"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2"
        width="200px"
      >
          <Text textAlign="center" fontSize="lg" fontWeight="bold" animation={`${bounceSlow} 2s infinite 0.8s`}>
            {textContent}
          </Text>
          <FaChevronDown />
        </Box>
      </Box >
    </>
  )

}

export default ChevronDown