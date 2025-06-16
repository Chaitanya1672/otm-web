'use client' // Mark this as a Client Component
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
  Typography,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4' // Moon icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7' // Sun icon for light mode
import { useThemeContext } from '@/providers/ThemeContext'
import Image from 'next/image'
import CustomContainer from '../common/CustomContainer'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Close as CloseIcon } from '@mui/icons-material'

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useThemeContext()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Why Backtesting', link: '#backtesting-matters' },
    { name: 'Choose Us', link: '#choose-us' },
    { name: 'Contact Us', link: '#contact-us' },
  ]

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <CustomContainer contentWidth={isMobile ? '100%' : '80%'}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo + Navigation */}
          <Box display="flex" alignItems="center" gap={2}>
            <Image
              src={
                isDarkMode
                  ? '/logo/otm_logo_main.png'
                  : '/logo/otm_logo_main_light.png'
              }
              alt="Logo"
              width={90}
              height={isDarkMode ? 50 : 60}
              style={{
                objectFit: isDarkMode ? 'contain' : 'cover',
              }}
            />

            {!isMobile && (
              <Box display="flex" gap={3}>
                {menuItems.slice(0, 4).map((item) => (
                  <Button key={item.name} color="inherit" href={item.link}>
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          {/* Actions */}
          <Box display="flex" gap={1} alignItems="center">
            {!isMobile && (
              <>
                <Button color="inherit" href={menuItems[4].link}>
                  {menuItems[4].name}
                </Button>
                <Button variant="contained">Start Backtesting</Button>
              </>
            )}

            {/* Theme toggle */}
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Hamburger Menu for mobile */}
            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </CustomContainer>

      {/* Drawer for mobile */}
      {/* <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box width={250} role="presentation" onClick={toggleDrawer}>
          <List>
            {menuItems.map(({ name, link }) => (
              <ListItem key={name}>
                <Button href={link} color="inherit">
                  <ListItemText primary={name} />
                </Button>
              </ListItem>
            ))}
            <ListItem>
              <Button fullWidth variant="contained" onClick={toggleDrawer}>
                Start Backtesting
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer> */}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          },
        }}
      >
        <Box
          sx={{
            width: 280,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          role="presentation"
        >
          {/* Header */}
          <Box
            sx={{
              p: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <Box sx={{ flex: 1, px: 2, py: 1 }}>
            <List sx={{ '& .MuiListItem-root': { px: 1 } }}>
              {menuItems.map(({ name, link }) => (
                <ListItem key={name} sx={{ mb: 0.5 }}>
                  <Button
                    href={link}
                    fullWidth
                    sx={{
                      color: 'white',
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={name}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '1rem',
                          fontWeight: 500,
                        },
                      }}
                    />
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Bottom Action */}
          <Box sx={{ p: 3, pt: 2 }}>
            <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.1)' }} />
            <Button
              fullWidth
              variant="contained"
              onClick={toggleDrawer}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                py: 1.5,
                borderRadius: 3,
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                },
              }}
            >
              Start Backtesting
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  )
}
