import React from 'react'

const ContactCardContent = ({ content }) => {
  return (
    <div className='contact-card'>
      <div className='round-icon'>
          <img src={content.iconImageUrl} alt={content.iconAltText} />
      </div>
      <div className='contact-card-content'>
        <h2 className='h4'>{content.header}</h2>
        <p className='fs-9 w-65'>{content.text}</p>
        <a className="btn-contact gap-05" href={content.to}>
          <p className='fs-6 contact-us'>{content.buttonText}</p>
          <img src={content.buttonImageUrl} alt="arrow symbol" />
        </a>
      </div>
    </div>
  )
}

export default ContactCardContent