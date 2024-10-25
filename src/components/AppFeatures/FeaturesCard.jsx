import React from 'react'
import FeaturesCardHeader from './FeaturesCardHeader'
import FeaturesCardContent from './FeaturesCardContent'

const FeaturesCard = () => {
  return (
    <div className="features-card">
        <FeaturesCardHeader />
        <FeaturesCardContent headerText={"Easy Payments"} paragraphText={"Id mollis consectetur congue egestas egestas suspendisse blandit justo."} image={"src/assets/easy-payments-icon.svg"} altText={"Credit Card icon"} specificClassName='features-card-content-1' />
        <FeaturesCardContent headerText={"Data Security"} paragraphText={"Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."} image={"src/assets/data-security-icon.svg"} altText={"Shield icon"} specificClassName='features-card-content-2' />
        <FeaturesCardContent headerText={"Cost Statistics"} paragraphText={"Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."} image={"src/assets/cost-statistics-icon.svg"} altText={"Stack Chart icon"} specificClassName='features-card-content-3' />
        <FeaturesCardContent headerText={"Support 24/7"} paragraphText={"A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."} image={"src/assets/support-icon.svg"} altText={"Speech Bubbles icon"} specificClassName='features-card-content-4' />
        <FeaturesCardContent headerText={"Regular Cashback"} paragraphText={"Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."} image={"src/assets/regular-cashback-icon.svg"} altText={"Wallet with Cash icon"} specificClassName='features-card-content-5' />
        <FeaturesCardContent headerText={"Top Standards"} paragraphText={"Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."} image={"src/assets/top-standards-icon.svg"} altText={"Happy Face icon"} specificClassName='features-card-content-6' />
    </div>
  )
}

export default FeaturesCard