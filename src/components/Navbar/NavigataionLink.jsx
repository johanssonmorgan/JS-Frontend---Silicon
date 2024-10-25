import React from 'react'

const NavigataionLink = ({ to, linkName }) => {
  return (
    <a className="fs-13" href={to}>{linkName}</a>
  )
}

export default NavigataionLink