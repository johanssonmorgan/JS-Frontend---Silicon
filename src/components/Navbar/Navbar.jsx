import React from 'react'
import LogoLink from './LogoLink'
import LinkList from './LinkList'
import DarkModeToggle from '../UI/DarkModeToggle'
import Burger from '/src/assets/mobile-menu-button.svg'
import { useNavbarStatus } from '/src/contexts/NavbarStatusProvider'

const Navbar = () => {

  const { expandMenu, toggleMenu } = useNavbarStatus();

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