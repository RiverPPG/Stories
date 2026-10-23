import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }: { colorMode: string }) => ({
      body: {
        bg: colorMode === "light" ? "gray.50" : "gray.900",
        color: colorMode === "light" ? "gray.800" : "gray.100",
      },
    }),
  },
});

export default theme;
