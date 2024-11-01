import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigataionLink = ({ link }) => {
  return (
    <NavLink className="fs-13" to={link.to}>{link.name}</NavLink>
  )
}

export default NavigataionLink