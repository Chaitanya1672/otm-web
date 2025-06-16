import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  Link as MuiLink,
} from '@mui/material'
import { styled } from '@mui/system'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import CodeIcon from '@mui/icons-material/Code'
import BarChartIcon from '@mui/icons-material/BarChart'
import ImageIcon from '@mui/icons-material/Image'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import CustomContainer from '../common/CustomContainer'

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor:
    theme.palette.mode === 'light' ? '#f3f9fc' : theme.palette.background.paper,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '4',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '6',
  },
  height: '100%',
}))

const services = [
  {
    icon: <InsertChartIcon fontSize="large" color="primary" />,
    title: 'Strategy Backtesting',
    description:
      'Test your trading strategies against historical market data with precision and accuracy',
  },
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: 'Custom Indicators',
    description:
      'Develop and implement custom technical indicators tailored to your strategy',
  },
  {
    icon: <BarChartIcon fontSize="large" color="primary" />,
    title: 'Performance Reports',
    description:
      'Generate detailed performance reports with comprehensive metrics and analytics',
  },
  {
    icon: <ImageIcon fontSize="large" color="primary" />,
    title: 'Pine Script Coding',
    description:
      'Professional Pine Script development services for TradingView indicators',
  },
  {
    icon: <DonutLargeIcon fontSize="large" color="primary" />,
    title: 'Scanner Creation',
    description:
      'Build custom market scanners to identify trading opportunities in real-time',
  },
]

export default function ServicesSection() {
  const theme = useTheme()

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#f9fafb'
            : theme.palette.background.paper,
      }}
    >
      <CustomContainer>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          mb={6}
        >
          Comprehensive suite of tools and services to help you build, test and
          optimize your trading strategies
        </Typography>

        <Grid container spacing={4} justifyContent="start">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <ServiceCard>
                <Box mb={2}>{service.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {service.description}
                </Typography>
                <MuiLink
                  href="#"
                  underline="hover"
                  sx={{ color: 'primary.main', fontWeight: 500 }}
                >
                  Learn more →
                </MuiLink>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </Box>
  )
}
