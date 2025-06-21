import { TextField, useTheme } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomTextField = ({ label, ...props }: any) => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  return (
    <TextField
      fullWidth
      label={label}
      variant="filled"
      InputProps={{
        disableUnderline: true, // common for filled variant with custom style
        sx: {
          borderRadius: '30px',
          height: '50px',
          color: (theme) => theme.palette.text.primary,

          // Autofill fix
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px transparent inset',
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },
      }}
      sx={{
        borderRadius: '30px',
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
      }}
      {...props}
    />
  )
}
