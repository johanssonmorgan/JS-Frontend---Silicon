import React from 'react'

const BtnApp = ({ to="#", image, altText="", srText, imageClassName }) => {
  return (
    <a className="btn-app" href={to}>
        <span className="sr-only">{srText}</span>
        <img className={imageClassName} src={image} alt={altText} />
    </a>
  )
}

export default BtnApp