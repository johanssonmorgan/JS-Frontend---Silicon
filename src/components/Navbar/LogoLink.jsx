import React from 'react'
import SiliconLogo from '/src/assets/Silicon-logotype.svg'

const LogoLink = () => {
  return (
    <div className="nav-silicon-logo">
        <a href="index.html"><img className="silicon-icon" src={SiliconLogo} /></a>
    </div>
  )
}

export default LogoLink