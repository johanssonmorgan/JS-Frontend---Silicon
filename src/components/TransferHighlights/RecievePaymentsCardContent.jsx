import React from 'react'

const RecievePaymentsCardContent = ({ data }) => {
  return (
    <div className={data.className}>
        <img src={data.imageUrl} alt={data.altText} />
        <p className="fs-9">{data.text}</p>
    </div>
  )
}

export default RecievePaymentsCardContent