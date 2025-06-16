import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  useTheme,
} from '@mui/material'
import { keyframes } from '@emotion/react'
import SecurityIcon from '@mui/icons-material/Security'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import StorageIcon from '@mui/icons-material/Storage'
import BuildIcon from '@mui/icons-material/Build'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import { useThemeContext } from '@/providers/ThemeContext'

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`

const cardItems = [
  {
    icon: <SecurityIcon />,
    title: 'Institutional-Grade Accuracy',
    description:
      'Our advanced algorithms and data processing ensure the highest level of accuracy in backtesting results, matching institutional standards.',
  },
  {
    icon: <FlashOnIcon />,
    title: 'Lightning-Fast Performance',
    description:
      'Test complex strategies across multiple timeframes and assets in seconds with our optimized backtesting engine.',
  },
  {
    icon: <HeadsetMicIcon />,
    title: '24/7 Expert Support',
    description:
      'Get assistance from our team of professional traders and developers whenever you need it, ensuring you never get stuck.',
  },
  {
    icon: <StorageIcon />,
    title: 'Comprehensive Data Coverage',
    description:
      'Access historical data across multiple markets, including stocks, forex, crypto, and commodities, with clean and adjusted data.',
  },
  {
    icon: <BuildIcon />,
    title: 'Flexible Customization',
    description:
      'Build and customize your strategies with our intuitive interface or use advanced coding options for complete control.',
  },
  {
    icon: <ShowChartIcon />,
    title: 'Advanced Analytics',
    description:
      "Get deep insights into your strategy's performance with comprehensive analytics and visualization tools.",
  },
]

export default function WhyChooseUs() {
  const theme = useTheme()
  const { isDarkMode } = useThemeContext()
  const heroBgColor = !isDarkMode ? '#f9fafb' : theme.palette.background.paper

  return (
    <Box id="choose-us" sx={{ py: 10, bgcolor: heroBgColor }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          mb={6}
        >
          Discover why thousands of traders trust our platform for their
          strategy testing needs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                // elevation={0}
                sx={{
                  backgroundColor:
                    theme.palette.mode === 'light'
                      ? '#f3f9fc'
                      : theme.palette.background.default,
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '4',

                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                  height: '100%',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#e0f7fa',
                    color: '#2196f3',
                    width: 48,
                    height: 48,
                    mx: 'auto',
                    mb: 2,
                    animation: `${bounce} 2s infinite`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.15)',
                    },
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
