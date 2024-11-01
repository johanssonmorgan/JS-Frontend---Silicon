import React from 'react'
import ContactUsSection from '../components/ContactUsPageComponents/ContactUsSection'
import MapAddressSection from '../components/ContactUsPageComponents/MapAddressSection'
import Breadcrumb from '../components/UI/Breadcrumb'

const Contact = () => {
  return (
    <>
        <Breadcrumb />
        <ContactUsSection />
        <MapAddressSection />
    </>
  )
}

export default Contact