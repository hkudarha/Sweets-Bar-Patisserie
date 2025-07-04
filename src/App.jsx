import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrackYourOrder from './components/TrackOrder/TrackYourOrder';
import FaqSection from './components/More/FaqSection';
import Signup from './components/auth/Signup';
import GiftFinder from './components/Popup/GiftFinder';
import LocationPopup from './components/Popup/LocationPopup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/track-order" element={<TrackYourOrder/>} />  
        <Route path="/faq" element={<FaqSection/>} />  
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<Signup/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gift-finder" element={<GiftFinder />} />
        <Route path="/select-location" element={<LocationPopup />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
