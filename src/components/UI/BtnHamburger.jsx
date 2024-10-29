import React from 'react'
import Burger from '/src/assets/mobile-menu-button.svg'

const BtnHamburger = () => {
  return (
    <div className="nav-menu-button">
        <button className="btn-burger">
            <img className="mobile-icon" src={Burger} alt="Mobile menu" />
        </button>
    </div>
  )
}

export default BtnHamburger