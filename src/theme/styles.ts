import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    brand: {
      100: "#E9E3FF",
      200: "",
      300: "#422AFB",
      400: "#7551FF",
      500: "#3C5DD2", 
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",

    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#7551FF",
      300: "#7551FF",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    brandTabs: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#422AFB",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      50: "#FF000014",
      100: "#FFEBEB",
      200: "#EE3939",
      500: "#FF0000",
      600: "#E31A1A",
    },
    blue: {
      50: "#EBEFFF",
      100: "#F0F6FE",
      200: "#EAF3FF",
      300: "#E1F2FF",
      400: "#3185FC",
      500: "#3C5DD2",


    },
    green: {
      50: "#E7E6F2",
      100: "#00DCB1",
      150: "#C4C4C4",
      200: "#E3FFFA",
      300: "#00DCB1",
      500: "#03783D",
    },

    white: {
      100: "#0000",
      200: "#FFFFFF"
    },
    gray: {
      50: "#A6AAAC",
      100: "#FAFCFE",
      200: "#6C7278",
      300: "#A8A8A8",
      400: "#78828A",
      500: "#909295",
      600: "#A6AAAC33",
      700: "#3C4551",
      800: "#636A74",
      900: "#2B313A",
    },

    grey: {
      200: "#697682",
      300: "#8C8B92",
    },
    black: {
      500: "#212B36",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};