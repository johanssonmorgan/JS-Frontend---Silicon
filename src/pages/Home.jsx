import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import FeaturesSection from '../components/AppFeatures/FeaturesSection'
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection'
import TransferHighlightsSection from '../components/TransferHighlights/TransferHighlightsSection'
import TestimonialsSection from '../components/Testimonials/TestimonialsSection'
import FAQContactSection from '../components/FAQContact/FAQContactSection'
import Navbar from '../components/Navbar/Navbar'


const Home = () => {
  return (
    <>
        <FeaturesSection />
        <HowItWorksSection />
        <TransferHighlightsSection />
        <TestimonialsSection />
        <FAQContactSection />
    </>
  )
}

export default Home