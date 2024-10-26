import { useState } from 'react'
import './main.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturesSection from './components/AppFeatures/FeaturesSection'
import HowItWorksSection from './components/HowItWorks/HowItWorksSection'
import TransferHighlightsSection from './components/TransferHighlights/TransferHighlightsSection'
import TestimonialsSection from './components/Testimonials/TestimonialsSection'
import Footer from './components/Footer/Footer'
import FAQContactSection from './components/FAQContact/FAQContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TransferHighlightsSection />
      <TestimonialsSection />
      <FAQContactSection />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
