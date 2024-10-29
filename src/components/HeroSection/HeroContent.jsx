import React from 'react'
import BtnApp from '../UI/BtnApp'
import BtnDiscover from '../UI/BtnDiscover'
import HeroDescription from './HeroDescription'
import AppStore from '/src/assets/appstore.svg'
import GooglePlay from '/src/assets/googleplay.svg'

const HeroContent = () => {
  return (
    <div className="s1-content">
        <HeroDescription />
        <div className="app-buttons">
            <BtnApp srText={"Download on the App Store"} imageClassName={"appstore-icon"} image={AppStore} altText={"App Store"} />
            <BtnApp srText={"Get it on Google Play"} imageClassName={"googleplay-icon"} image={GooglePlay} altText={"Google Play Store"} />
        </div>
        <BtnDiscover />
    </div>
  )
}

export default HeroContent