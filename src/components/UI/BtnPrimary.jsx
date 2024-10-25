import React from 'react'

const BtnPrimary = ({ to="#", imageBefore, imageAfter, altText="", text, srText }) => {
  return (
    <a className="btn-primary" href={to} role="button">
        {srText && <span className="sr-only">{srText}</span>}
        {imageBefore && <img className="primary-button-icon" src={imageBefore} alt={altText} />}
        <span className="fs-5">{text}</span>
        {imageAfter && <img className="primary-button-icon" src={imageAfter} alt={altText} />}
    </a>
  )
}

export default BtnPrimary