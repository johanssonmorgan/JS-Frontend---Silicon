import React from 'react'
import HeroHeader from './HeroHeader'
import HeroContent from './HeroContent'
import HeroImageContainer from './HeroImageContainer'

const HeroSection = () => {
  return (
    <div id='hero'>
        <section className="section-1 container">
            <HeroHeader />
            <HeroContent />
            <HeroImageContainer />
        </section>
    </div>
  )
}

export default HeroSection