import React from 'react'

const ImageContainer = ({ imageUrl, altText = "", className = "" }) => {
  return (
    <div className={`${className}`}>
        <img src={imageUrl} alt={altText} />
    </div>
  )
}

export default ImageContainer