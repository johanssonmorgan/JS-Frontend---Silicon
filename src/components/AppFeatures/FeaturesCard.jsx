import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import FeaturesCardHeader from './FeaturesCardHeader'
import FeaturesCardContent from './FeaturesCardContent'
import EasyPaymentsIcon from '/src/assets/easy-payments-icon.svg'
import DataSequrityIcon from '/src/assets/data-security-icon.svg'
import CostStatisticsIcon from '/src/assets/cost-statistics-icon.svg'
import SupportIcon from '/src/assets/support-icon.svg'
import RegularCashbackIcon from '/src/assets/regular-cashback-icon.svg'
import TopStandardsIcon from '/src/assets/top-standards-icon.svg'

const FeaturesCard = () => {

  const [content, setContent] = useState([
    {
      id: uuidv4(),
      header: "Easy Payments",
      text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
      imageUrl: EasyPaymentsIcon,
      altText: "Credit Card icon",
      className: "features-card-content-1"
    },
    {
      id: uuidv4(),
      header: "Data Security",
      text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.",
      imageUrl: DataSequrityIcon,
      altText: "Shield icon",
      className: "features-card-content-2"
    },
    {
      id: uuidv4(),
      header: "Cost Statistics",
      text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
      imageUrl: CostStatisticsIcon,
      altText: "Stack Chart icon",
      className: "features-card-content-3"
    },
    {
      id: uuidv4(),
      header: "Support 24/7",
      text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
      imageUrl: SupportIcon,
      altText: "Speech Bubbles icon",
      className: "features-card-content-4"
    },
    {
      id: uuidv4(),
      header: "Regular Cashback",
      text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
      imageUrl: RegularCashbackIcon,
      altText: "Wallet with Cash icon",
      className: "features-card-content-5"
    },
    {
      id: uuidv4(),
      header: "Top Standards",
      text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
      imageUrl: TopStandardsIcon,
      altText: "Happy Face icon",
      className: "features-card-content-6"
    },
  ])

  return (
    <div className="features-card">
        <FeaturesCardHeader />
        {content.map(data => (
          <FeaturesCardContent key={data.id} data={data} />
        ))}
    </div>
  )
}

export default FeaturesCard