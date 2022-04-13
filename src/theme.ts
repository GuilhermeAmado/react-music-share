import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Ubuntu, sans-serif',
    heading: 'Ubuntu, sans-serif',
  },
  colors: {
    dark: '#062C30',
    light: '#F5F5F5',
    primary: '#40407a',
    accent: '#E2D784',
  },
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, #d3cce3, #e9e4f0)',
        minHeight: '100vh',
      },
    },
  },
});

export default theme;
