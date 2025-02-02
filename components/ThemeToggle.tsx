'use client'

import { Button } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useThemeContext } from '@/providers/ThemeContext'

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeContext()

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={toggleTheme}
      startIcon={isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    >
      Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
    </Button>
  )
}
