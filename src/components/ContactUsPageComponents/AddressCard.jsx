import React from 'react'
import mapMarkerIcon from '/src/assets/map-marker-icon.svg'
import phoneIcon from '/src/assets/phone-icon.svg'
import timeIcon from '/src/assets/time-icon.svg'

const AddressCard = ({ address }) => {
  return (
    <div className='address-card'>
        <h2 className='h4'>{address.header}</h2>
        <ul>
            <li><img src={mapMarkerIcon} alt="Location icon"/><div className='fs-20'>{address.address}</div></li>
            <li><img src={phoneIcon} alt="Phone icon"/><div className='fs-20'>{address.phone}</div></li>
            <li>
                <img src={timeIcon} alt="Opening times icon"/>
                <div>
                    <span className='fs-19'>Mon – Fri:</span> <span className='fs-20'>9:00 am – {address.closingWeek} am</span><br />
                    <span className='fs-19'>Sat – Sun:</span> <span className='fs-20'>9:00 am – {address.closingWeekend} am</span>
                </div>  
            </li>
        </ul>
    </div>
  )
}

export default AddressCard