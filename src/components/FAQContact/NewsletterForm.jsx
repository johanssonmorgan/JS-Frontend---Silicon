import React from 'react'
import NewsletterBell from '/src/assets/newsletter.svg'
import EnvelopeIcon from '/src/assets/newsletter-icon.svg'

const NewsletterForm = () => {
  return (
    <div className="newsletter">
        <div className="newsletter-text">
            <img className="newsletter-bell-icon" src={NewsletterBell} alt="Newsletter bell" />
            <h2 className="h4 newsletter-header">Subscribe to our newsletter</h2>
            <h2 className="h4 newsletter-header-desktop">Subscribe to our newsletter to stay informed about latest updates</h2>
        </div>
        <form>
            <div className="form">
                <img className="newsletter-icon" src={EnvelopeIcon} alt="Envelope icon" />
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" className="form-input" id="email" name="email" autoComplete="email" placeholder="Your Email" required />
                <button className="btn-submit">Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default NewsletterForm