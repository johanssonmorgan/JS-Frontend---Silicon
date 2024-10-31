import React from 'react'

const SocialMediaIcon = ({ link }) => {
  return (
        <a href={link.linkUrl} target='_blank' rel="noopener noreferrer" className='social-media-box'>
            <img src={link.imageUrl} alt={link.altText} />
        </a>
  )
}

export default SocialMediaIcon