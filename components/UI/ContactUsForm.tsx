/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  styled,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { CustomTextField } from '../common/CustomTextField'

const SecondaryTypography = styled(Typography)(({ theme }) => ({
  variant: 'body2',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}))

const ContactUsForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<'success' | 'error'>('success')

  async function handleSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)
    const { name, email, mobileNumber } = formState
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, mobileNumber }),
    })

    const data = await response.json()
    setIsLoading(false)
    if (response.ok) {
      setFormState({ name: '', email: '', mobileNumber: '' })
      setSnackbarValue('Mail sent successfully!', 'success')
    } else {
      setSnackbarValue(`Failed to send email: ${data.message}`, 'error')
    }
  }

  const setSnackbarValue = (message: string, severity: 'success' | 'error') => {
    setMessage(message)
    setSeverity(severity)
    setOpen(true)
  }

  return (
    <Grid item xs={12} md={4} id="contact-us">
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <SecondaryTypography>
          Get in touch with us for any inquiries
        </SecondaryTypography>

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <CustomTextField
              label="Your Name"
              fullWidth
              value={formState.name}
              onChange={(e: any) =>
                setFormState({ ...formState, name: e.target.value })
              }
              required
            />
            <CustomTextField
              label="Your Email"
              fullWidth
              value={formState.email}
              onChange={(e: any) =>
                setFormState({ ...formState, email: e.target.value })
              }
              required
              type="email"
            />
            <CustomTextField
              label="Contact Number"
              fullWidth
              value={formState.mobileNumber}
              onChange={(e: any) => {
                const value = e.target.value.replace(/\D/g, '') // Remove non-digits
                if (value.length <= 10) {
                  // Limit to 10 digits
                  setFormState({ ...formState, mobileNumber: value })
                }
              }}
              type="number"
              required
            />

            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 600,
                '&.Mui-disabled': {
                  backgroundColor: 'rgb(58 59 80)',
                  color: 'rgb(173 164 164 / 78%)',
                },
              }}
            >
              {isLoading ? (
                <>
                  <CircularProgress
                    size={20}
                    sx={{ mr: 1, color: 'inherit' }}
                  />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </Box>
        </form>
      </Box>

      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{
          '&.MuiSnackbar-root': {
            bottom: '35%',
          },
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ borderRadius: 5 }} // Apply border radius here
        >
          {message}{' '}
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default ContactUsForm
