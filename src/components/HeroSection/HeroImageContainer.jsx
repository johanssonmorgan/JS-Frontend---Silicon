import React from 'react'

const HeroImageContainer = () => {
  return (
    <div className="s1-images">
        <img className="phone-shadow" src="src/assets/hero-phone-shadow.svg" alt="" />
        <img className="phone-background" src="src/assets/hero-phone-background.png" alt="iPhone showing a line graph of the users spendings." />
        <img className="phone-foreground" src="src/assets/hero-phone-foreground.png" alt="iPhone showing saved cards and its recent transactions." />
    </div>
  )
}

export default HeroImageContainer