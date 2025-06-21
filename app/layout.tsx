import type { Metadata } from 'next'
import './globals.css'
import { ThemeContextProvider } from '@/providers/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'One Tenth Money',
  description: 'Where Every One-Tenth of your Income Counts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
