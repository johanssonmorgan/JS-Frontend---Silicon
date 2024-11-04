import React from 'react'
import HeroHeader from './HeroHeader'
import HeroContent from './HeroContent'
import HeroImageContainer from './HeroImageContainer'

const HeroSection = () => {
  return (
    <section className="section-1 container">
        <HeroHeader />
        <HeroContent />
        <HeroImageContainer />
    </section>
  )
}

export default HeroSection