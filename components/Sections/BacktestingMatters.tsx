import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  Avatar,
} from '@mui/material'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import { ArrowRightAltOutlined } from '@mui/icons-material'
import CustomContainer from '../common/CustomContainer'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { useThemeContext } from '@/providers/ThemeContext'

const features = [
  {
    title: 'Make Informed Decisions',
    description: 'Transform gut feelings into data-driven decisions',
    icon: <EmojiObjectsIcon sx={{ color: '#3399ff' }} />,
  },
  {
    title: 'Optimize Returns',
    description: 'Fine-tune strategies to maximize potential returns',
    icon: <ShowChartIcon sx={{ color: '#3399ff' }} />,
  },
  {
    title: 'Risk Management',
    description: 'Identify and mitigate potential risks effectively',
    icon: <ShieldOutlinedIcon sx={{ color: '#3399ff' }} />,
  },
  {
    title: 'Performance Analysis',
    description: 'Deep insights into strategy effectiveness',
    icon: <AssessmentOutlinedIcon sx={{ color: '#3399ff' }} />,
  },
  {
    title: 'Build Confidence',
    description: 'Trade with confidence backed by data',
    icon: <LightbulbOutlinedIcon sx={{ color: '#3399ff' }} />,
  },
]

const BacktestingMattersSection = () => {
  const theme = useTheme()
  const { isDarkMode } = useThemeContext()
  const heroBgColor = !isDarkMode ? '#f3f9fc' : theme.palette.background.default

  const heroBgColor2 = !isDarkMode ? '#eaf7f7' : theme.palette.background.paper
  return (
    <Box
      id="backtesting-matters"
      sx={{ bgcolor: theme.palette.background.default, py: 10 }}
    >
      <CustomContainer>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Why Backtesting Matters
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
          mb={4}
        >
          Discover how backtesting can transform your trading journey and
          maximize your potential for success
        </Typography>

        {/* Center Node */}
        <Box
          sx={{
            background: heroBgColor2,
            borderRadius: 4,
            py: 3,
            position: 'relative',
            textAlign: 'center',
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: '#fff',
              width: 72,
              height: 72,
              boxShadow: theme.shadows[3],
              mx: 'auto',
            }}
          >
            <TrendingUpIcon
              fontSize="large"
              htmlColor={theme.palette.primary.main}
            />
          </Avatar>
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Backtesting Matters
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" mt={2}>
          {features.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={index < 2 ? 4 : 3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: heroBgColor,
                  p: 3,
                  borderRadius: 3,
                  maxWidth: 300,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#e6f3ff',
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>

              {index <= 4 && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-20px',
                    width: '2px',
                    height: '20px',
                    bgcolor: '#b3d9ff',
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button
            variant="contained"
            endIcon={<ArrowRightAltOutlined />}
            sx={{
              bgcolor: '#3399ff',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#2684cc',
              },
            }}
          >
            Start Backtesting Now
          </Button>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default BacktestingMattersSection
