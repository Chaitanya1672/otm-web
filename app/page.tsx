'use client'

import { Box } from '@mui/material'
import Navbar from '../components/UI/Navbar'
import HeroSection from '@/components/Sections/HeroSection'
import ServicesSection from '@/components/Sections/ServiceSection'
import BacktestingMatters from '@/components/Sections/BacktestingMatters'
import WhyChooseUs from '@/components/Sections/ChooseUsSection'
import Testimonials from '@/components/Sections/TestimonialSection'
import Footer from '@/components/UI/Footer'

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BacktestingMatters />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </Box>
  )
}
