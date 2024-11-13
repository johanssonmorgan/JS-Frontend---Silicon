import React, { useState } from 'react'
import NewsletterBell from '/src/assets/newsletter.svg'
import EnvelopeIcon from '/src/assets/newsletter-icon.svg'

const NewsletterForm = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateField = (name, value) => {
    let error = ''    

  if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value.trim())) {
    error = "Invalid email format. Please enter an email like name@example.com."
  }
  
  setErrors(prevErrors => ({...prevErrors, [name]: error}))
};

  const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format. Please enter an email like name@example.com."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
};

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value})

    validateField(name, value)
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)

      })

      if(res.ok) {
        setFormData({ email: '' });
        setErrors({});
        setSuccess("You're in! Exciting news and updates are headed your way.");
      } else {
      const errorData = await res.json();
      setSuccess(''); 
      }
      console.log(res.status);
    }

    catch (error) {
      setErrors({ email: 'Subscription failed on our end. Please try again in a few moments.' });
      setSuccess('');
    }
  };

  return (
    <div className="newsletter">
        <div id='newsletter-text' className="newsletter-text">
            <img className="newsletter-bell-icon" src={NewsletterBell} alt="Newsletter bell" />
            <h2 className="h4 newsletter-header">Subscribe to our newsletter</h2>
            <h2 className="h4 newsletter-header-desktop">Subscribe to our newsletter to stay informed about latest updates</h2>
        </div>
        <form id='newsletter-form' onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <div className="form">
                <img className="newsletter-icon" src={EnvelopeIcon} alt="Envelope icon" />
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email"  type="email" className="form-input" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" placeholder="Your Email" required />
                <button className="btn-submit">Subscribe</button>
              </div>
            </div>
        </form>
        <p id='newsletter-message' className={errors.email ? 'invalid-input' : 'success-message'}>
          {errors.email || success}
        </p>
    </div>
  )
}

export default NewsletterForm