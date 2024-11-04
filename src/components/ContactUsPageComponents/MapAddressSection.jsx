import React, { useState } from 'react'
import ImageContainer from '../UI/ImageContainer'
import { v4 as uuidv4 } from 'uuid';
import map from '/src/assets/map.svg';
import AddressCard from './AddressCard';
import Facebook from '/src/assets/facebook-icon.svg'
import Twitter from '/src/assets/twitter-icon.svg'
import Instagram from '/src/assets/instagram-icon.svg'
import Youtube from '/src/assets/youtube-icon.svg'
import SocialMediaIcon from './SocialMediaIcon';

const MapAddressSection = () => {


  const [locations, setLocations] = useState([
    {
      id: uuidv4(),
      header: "Medical Center 1",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(406) 555-0120",
      closingWeek: "22:00",
      closingWeekend: "20:00"
    },
    {
      id: uuidv4(),
      header: "Medical Center 2",
      address: "2464 Royal Ln. Mesa,New Jersey 45463",
      phone: "(406) 544-0123",
      closingWeek: "22:00",
      closingWeekend: "20:00"
    }
  ])

  const [socialMediaLinks, setSocialMediaLinks] = useState([
    {
        id: uuidv4(),
        imageUrl: Facebook,
        altText: "Facebook logo",
        linkUrl: "https://www.facebook.com/"
    },
    {
        id: uuidv4(),
        imageUrl: Twitter,
        altText: "Twitter logo",
        linkUrl: "https://www.x.com/"
    },
    {
        id: uuidv4(),
        imageUrl: Instagram,
        altText: "Instagram logo",
        linkUrl: "https://www.instagram.com/"
    },
    {
        id: uuidv4(),
        imageUrl: Youtube,
        altText: "Youtube logo",
        linkUrl: "https://www.youtube.com/"
    },
])


  return (
    <div className='bg-standard'>
        <div className='container map-address-layout'>
          <div>
            <ImageContainer className='map-container' imageUrl={map} altText='Map displaying location for medical centers.' />
          </div>
          <div className='card-container'>

            {locations.map(address => (
              <AddressCard key={address.id} address={address} />
            ))}

            <div className='social-media-links'>
              {socialMediaLinks.map(link => (
                <SocialMediaIcon key={link.id} link={link} />
              ))}
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default MapAddressSection