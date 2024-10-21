import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    textTransform: 'uppercase',
    borderRadius: '10px',
    bg: '#3C5DD2',
  },
  sizes: {
    sm: {
      fontSize: ['12px', '12px', '14px'], // Responsive font size
      Width: ['80px', '100px', '180px'], // Responsive min-width
      Height: ['40px', '40px', '50px'],  // Responsive min-height
      paddingX: 4,
      paddingY: 5,
      borderRadius: '5px',
    },
    md: {
      fontSize: ['14px', '16px', 'md'],
      width: ['160px', '180px', '212px'], // Responsive width
      height: ['40px', '50px', '51px'],   // Responsive height
      paddingX: 6,
      paddingY: 4,
    },
    lg: {
      fontSize: 'lg',
      width: '212px',
      paddingX: 6,
      paddingY: 4,
    },
  },
  variants: {
    auth: {
      bg: '#3C5DD2',
      fontWeight: '700',
      color: 'white',
    },
    solid: {
      bg: '#3C5DD2',
      fontWeight: '700',
      color: 'white',
      _hover: {
        bg: '#3C5DD2',
        transform: 'scale(1.05)', // Slight scale effect
      },
    },
    ghost: {
      px: 12,
      py: 8,
      bg: '#3C5DD233',
      color: '#3C5DD2',
      fontWeight: '700',
      _hover: {
        transform: 'scale(1.05)', // Hover scale effect
        bg: '#3C5DD2',
        color: 'white',
      },
    },
  },
});
