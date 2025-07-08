import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrackYourOrder from './components/TrackOrder/TrackYourOrder';
import FaqSection from './components/More/FaqSection';
import SignIn from './components/auth/SignIn';
import GiftFinder from './components/Popup/GiftFinder';
import LocationPopup from './components/Popup/LocationPopup';
import Cart from './components/Cart/Cart';
import Favourites from './components/More/Favourites';
import ProductDetails from './components/Home/ProductDetails';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      delay: 300,
    });
  }, []);

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
        <Route path="/signin" element={<SignIn/>} />
        {/* <Route path="/gift-finder" element={<GiftFinder />} /> */}
        {/* <Route path="/select-location" element={<LocationPopup />} /> */}

        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/cart" element={<Cart/>} />


        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
