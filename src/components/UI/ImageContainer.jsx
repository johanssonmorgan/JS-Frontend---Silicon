import React from 'react'

const ImageContainer = ({ image, altText = "", optionalClassName = "" }) => {
  return (
    <div className={`${optionalClassName}`}>
        <img src={image} alt={altText} />
    </div>
  )
}

export default ImageContainer