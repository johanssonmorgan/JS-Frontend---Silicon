import React, { useEffect, useState } from 'react'

const DarkModeToggle = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkmode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
    
  }, [])

  return (
    <div className="btn-toggle-switch">
        <span className="label fs-12">Dark Mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" checked={isDarkMode} aria-label="Toggle Dark Mode" onChange={toggleDarkmode} />
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default DarkModeToggle