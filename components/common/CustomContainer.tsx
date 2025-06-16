import React from 'react'
import { Box, Container } from '@mui/material'

interface FullWidthContainerProps {
  children: React.ReactNode
  contentWidth?: string | number // e.g. '60%', 800, etc.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any
}

const CustomContainer: React.FC<FullWidthContainerProps> = ({
  children,
  contentWidth = '65%',
  sx,
}) => {
  return (
    <Box
      sx={{
        width: '100vw',
        backgroundColor: 'transparent', // optional
      }}
    >
      <Container
        disableGutters
        sx={{
          width: contentWidth,
          margin: '0 auto',
          ...sx,
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default CustomContainer
