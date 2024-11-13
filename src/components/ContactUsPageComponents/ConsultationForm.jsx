import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ConsultationForm = () => {

  const [specialists, setSpecialists] = useState([ {id: uuidv4(),name: "Hans Mattin-Lassei"}, {id: uuidv4(),name: "Joakim Lindh"}, {id: uuidv4(),name: "Therése Lidbom"}, {id: uuidv4(),name: "Morgan Johansson - Developer Student"} ]);
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');


  const validateField = (name, value) => {
    let error = ''

    if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value.trim())) {
      error = "Name format error. Ensure it has only letters, spaces, or hyphens."
    }
    else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value.trim())) {
      error = "Invalid email format. Please enter an email like name@example.com."
      }

      setErrors(prevErrors => ({...prevErrors, [name]: error}))
  };

  const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name format error. Ensure it has only letters, spaces, or hyphens."
      }

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format. Please enter an email like name@example.com."
      }

    if (formData.specialist.trim() === '') {
      newErrors.specialist = "Please select a specialist to proceed with the appointment."
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value})

    validateField(name, value)
    setSuccess('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)

      })

      if(res.ok) {
        setFormData({ fullName: '', email: '', specialist: '' });
        setErrors({});
        setSuccess("Thank you! Your appointment is confirmed. We’ll be in touch shortly."
);
      } else {
      const errorData = await res.json();
      setSuccess(''); 
      }
      console.log(res.status);
    }

    catch (error) {
      setErrors({ server: "Something went wrong on our end. Please try submitting your request again later." });
      setSuccess('');
    }
  };

  return (
    <div className='consultation-card dropshadow'>
      <header>
        <h2 className="h3">Get Online Consultation</h2>
      </header>

      <form className='form-consultation' onSubmit={handleSubmit} noValidate>

        <div className='form-group'>
          <label htmlFor="consultation-name" className='fs-11'>Full Name</label>
          <div className="message-group">
            <input type="text" id="consultation-name" className='form-input' name="fullName" value={formData.fullName} onChange={handleInputChange} autoComplete="name" required />
            {errors.fullName && <p className="invalid-input">{errors.fullName}</p>}
          </div>
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-email" className='fs-11'>Email address</label>
            <div className="message-group">
              <input type="email" id="consultation-email" className='form-input' name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" required />
              {errors.email && <p className="invalid-input">{errors.email}</p>}
            </div>
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-specialist" className='fs-11'>Specialist</label>
            <div className="message-group">
              <select id="consultation-specialist" name="specialist" className='form-input' value={formData.specialist} onChange={handleInputChange} autoComplete="specialist" required>
                
                <option defaultValue="" disabled></option>

                {specialists.map(specialist => (
                  <option key={specialist.id} value={specialist.name}>{specialist.name}</option>
                ))}

              </select>
              {errors.specialist && <p className="invalid-input">{errors.specialist}</p>}
            </div>
        </div>
        <div className='message-group'>
          <button type='submit' className="btn-primary dropshadow">Make an appointment</button>
          <p id='newsletter-message' className={errors.server ? 'invalid-input' : 'success-message'}>
          {errors.server || success}
        </p>
        </div>
      </form>
    </div>
  )
}

export default ConsultationForm