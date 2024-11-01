import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import FeaturesSection from '../components/AppFeatures/FeaturesSection'
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection'
import TransferHighlightsSection from '../components/TransferHighlights/TransferHighlightsSection'
import TestimonialsSection from '../components/Testimonials/TestimonialsSection'
import FAQContactSection from '../components/FAQContact/FAQContactSection'


const Home = () => {
  return (
    <>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TransferHighlightsSection />
        <TestimonialsSection />
        <FAQContactSection />
    </>
  )
}

export default Home