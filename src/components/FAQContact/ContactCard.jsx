import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import BtnPrimary from '../UI/BtnPrimary'
import ContactPhoneIcon from '/src/assets/contact-phone-icon.svg'
import ContactPhoneArrow from '/src/assets/contact-phone-arrow.svg'
import ContactTextIcon from '/src/assets/contact-text-icon.svg'
import ContactTextArrow from '/src/assets/contact-text-arrow.svg'
import ContactBox from './ContactBox';

const ContactCard = () => {

    const [contactCard, setContactCard] = useState([
        {
            id: uuidv4(),
            text: "Still have questions?",
            imageUrl: ContactPhoneIcon,
            imageClass: "contact-phone-icon",
            altText: "Call us icon",
            linkUrl: "/contact",
            buttonText: "Contact us",
            buttonTextClass: "fs-6 contact-us",
            buttonImageUrl: ContactPhoneArrow
        },
        {
            id: uuidv4(),
            text: "Don't like phone calls?",
            imageUrl: ContactTextIcon,
            imageClass: "contact-text-icon",
            altText: "Text us icon",
            linkUrl: "/contact",
            buttonText: "Contact us",
            buttonTextClass: "fs-7 contact-us",
            buttonImageUrl: ContactTextArrow
        },
    ])

  return (
    <div className="p6-contact">

        {contactCard.map(data => (
            <ContactBox key={data.id} data={data} />
        ))}
        
        <div className="contact-mobile">
            <BtnPrimary to='/contact' text={"Contact us now"} />
        </div>
    </div>
  )
}

export default ContactCard