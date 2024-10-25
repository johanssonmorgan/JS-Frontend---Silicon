import React from 'react'

const FeaturesCardContent = ({ headerText, paragraphText, image, altText, specificClassName = "" }) => {
  return (
    <div className={`features-card-content ${specificClassName}`}>
        <div className="s2-content-icon">
            <img src={image} alt={altText} />
        </div>
        <h3 className="h5 s2-content-header">{headerText}</h3 >
        <p className="fs-10 s2-content-text">{paragraphText}</p>
    </div>
  )
}

export default FeaturesCardContent