'use client' // Mark this as a Client Component

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4' // Moon icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7' // Sun icon for light mode
import { useThemeContext } from '@/providers/ThemeContext'
// import { useThemeContext } from '../providers/ThemeContextProvider'; // Adjust the import path as needed

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useThemeContext()

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        {/* Navbar Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {/* Theme Toggle Button */}
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Optional: Text Label for Theme Toggle */}
        {/* <Button
          color="inherit"
          onClick={toggleTheme}
          startIcon={isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button> */}
      </Toolbar>
    </AppBar>
  )
}
