import React from 'react'
import ContactUsHeader from './ContactUsHeader'
import ContactCard from './ContactCard'
import ConsultationForm from './ConsultationForm'

const ContactUsSection = () => {
  return (
    <div className='background-section'>
        <div className='top-part'></div>
        <div className='bottom-part bg-white'></div>
        <div className='container contact-consulation-layout'>
            <ContactUsHeader />
            <ContactCard />
            <ConsultationForm />
        </div>
    </div>
  )
}

export default ContactUsSection