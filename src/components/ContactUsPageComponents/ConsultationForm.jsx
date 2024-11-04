import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const ConsultationForm = () => {

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(formData);

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ fullName: '', email: '', specialist: '' })
    }

  }

  if (submitted) {
    return (
      <div>
        <h1>Tack för din bokning</h1>
        <p>Vi återkommer</p>
        <button>OK</button>
      </div>
    )
}

  const [specialists, setSpecialists] = useState([
    {
      id: uuidv4(),
      name: "Specialist 1"
    },
    {
      id: uuidv4(),
      name: "Specialist 2"
    },
    {
      id: uuidv4(),
      name: "Specialist 3"
    },
    {
      id: uuidv4(),
      name: "Specialist 4"
    },
  ])

  return (
    <div className='consultation-card dropshadow'>
      <h2 className="h3">Get Online Consultation</h2>

      <form className='form-consultation' onSubmit={handleSubmit} noValidate>

        <div className='form-group'>
          <label htmlFor="consultation-name" className='fs-11'>Full Name</label>
          <input type="text" id="consultation-name" name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="name" required />
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-email" className='fs-11'>Email address</label>
            <input type="email" id="consultation-email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-specialist" className='fs-11'>Specialist</label>
            <select id="consultation-specialist" name="specialist" value={formData.specialist} onChange={handleChange} autoComplete="specialist" required>
              
              <option defaultValue="" disabled></option>

              {specialists.map(specialist => (
                <option key={specialist.id} value={specialist.name}>{specialist.name}</option>
              ))}

            </select>
        </div>
          <button className="btn-primary dropshadow">Make an appointment</button>
      </form>
    </div>
  )
}

export default ConsultationForm