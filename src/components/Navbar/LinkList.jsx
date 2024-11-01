import React, { useState } from 'react';
import NavigataionLink from './NavigataionLink';
import BtnPrimary from '../UI/BtnPrimary';
import SignInIcon from '/src/assets/sign-in-icon.svg';
import { v4 as uuidv4 } from 'uuid';

const LinkList = () => {

  const [navLinks, setNavLinks] = useState([
    {
      id: uuidv4(),
      name: "Features",
      to: "/features"
    },
    {
      id: uuidv4(),
      name: "Contact",
      to: "/contact"
    }
  ]);

  return (
    <ul className="nav-links" aria-label="Navbar links">
      {navLinks.map(link => (
        <NavigataionLink key={link.id} link={link} />
      ))}
      <li className="sign-in">
        <BtnPrimary imageBefore={SignInIcon} altText={"user icon"} text={"Sign in / up"} />
      </li>
  </ul>
  )
}

export default LinkList