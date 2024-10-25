import React from 'react'
import ListCard from './ListCard'
import ImageContainer from '../UI/ImageContainer'
import { RecievePaymentsCard } from './RecievePaymentsCard'

const TransferHighlightsSection = () => {
  return (
    <section className="section-4 container" id="section-4">
        <ListCard />
        <ImageContainer image={"src/assets/line-graph-showcase.svg"} altText='Line graph showing the users spendings.' optionalClassName='section-4-top-right-card' />
        <ImageContainer image={"src/assets/contacts-showcase.svg"} altText='Contacts screen, showing recent transactions to contacts.' optionalClassName='section-4-bottom-left-card' />
        <RecievePaymentsCard />
    </section>
  )
}

export default TransferHighlightsSection