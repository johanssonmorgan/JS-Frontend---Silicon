import React from 'react'
import NextBtn from '/src/assets/next-btn.svg'

const BtnDiscover = () => {
  return (
    <div className="discover-more">
        <a className="btn-discover" href="#features">
            <img className="next-icon" src={NextBtn} alt="chevron" />
        </a>
        <span className="fs-4">Discover more</span>
    </div>
  )
}

export default BtnDiscover