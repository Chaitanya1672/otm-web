'use client'

import { Typography, Paper, Container } from '@mui/material'
import ThemeToggle from '../components/ThemeToggle'
import Navbar from '../components/UI/Navbar'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Starter template with Next js + Material-UI
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Built in support for light and dark themes.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Integrated with Eslint and Prettier.
        </Typography>
        <ThemeToggle />
      </Paper>
    </Container>
  )
}
