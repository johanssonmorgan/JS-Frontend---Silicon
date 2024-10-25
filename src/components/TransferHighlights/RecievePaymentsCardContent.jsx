import React from 'react'

const RecievePaymentsCardContent = ({ image, altText = "", paragraphText, DivClassName = "" }) => {
  return (
    <div className={DivClassName}>
        <img src={image} alt={altText} />
        <p className="fs-9">{paragraphText}</p>
    </div>
  )
}

export default RecievePaymentsCardContent