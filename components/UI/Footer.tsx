import React from 'react'
import { Box, Grid, Typography, Button, useTheme, styled } from '@mui/material'
import CustomContainer from '../common/CustomContainer'
import Image from 'next/image'
import { CustomTextField } from '../common/CustomTextField'

const SecondaryTypography = styled(Typography)(({ theme }) => ({
  variant: 'body2',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}))

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#111826', color: 'white', md: { py: 6 } }}>
      <CustomContainer>
        <Grid container spacing={5}>
          {/* Logo and Caption */}

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Image
                src="/logo/otm_logo_horizontal.png"
                alt="Logo"
                height={60}
                width={280}
                style={{ objectFit: 'cover', maxWidth: '100%' }}
              />
              <Typography
                variant="caption"
                color="grey.400"
                textAlign={{ xs: 'center', md: 'left' }}
                sx={{
                  px: { xs: 1, sm: 0 }, // small padding on mobile
                  wordBreak: 'break-word',
                }}
              >
                Where Every One-Tenth of your Income Counts
              </Typography>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Services
            </Typography>
            <SecondaryTypography>Strategy Backtesting</SecondaryTypography>
            <SecondaryTypography>Custom Indicators</SecondaryTypography>
            <SecondaryTypography>Performance Reports</SecondaryTypography>
            <SecondaryTypography>Pine Script Coding</SecondaryTypography>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <SecondaryTypography>Documentation</SecondaryTypography>
            <SecondaryTypography>API Reference</SecondaryTypography>
            <SecondaryTypography>Blog</SecondaryTypography>
            <SecondaryTypography>Support</SecondaryTypography>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={4} id="contact-us">
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Contact Us
              </Typography>
              <SecondaryTypography>
                Get in touch with us for any inquiries
              </SecondaryTypography>

              <Box display="flex" flexDirection="column" gap={1} mt={2}>
                <CustomTextField label="Your Name" fullWidth />
                <CustomTextField label="Your Email" fullWidth />
                <CustomTextField label="Contact Number" fullWidth />

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 4,
                    mt: 1,
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    width: '100%',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Typography variant="body2" color="grey.500" align="center" mt={6}>
          © 2025 OneTenthMoney. All rights reserved.
        </Typography>
      </CustomContainer>
    </Box>
  )
}
