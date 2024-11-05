import React, { useState } from 'react'
import ShowMoreIcon from '/src/assets/show-more-icon.svg'

const FAQCard = ({ data, isOpen, toggleOpen }) => {


  return (
    <div className={`faq-3-opened br-05 border-faq ${isOpen ? 'open' : ''}`}>
    <div className="faq-open">
        <div onClick={toggleOpen} className="faq">
            <p className="fs-11 w-90">{data.title}</p>
            <button className="btn-open dropshadow">
                <span className="sr-only">{isOpen ? 'Minimize the answer.' : 'Show the answer.'}</span>
                <img className="show-more-icon" src={ShowMoreIcon} alt="Show more" />
            </button>
        </div>
        <div className="faq-answer">
            <div className="expandable">
                <p className="fs-2">{data.content}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default FAQCard