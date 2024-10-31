import React from 'react'

const ConsultationForm = () => {
  return (
    <div className='consultation-card dropshadow'>
      <h2 className="h3">Get Online Consultation</h2>

      <form className='form-consultation' noValidate>

        <div className='form-group'>
          <label htmlFor="consultation-name" className='fs-11'>Full Name</label>
          <input type="text" id="consultation-name" name="name" autoComplete="name" required />
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-email" className='fs-11'>Email address</label>
            <input type="email" id="consultation-email" name="email" autoComplete="email" required />
        </div>
        <div className='form-group'>
            <label htmlFor="consultation-specialist" className='fs-11'>Specialist</label>
            <select id="consultation-specialist" name="specialist" autoComplete="specialist" required>
              <option defaultValue="" disabled></option>
              <option value="">Joakim Lindh</option>
              <option value="">Hans Mattin-Lassei</option>
              <option value="">Therese Lidbom</option>
            </select>
        </div>
          <button className="btn-primary dropshadow">Make an appointment</button>
      </form>
    </div>
  )
}

export default ConsultationForm