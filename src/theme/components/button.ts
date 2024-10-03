import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
    background:"pink"
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },

  variants: {
    outline: {
      border: '10px solid',
      borderColor: 'pink',
      color: 'purple.500',
    },
    solid: {
      // bg: 'purple.500',
      color: 'white',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})