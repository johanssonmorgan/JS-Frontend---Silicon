import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactCardContent from './ContactCardContent'
import EnvelopeIcon from '/src/assets/bx-envelope.svg'
import MedicalIcon from '/src/assets/add-group.svg'
import ButtonArrow from '/src/assets/contact-phone-arrow.svg'

const ContactCard = () => {

    const [cardContent, setCardContent] = useState([
        {
            id: uuidv4(),
            iconImageUrl: EnvelopeIcon,
            iconAltText: "Enveolpe icon",
            header: "Email us",
            text: "Please feel free to drop us a line. We will respond as soon as possible.",
            to: "#",
            buttonText: "Leave a message",
            buttonTextClass: "",
            buttonImageUrl: ButtonArrow
        },
        {
            id: uuidv4(),
            iconImageUrl: MedicalIcon,
            iconAltText: "Medical icon",
            header: "Careers",
            text: "Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.",
            to: "#",
            buttonText: "Send an application",
            buttonTextClass: "",
            buttonImageUrl: ButtonArrow
        }
    ])

  return (
    <div className='contacts-page-contact'>
      {cardContent.map(content => (
          <ContactCardContent key={content.id} content={content} />
          ))
        }
    </div>
  )
}

export default ContactCard