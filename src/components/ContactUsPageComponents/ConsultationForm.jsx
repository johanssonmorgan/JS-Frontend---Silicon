import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ConsultationForm = () => {

  const [specialists, setSpecialists] = useState([ {id: uuidv4(),name: "Specialist 1"}, {id: uuidv4(),name: "Specialist 2"}, {id: uuidv4(),name: "Specialist 3"}, {id: uuidv4(),name: "Specialist 4"} ]);
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
  const [errors, setErrors] = useState({});


  const validateField = (name, value) => {
    let error = ''

    if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value.trim())) {
      error = "Must be at least 2 characters long, no numbers."
    }
    else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value.trim())) {
      error = "Must be a valid email address."
      }

      setErrors(prevErrors => ({...prevErrors, [name]: error}))
  };

  const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Must be at least 2 characters long, no numbers."
      }

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Must be a valid email address."
      }

    if (formData.specialist.trim() === '') {
      newErrors.specialist = "You must chose a specialist"
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value})

    validateField(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('form valid')
      // fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
    }
    else {
      console.log('form invalid')
    }
  }


  return (
    <div className='consultation-card dropshadow'>
      <header>
        <h2 className="h3">Get Online Consultation</h2>
      </header>

      <form className='form-consultation' onSubmit={handleSubmit} noValidate>

        <div className='form-group'>
          <label htmlFor="consultation-name" className='fs-11'>Full Name</label>
          <input type="text" id="consultation-name" className='form-input' name="fullName" value={formData.fullName} onChange={handleInputChange} autoComplete="name" required />
          {errors.fullName && <p className="invalid-input">{errors.fullName}</p>}
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-email" className='fs-11'>Email address</label>
            <input type="email" id="consultation-email" className='form-input' name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" required />
            {errors.email && <p className="invalid-input">{errors.email}</p>}
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-specialist" className='fs-11'>Specialist</label>
            <select id="consultation-specialist" name="specialist" className='form-input' value={formData.specialist} onChange={handleInputChange} autoComplete="specialist" required>
              
              <option defaultValue="" disabled></option>

              {specialists.map(specialist => (
                <option key={specialist.id} value={specialist.name}>{specialist.name}</option>
              ))}

            </select>
            {errors.specialist && <p className="invalid-input">{errors.specialist}</p>}
        </div>
          <button type='submit' className="btn-primary dropshadow">Make an appointment</button>
      </form>
    </div>
  )
}

export default ConsultationForm