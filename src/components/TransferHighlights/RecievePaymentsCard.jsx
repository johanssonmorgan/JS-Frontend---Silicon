import React from 'react'
import BtnPrimary from '../UI/BtnPrimary'
import RecievePaymentsCardContent from './RecievePaymentsCardContent'

export const RecievePaymentsCard = () => {
  return (
    <div className="section-4-bottom-right-card">
        <h2 className="h3 section-4-bottom-right-header">Receive payment from international bank details</h2>
        <RecievePaymentsCardContent image={"src/assets/easy-payments-icon.svg"} altText='Credit card icon.' paragraphText={"Manage your payments online. Mollis congue egestas egestas fermentum fames."} DivClassName='section-4-bottom-right-text-left' />
        <RecievePaymentsCardContent image={"src/assets/regular-cashback-icon.svg"} altText='"Wallet with cash icon."' paragraphText={"A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris."} DivClassName='section-4-bottom-right-text-right' />
        <div className="d-flex section-4-bottom-right-button">
            <BtnPrimary text={"Learn more"} imageAfter={"src/assets/learn-more-icon.svg"} altText='arrow symbol' srText={"Learn more about recieving money from international banks."} />
        </div>
    </div>
  )
}
