import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BtnApp from '../UI/BtnApp';
import BtnDiscover from '../UI/BtnDiscover';
import HeroDescription from './HeroDescription';
import AppStore from '/src/assets/appstore.svg';
import GooglePlay from '/src/assets/googleplay.svg';

const HeroContent = () => {

  const [storeFronts, setStoreFronts] = useState([
    {
      id: uuidv4(),
      imageUrl: AppStore,
      altText: "App Store",
      imageClassName: "appstore-icon",
      linkUrl: "https://www.apple.com/app-store/",
      srText: "Download on the App Store"
    },
    {
      id: uuidv4(),
      imageUrl: GooglePlay,
      altText: "Google Play Store",
      imageClassName: "googleplay-icon",
      linkUrl: "https://play.google.com/store/",
      srText: "Get it on Google Play"
    }
  ]);

  return (
    <div className="s1-content">
        <HeroDescription />
        <div className="app-buttons">
          {storeFronts.map(link => (
            <BtnApp key={link.id} link={link} />
          ))}
        </div>
        <BtnDiscover />
    </div>
  );
};

export default HeroContent