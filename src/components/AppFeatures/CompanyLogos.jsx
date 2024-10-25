import React from 'react'
import ImageContainer from '../UI/ImageContainer'

const CompanyLogos = () => {
  return (
    <div className="brands">
        <ImageContainer image={"src/assets/logoipsum-logo1.svg"} altText='Company logo' optionalClassName='border-logoipsum'/>
        <ImageContainer image={"src/assets/logoipsum-logo2.svg"} altText='Company logo' optionalClassName='border-logoipsum'/>
        <ImageContainer image={"src/assets/logoipsum-logo3.svg"} altText='Company logo' optionalClassName='border-logoipsum'/>
        <ImageContainer image={"src/assets/logoipsum-logo4.svg"} altText='Company logo' optionalClassName='border-logoipsum'/>                
        <ImageContainer image={"src/assets/logoipsum-logo5.svg"} altText='Company logo' optionalClassName='border-logoipsum brand-5' />
        <ImageContainer image={"src/assets/logoipsum-logo6.svg"} altText='Company logo' optionalClassName='border-logoipsum brand-6' />
    </div>
  )
}

export default CompanyLogos