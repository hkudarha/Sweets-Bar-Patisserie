import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSearch, FaMapMarkerAlt, FaGift, FaShoppingBag, FaUser, FaBars,
  FaPen, FaTimes, FaQuestionCircle, FaUserCircle, FaPhone, FaWhatsapp, FaHeart
} from 'react-icons/fa';
import logo from "../assets/logo_basic.png";
import LocationPopup from './Popup/LocationPopup';
import GiftFinder from './Popup/GiftFinder';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMobileMore, setShowMobileMore] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showGiftFinderPopup, setShowGiftFinderPopup] = useState(false);

  const [location, setLocation] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(true);

  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation") || "Bhopal, India";
    setLocation(savedLocation);
    setLoadingLocation(false);
  }, []);

  const navItems = [
    { label: "Track Order", icon: FaMapMarkerAlt, path: "/track-order" },
    { label: "Gift Finder", icon: FaGift },
    { label: "Cart", icon: FaShoppingBag, path: "/cart", badge: 0 },
    { label: "Sign In", icon: FaUser, path: "/signin" },
    { label: "More", icon: FaBars },
  ];

  const words = ['Cakes', 'Gifts', 'Plants', 'Combos'];
  const [placeholder, setPlaceholder] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const delay = deleting ? 80 : 150;

    if (!deleting && subIndex === currentWord.length) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      const timeout = setTimeout(() => {
        const newSubIndex = subIndex + (deleting ? -1 : 1);
        setSubIndex(newSubIndex);
        setPlaceholder(`Search for ${currentWord.substring(0, newSubIndex)}`);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, deleting]);

  const handleEditLocation = () => {
    setShowLocationPopup(true);
  };

  return (
    <nav className='px-[2rem] sm:px-[4rem] py-2 flex flex-wrap items-center justify-between bg-white'>
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[10rem]" />
        </Link>
      </div>

      {/* Desktop location display */}
      <div className="hidden md:flex gap-[5rem] items-center bg-blue-100 px-3 py-[1rem] rounded-md text-sm text-gray-700">
        <div className="gap-2 flex items-center">
          <span>🇮🇳</span>
          <span>
            {loadingLocation ? "Detecting location..." : `Deliver To ${location}`}
          </span>
        </div>
        <FaPen
          className="text-xs text-gray-500 cursor-pointer"
          onClick={handleEditLocation}
        />
      </div>

      {/* Mobile location icon */}
      <div className="md:hidden">
        <FaMapMarkerAlt
          className="text-xl text-gray-600 cursor-pointer"
          onClick={handleEditLocation}
        />
      </div>

      <div className="w-full mt-3 md:mt-0 md:w-[300px] flex justify-between items-center gap-2">
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl flex-1">
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent outline-none border-none py-2 text-sm flex-1"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
        <div
          className="md:hidden text-gray-600 text-xl cursor-pointer ml-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isCart = item.label === "Cart";

          if (item.label === "More") {
            return (
              <div
                key={index}
                className="relative flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setShowMore(true)}
                onMouseLeave={() => setShowMore(false)}
              >
                <Icon className="text-[1.3rem]" />
                <span className="text-xs mt-1">{item.label}</span>

                {showMore && (
                  <div className="absolute top-[2rem] right-0 bg-white border rounded shadow-lg text-left w-44 z-10">
                    <Link to="/about" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      <FaUserCircle /> About Us
                    </Link>
                    <Link to="/favourites" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      <FaHeart /> Favourites
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      <FaPhone /> Contact Us
                    </Link>
                    <Link to="/faq" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      <FaQuestionCircle /> FAQ
                    </Link>
                    <a href="https://wa.me/9685553090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => {
                if (item.label === "Gift Finder") {
                  setShowGiftFinderPopup(true);
                } else {
                  navigate(item.path);
                }
              }}
            >
              <Icon className="text-[1.3rem]" />
              {isCart && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] rounded-full px-1">
                  {item.badge}
                </span>
              )}
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="w-full mt-4 flex flex-col gap-3 text-sm text-gray-700 md:hidden">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isCart = item.label === "Cart";

            if (item.label === "More") {
              return (
                <div key={index} className="flex flex-col bg-gray-50 rounded-md">
                  <div
                    className="flex items-center gap-3 px-3 py-2 cursor-pointer"
                    onClick={() => setShowMobileMore(!showMobileMore)}
                  >
                    <Icon className="text-[1.3rem]" />
                    <span>{item.label}</span>
                  </div>

                  {showMobileMore && (
                    <div className="flex flex-col pl-8 gap-1 pb-2">
                      <Link to="/about" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 rounded">
                        <FaUserCircle /> About Us
                      </Link>
                      <Link to="/favourites" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 rounded">
                        <FaHeart /> Favourites
                      </Link>
                      <Link to="/contact" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 rounded">
                        <FaPhone /> Contact Us
                      </Link>
                      <Link to="/faq" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 rounded">
                        <FaQuestionCircle /> FAQ
                      </Link>
                      <a href="https://wa.me/9685553090" target="_blank" rel="noopener noreferrer" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 rounded">
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={index}
                onClick={() => {
                  if (item.label === "Gift Finder") {
                    setShowGiftFinderPopup(true);
                  } else {
                    navigate(item.path);
                  }
                  setShowMobileMenu(false);
                }}
                className="relative flex items-center gap-3 px-3 py-2 rounded-md bg-gray-50"
              >
                <Icon className="text-[1.3rem]" />
                <span>{item.label}</span>
                {isCart && (
                  <span className="ml-auto bg-red-600 text-white text-[10px] rounded-full px-1">
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Popups */}
      {showLocationPopup && (
        <LocationPopup onClose={() => setShowLocationPopup(false)} />
      )}
      {showGiftFinderPopup && (
        <GiftFinder onClose={() => setShowGiftFinderPopup(false)} />
      )}
    </nav>
  );
};

export default Navbar;
