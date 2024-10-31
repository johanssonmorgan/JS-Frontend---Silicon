import React from 'react'

const FeaturesCardContent = ({ data }) => {
  return (
    <div className={`features-card-content ${data.className}`}>
        <div className="s2-content-icon">
            <img src={data.imageUrl} alt={data.altText} />
        </div>
        <h3 className="h5 s2-content-header">{data.header}</h3 >
        <p className="fs-10 s2-content-text">{data.text}</p>
    </div>
  )
}

export default FeaturesCardContent