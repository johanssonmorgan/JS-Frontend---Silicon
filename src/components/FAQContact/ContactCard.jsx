import React from 'react'
import BtnPrimary from '../UI/BtnPrimary'

const ContactCard = () => {
  return (
    <div className="p6-contact">
        <div className="contact-phone br-05 border-contact">
            <div className="mb-1">
                <img className="contact-phone-icon" src="src/assets/contact-phone-icon.svg" alt="Call us icon" />
            </div>
            <p className="fs-3 mb-05 d-inline-block mb-1">Still have questions?</p>
            <a className="btn-contact gap-05" href="#">
                <p className="fs-6 contact-us">Contact us</p>
                <img src="src/assets/contact-phone-arrow.svg" alt="arrow symbol" />
            </a>
        </div>
        <div className="contact-text br-05 border-contact">
            <div className="mb-1">
                <img className="contact-text-icon" src="src/assets/contact-text-icon.svg" alt="Text us icon" />
            </div>
            <p className="fs-3 mb-05 d-inline-block mb-1">Don't like phone calls?</p>
            <a className="btn-contact gap-05" href="#">
                <p className="fs-7 contact-us">Contact us</p>
                <img src="src/assets/contact-text-arrow.svg" alt="arrow symbol" />
            </a>
        </div>
        <div className="contact-mobile">
            <BtnPrimary text={"Contact us now"} />
        </div>
    </div>
  )
}

export default ContactCard