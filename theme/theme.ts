import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue
      // main: '#9eb857' // Green
    },
    secondary: {
      main: '#dc004e', // Pink
    },
    background: {
      default: '#ffffff', // White
      paper: '#f5f5f5', // Light gray
    },
    text: {
      primary: '#000000', // Black
      secondary: '#757575', // Gray
    },
  },
})

// Define your dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
      // main: '#9eb857' // Green
    },
    secondary: {
      main: '#f48fb1', // Light pink
    },
    background: {
      default: '#121212', // Dark gray
      paper: '#1e1e1e', // Slightly lighter dark gray
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#bdbdbd', // Light gray
    },
  },
})
