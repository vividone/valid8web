import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: "Nunito",
    textTransform: 'uppercase',
    borderRadius: "10px",
    bg: "#3C5DD2",

  },
  sizes: {
    sm: {
      fontSize: '14px',
      width: "180px",
      height: "41px",
      paddingX: 4,
      paddingY: 4,
      borderRadius: "5px",
    },
    md: {
      fontSize: 'md',
      width: "212px",
      height: "51px",
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
      bg: "#3C5DD2",
      fontWeight: "700",
      color: "white",
      _hover: {
        bg: "#3C5DD2",
        scale: "1.5"
      }
    },
    ghost: {
      px: 12,
      py:8,
      bg: "#3C5DD233",
      color: "#3C5DD2",
      fontWeight: "700",
      _hover: {
        scale: "1.5",
        bg: "#3C5DD2",
        color: "white"
      }
    },
  },
});