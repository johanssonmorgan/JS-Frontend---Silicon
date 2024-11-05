import React from 'react'
import QuotationMarkIcon from '/src/assets/quotation-mark.svg'
import Star from '/src/assets/star.svg'
import StarOutline from '/src/assets/star-outline.svg'


const ReviewCard = ({ testimonial }) => {

  return (
    <div className="review-container">
        <div id="quotation" className="quotation-mark dropshadow">
            <img className="quotation-icon" src={QuotationMarkIcon} alt="Quotation mark" />
        </div>
        <div id="review-card" className="review-card bg-white dropshadow">
            <div className="rating">
                {[...Array(5)].map((_, index) => (
                    <img key={index} src={index < testimonial.starRating ? Star : StarOutline} alt={index < testimonial.starRating ? 'Star' : 'Star Outline'} />
                ))}
            </div>
            <div className="review-text">
                <p className="fs-15">{testimonial.comment}</p>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img className="reviewer-avatar" src={testimonial.avatarUrl} alt={`${testimonial.author} avatar`} />
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