import React from 'react';
import Breadcrumb from '../components/UI/Breadcrumb';
import ImageContainer from '../components/UI/ImageContainer';
import FeaturesCard from '../components/AppFeatures/FeaturesCard';
import Image from '/src/assets/app-features-phone.svg'

const Features = () => {
  return (
    <>
      <Breadcrumb />
      <section className="features-page section-2 container">
        <div id="features" className="section-2-content">
            <ImageContainer imageUrl={Image} altText='iPhone screen shows transaction history.' className='app-features-image' />
            <FeaturesCard />
        </div>
    </section>
    </>
  )
}

export default Features