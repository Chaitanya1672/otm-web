import React from 'react'
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material'

const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'Professional Trader',
    content:
      '"The backtesting platform has completely transformed my trading strategy. The accuracy and depth of analysis is unmatched."',
    image: '/assets/users/user1.png',
  },
  {
    name: 'Sarah Chen',
    role: 'Quantitative Analyst',
    content:
      '"The custom indicator development service helped me implement complex strategies that weren’t possible before."',
    image: '/assets/users/user2.png',
  },
  {
    name: 'David Thompson',
    role: 'Fund Manager',
    content:
      '"The comprehensive analytics and reporting have given us invaluable insights into our strategy performance."',
    image: '/assets/users/user3.png',
  },
]

export default function Testimonials() {
  const theme = useTheme()

  return (
    <>
      {/* Testimonials Section */}
      <Box
        id="testimonials"
        sx={{ backgroundColor: theme.palette.background.default, py: 10 }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            What Our Users Say
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            maxWidth={600}
            mx="auto"
            mb={6}
          >
            Join thousands of satisfied traders who trust our platform
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((user, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box
                  sx={{
                    p: 3,
                    border: `2px solid ${theme.palette.primary.light}`,
                    borderRadius: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '6',
                    },
                  }}
                  bgcolor={
                    theme.palette.mode === 'light'
                      ? '#f3f9fc'
                      : theme.palette.background.paper
                  }
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={user.image} alt={user.name} />
                    <Box>
                      <Typography fontWeight="bold">{user.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.primary">
                    {user.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
