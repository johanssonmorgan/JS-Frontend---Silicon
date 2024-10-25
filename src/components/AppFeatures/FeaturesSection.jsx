import React from 'react'
import CompanyLogos from './CompanyLogos'
import ImageContainer from '../UI/ImageContainer'
import FeaturesCard from './FeaturesCard'

const FeaturesSection = () => {
  return (
    <section className="section-2 container">
        <CompanyLogos />

        <div id="features" className="section-2-content">
            <ImageContainer image={"src/assets/app-features-phone.svg"} altText='iPhone screen shows transaction history.' optionalClassName='app-features-image' />
            <FeaturesCard />
        </div>
    </section>
  )
}

export default FeaturesSection