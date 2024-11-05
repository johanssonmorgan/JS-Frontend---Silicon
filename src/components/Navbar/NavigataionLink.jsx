import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigataionLink = ({ link }) => {
  return (
    <li><NavLink className={`fs-13 ${link.name.toLowerCase()}`} to={link.to}>{link.name}</NavLink></li>
  )
}

export default NavigataionLink