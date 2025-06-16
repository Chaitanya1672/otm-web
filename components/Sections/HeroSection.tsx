import React from 'react'
import {
  Typography,
  Button,
  Box,
  useTheme,
  Grid,
  useMediaQuery,
} from '@mui/material'
import CustomContainer from '../common/CustomContainer'
import { useThemeContext } from '@/providers/ThemeContext'

const HeroSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const { isDarkMode } = useThemeContext()

  const heroBgColor = !isDarkMode ? '#f3f9fc' : theme.palette.background.default

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: heroBgColor,
        py: { xs: 10, sm: 12, md: 14 },
        textAlign: 'center',
      }}
    >
      <CustomContainer
        sx={{ maxWidth: { xs: '100%', sm: '80%', md: '45%', lg: '40%' } }}
      >
        <Box>
          <Typography
            variant={isMobile ? 'h5' : isTablet ? 'h4' : 'h3'}
            fontWeight="bold"
            gutterBottom
          >
            Transform Your Trading Strategies with Professional Backtesting
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={{ px: { xs: 1, sm: 4, md: 0 } }}
          >
            Test, optimize and validate your trading strategies with
            institutional-grade backtesting tools. Make data-driven decisions
            with confidence.
          </Typography>

          <Box
            mt={4}
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            gap={2}
            alignItems="center"
          >
            <Button variant="contained" color="primary" fullWidth={isMobile}>
              Sample PDF
            </Button>
            <Button variant="outlined" color="primary" fullWidth={isMobile}>
              Get Started
            </Button>
          </Box>
        </Box>

        <Grid
          container
          spacing={4}
          mt={{ xs: 4, md: 8 }}
          justifyContent="center"
        >
          {[
            { value: '10M+', label: 'Strategies Tested' },
            { value: '99.9%', label: 'Accuracy Rate' },
            { value: '50K+', label: 'Active Users' },
          ].map((stat) => (
            <Grid
              key={stat.label}
              item
              xs={4}
              sm={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                color="primary"
                fontWeight="bold"
              >
                {stat.value}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign="center"
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </Box>
  )
}

export default HeroSection
