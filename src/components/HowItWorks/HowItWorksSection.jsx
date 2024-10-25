import React from 'react'
import SectionHeader from './SectionHeader'
import ResponsiveImageContainer from './ResponsiveImageContainer'
import ContentText from './ContentText'

const HowItWorksSection = () => {
  return (
    <section id="section-3">
        <div className="section-3 container">
            <SectionHeader />
            <ResponsiveImageContainer />
            <ContentText />
        </div>
    </section>
  )
}

export default HowItWorksSection