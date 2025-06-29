"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    indigo: {
      900: "#2a4365",
    },
    purple: {
      900: "#553c9a",
      600: "#805ad5",
      700: "#6B46C1"
    },
    rose: {
      900: "#805ad5",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
      950: "#0C0E14"
    },
    blue: {
      600: "#3182CE",
      300: "#63B3ED",
      900: "#2A4365",
    },
    green: {
      800: "#276749",
      100: "#F0FFF4",
      900: "#1C4532",
      200: "#C6F6D5"
    },
    orange: {
      900: "#6B46C1",
    },
    red: {
      300: "#FC8181"
    },
    teal: {
      900: "#285E61",
    },
    cyan: {
      900: "#00A3C4",
    },
    pink: {
      900: "#9C4221",
    }
  },
  styles: {
    global: {
      "@keyframes pulse": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}