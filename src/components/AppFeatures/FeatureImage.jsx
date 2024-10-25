import React from 'react'
import ImageContainer from '../UI/ImageContainer'

const FeatureImage = () => {
  return (
    <ImageContainer image={"src/assets/app-features-phone.svg"} altText='iPhone screen shows transaction history.' optionalClassName='app-features-image' />
  )
}

export default FeatureImage