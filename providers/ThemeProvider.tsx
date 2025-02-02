'use client'

import { useThemeContext } from '@/providers/ThemeContext'
import { lightTheme, darkTheme } from '@/theme/theme'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { isDarkMode } = useThemeContext()

  if (isDarkMode === null) return null // Prevent rendering before theme is set

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
