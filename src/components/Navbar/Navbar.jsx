import React, { useState } from 'react'
import LogoLink from './LogoLink'
import LinkList from './LinkList'
import DarkModeToggle from '../UI/DarkModeToggle'
import Burger from '/src/assets/mobile-menu-button.svg'

const Navbar = () => {

  const [expandMenu, setExpandMenu] = useState(true);

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  }

  return (
    <nav className={`navbar container ${expandMenu ? 'expanded dropshadow-navbar' : ''}`} aria-label="Main navigation">
        <LogoLink />
        <button onClick={toggleMenu} className="btn-burger nav-menu-button">
          <img className="mobile-icon" src={Burger} alt="Mobile menu" />
        </button>
        <LinkList addClass={`${expandMenu ? 'show dropshadow-navbar' : ''}`} />
        <DarkModeToggle />
    </nav>
  )
}

export default Navbar