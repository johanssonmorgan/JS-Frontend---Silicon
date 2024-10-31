import React from 'react'
import ListCard from './ListCard'
import ImageContainer from '../UI/ImageContainer'
import { RecievePaymentsCard } from './RecievePaymentsCard'
import LineGraphShowcase from '/src/assets/line-graph-showcase.svg'
import ContactsShowcase from '/src/assets/contacts-showcase.svg'

const TransferHighlightsSection = () => {
  return (
    <section className="section-4 container" id="section-4">
        <ListCard />
        <ImageContainer imageUrl={LineGraphShowcase} altText='Line graph showing the users spendings.' className='section-4-top-right-card' />
        <ImageContainer imageUrl={ContactsShowcase} altText='Contacts screen, showing recent transactions to contacts.' className='section-4-bottom-left-card' />
        <RecievePaymentsCard />
    </section>
  )
}

export default TransferHighlightsSection