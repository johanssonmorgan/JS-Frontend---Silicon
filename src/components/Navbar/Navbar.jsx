import React from 'react'
import LogoLink from './LogoLink'
import LinkList from './LinkList'
import DarkModeToggle from '../UI/DarkModeToggle'
import BtnHamburger from '../UI/BtnHamburger'

const Navbar = () => {
  return (
    <nav className="navbar container" aria-label="Main navigation">
        <LogoLink />
          <BtnHamburger />
          <LinkList />
          <DarkModeToggle />
    </nav>
  )
}

export default Navbar