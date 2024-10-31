import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import BtnPrimary from '../UI/BtnPrimary'
import RecievePaymentsCardContent from './RecievePaymentsCardContent'
import EasyPaymentsIcon from '/src/assets/easy-payments-icon.svg'
import RegularCashbackIcon from '/src/assets/regular-cashback-icon.svg'
import LearnMoreIcon from '/src/assets/learn-more-icon.svg'

export const RecievePaymentsCard = () => {

  const [cardContent, setCardContent] = useState([
    {
      id: uuidv4(),
      imageUrl: EasyPaymentsIcon,
      altText: "Credit card icon.",
      text: "Manage your payments online. Mollis congue egestas egestas fermentum fames.",
      className: "section-4-bottom-right-text-left"
    },
    {
      id: uuidv4(),
      imageUrl: RegularCashbackIcon,
      altText: "Wallet with cash icon.",
      text: "A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.",
      className: "section-4-bottom-right-text-right"
    },
  ])

  return (
    <div className="section-4-bottom-right-card">
        <h2 className="h3 section-4-bottom-right-header">Receive payment from international bank details</h2>
        {cardContent.map(data => (
            <RecievePaymentsCardContent key={data.id} data={data} />
          ))}
        <div className="d-flex section-4-bottom-right-button">
            <BtnPrimary text={"Learn more"} imageAfter={LearnMoreIcon} altText='arrow symbol' srText={"Learn more about recieving money from international banks."} />
        </div>
    </div>
  )
}
