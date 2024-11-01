import React from 'react'
import LogoLink from './LogoLink'
import LinkList from './LinkList'
import DarkModeToggle from '../UI/DarkModeToggle'
import BtnHamburger from '../UI/BtnHamburger'

const Navbar = () => {
  return (
    <nav className="navbar container" aria-label="Main navigation">
        <LogoLink />
        <LinkList />
        <DarkModeToggle />
        {/* <BtnHamburger /> */}
    </nav>
  )
}

export default Navbar