import React from 'react'
import FAQHeader from './FAQHeader'
import FAQAccordion from './FAQAccordion'
import ContactCard from './ContactCard'
import NewsletterForm from './NewsletterForm'

const FAQContactSection = () => {
  return (
    <section className="section-6 container">
        <FAQHeader />
        <FAQAccordion />
        <ContactCard />
        <NewsletterForm />
    </section>
  )
}

export default FAQContactSection