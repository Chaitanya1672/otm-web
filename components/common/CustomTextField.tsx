import { TextField, useTheme, alpha } from '@mui/material'

export const CustomTextField = ({ label, ...props }: any) => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  return (
    <TextField
      fullWidth
      label={label}
      InputProps={{
        disableUnderline: true,
        sx: {
          backgroundColor: isDarkMode
            ? alpha('#fff', 0.06)
            : alpha('#000', 0.06),
          borderRadius: '30px',
          height: '50px',
        },
      }}
      InputLabelProps={{
        sx: {
          color: !isDarkMode
            ? theme.palette.text.secondary
            : theme.palette.text.primary,
        },
      }}
      {...props}
    />
  )
}
