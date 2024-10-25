import React from 'react'

const DarkModeToggle = () => {
  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label fs-12">Dark Mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
            <input type="checkbox" id="darkmode-switch" aria-label="Toggle Dark Mode" />
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default DarkModeToggle