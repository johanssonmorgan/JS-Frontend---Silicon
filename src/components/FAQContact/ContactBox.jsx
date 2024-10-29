import React from 'react'

const ContactBox = ({ image, altText="", imageClassName, text, to="#", buttonText, buttonTextClass, buttonImage }) => {
  return (
    <div className="contact-phone br-05 border-contact">
        <div className="mb-1">
            <img className={imageClassName} src={image} alt={altText} />
        </div>
        <p className="fs-3 mb-05 d-inline-block mb-1">{text}</p>
        <a className="btn-contact gap-05" href={to}>
            <p className={buttonTextClass}>{buttonText}</p>
            <img src={buttonImage} alt="arrow symbol" />
        </a>
    </div>
  )
}

export default ContactBox