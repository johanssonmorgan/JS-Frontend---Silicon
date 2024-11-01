import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <BrowserRouter>
    <header>
      <Navbar />
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
    </BrowserRouter>
  )
}

export default App
