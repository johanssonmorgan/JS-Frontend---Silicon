import React from 'react'

const ContactBox = ({ data }) => {
  return (
    <div className="contact-phone br-05 border-contact">
        <div className="mb-1">
            <img className={data.imageClass} src={data.imageUrl} alt={data.altText} />
        </div>
        <p className="fs-3 mb-05 d-inline-block mb-1">{data.text}</p>
        <a className="btn-contact gap-05" href={data.linkUrl}>
            <p className={data.buttonTextClass}>{data.buttonText}</p>
            <img src={data.buttonImageUrl} alt="arrow symbol" />
        </a>
    </div>
  )
}

export default ContactBox