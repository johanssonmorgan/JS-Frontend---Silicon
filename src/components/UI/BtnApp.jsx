import React from 'react'

const BtnApp = ({ link }) => {
  return (
    <a className="btn-app" href={link.linkUrl} target='_blank' rel="noopener noreferrer">
        <span className="sr-only">{link.srText}</span>
        <img className={link.imageClassName} src={link.imageUrl} alt={link.altText} />
    </a>
  )
}

export default BtnApp