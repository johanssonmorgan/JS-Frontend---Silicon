import React from 'react'
import NavigataionLink from './NavigataionLink'
import BtnPrimary from '../UI/BtnPrimary'
import SignInIcon from '/src/assets/sign-in-icon.svg'

const LinkList = () => {
  return (
    <ul className="nav-links" aria-label="Navbar links">
        <li className="features">
        <NavigataionLink to={"#features"} linkName={"Features"} />
        </li>
        <li className="contact">
        <NavigataionLink to={"contact.html"} linkName={"Contact"} />
        </li>
        <li className="sign-in">
        <BtnPrimary imageBefore={SignInIcon} altText={"user icon"} text={"Sign in / up"} />
        </li>
    </ul>
  )
}

export default LinkList