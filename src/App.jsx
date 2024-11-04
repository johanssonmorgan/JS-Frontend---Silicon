import { Routes, Route, useLocation } from 'react-router-dom'
import './main.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'



function App() {

  const location = useLocation();
  let locationId;
  
  if (location.pathname === '/') {
    locationId = 'home';
  } else if (location.pathname === '/contact') {
    locationId = 'contact-section';
  } else if (location.pathname === '/features') {
    locationId = 'features-section';
  }

  return (
    <>
      <header className={locationId}>
          <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={null} />
          <Route path="/features" element={null} />
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
