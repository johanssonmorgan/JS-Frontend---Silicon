import React from 'react'
import Shadow from '/src/assets/hero-phone-shadow.svg'
import BackgroundPhone from '/src/assets/hero-phone-background.png'
import ForegroundPhone from '/src/assets/hero-phone-foreground.png'

const HeroImageContainer = () => {
  return (
    <div className="s1-images">
        <img className="phone-shadow" src={Shadow} alt="" />
        <img className="phone-background" src={BackgroundPhone} alt="iPhone showing a line graph of the users spendings." />
        <img className="phone-foreground" src={ForegroundPhone} alt="iPhone showing saved cards and its recent transactions." />
    </div>
  )
}

export default HeroImageContainer