import React from 'react'
import { Link } from 'react-router-dom'

const BtnPrimary = ({ to="/", imageBefore, imageAfter, altText="", text, srText }) => {
  return (
    <Link to={to} className="btn-primary" role="button">
        {srText && <span className="sr-only">{srText}</span>}
        {imageBefore && <img className="primary-button-icon" src={imageBefore} alt={altText} />}
        <span className="fs-5">{text}</span>
        {imageAfter && <img className="primary-button-icon" src={imageAfter} alt={altText} />}
    </Link>
  )
}

export default BtnPrimary 