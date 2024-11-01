import React from 'react'
import SiliconLogo from '/src/assets/Silicon-logotype.svg'
import { Link } from 'react-router-dom'

const LogoLink = () => {
  return (
    <div className="nav-silicon-logo">
        <Link to="/"><img className="silicon-icon" src={SiliconLogo} /></Link>
    </div>
  )
}

export default LogoLink