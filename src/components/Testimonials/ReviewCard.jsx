import React from 'react'
import QuotationMarkIcon from '/src/assets/quotation-mark.svg'
import FourStars from '/src/assets/4-stars.svg'

const ReviewCard = ({ testimonial }) => {
  return (
    <div className="review-container">
        <div id="quotation-left" className="quotation-mark dropshadow">
            <img className="quotation-icon" src={QuotationMarkIcon} alt="Quotation mark" />
        </div>
        <div id="card-left" className="review-card bg-white dropshadow">
            <div className="rating">
                <img className="stars-rating" src={FourStars} alt="4 out of 5 stars rating" />
            </div>
            <div className="review-text">
                <p className="fs-15">{testimonial.comment}</p>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img className="reviewer-avatar" src={testimonial.avatarUrl} alt="Fannie Summers avatar" />
                </div>
                <div className="user-name">
                    <p className="fs-14">{testimonial.author}</p>
                </div>
                <div className="user-title">
                    <p className="fs-1">{testimonial.jobRole}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard