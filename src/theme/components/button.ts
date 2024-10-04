import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: "10px",
  },
  sizes: {
    sm: {
      fontSize: '10px',
      width: "200px",
      height: "41px",  // Set height in pixels
      paddingX: 4,     // Use specific padding instead of `p` shorthand
      paddingY: 2,     // Adjust padding to avoid conflict with height
      borderRadius: "5px",
    },
    md: {
      fontSize: 'md',
      width: "212px",
      height: "51px",   // Define height for md size
      paddingX: 6,
      paddingY: 4,
    },
    lg: {
      fontSize: 'lg',
      width: "212px",
      paddingX: 6,
      paddingY: 4,
    },
  },
  variants: {
    auth: {
      bg: "#3C5DD2",
      fontWeight: "700",
      color: "white",
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
});
