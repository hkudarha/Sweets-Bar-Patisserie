import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSearch, FaMapMarkerAlt, FaGift, FaShoppingBag, FaUser, FaBars,
  FaPen, FaTimes, FaQuestionCircle, FaUserCircle, FaPhone, FaWhatsapp, FaHeart
} from 'react-icons/fa';
import logo from "../assets/logo_basic.png";
import LocationPopup from './Popup/LocationPopup';
import GiftFinder from './Popup/GiftFinder';
import SignIn from './auth/SignIn';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showGiftFinderPopup, setShowGiftFinderPopup] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && !currentUser) {
      setCurrentUser(savedUser);
    }
  }, [currentUser]);

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
    { label: currentUser ? "My Account" : "Sign In", icon: FaUser },
    { label: "More", icon: FaBars },
  ];

  const words = ['Cakes', 'Gifts', 'Plants', 'Combos'];
  const [placeholder, setPlaceholder] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

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
        setPlaceholder(`Search for ${currentWord.substring(0, newSubIndex)}|`);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, deleting]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    setShowAccountDropdown(false);
    navigate("/");
    window.location.reload();
  };

  const handleNavItemClick = (item) => {
    if (item.label === "Gift Finder") {
      setShowGiftFinderPopup(true);
    } else if (item.label === "Sign In") {
      setShowSignInPopup(true);
    } else if (item.label === "My Account") {
      setShowAccountDropdown(!showAccountDropdown);
    } else {
      navigate(item.path);
    }
    setShowMobileMenu(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className='px-[1rem] sm:px-[2rem] py-2 flex flex-wrap items-center justify-between bg-white relative'>
      <Link to="/">
        <img src={logo} alt="Logo" className="w-[8rem]" />
      </Link>

      <div className="hidden md:flex gap-[3rem] items-center bg-blue-100 px-3 py-[0.5rem] rounded-md text-sm text-gray-700">
        <div className="gap-2 flex items-center">
          <span>🇮🇳</span>
          <span>
            {loadingLocation ? "Detecting location..." : `Deliver To ${location}`}
          </span>
        </div>
        <FaPen
          className="text-xs text-gray-500 cursor-pointer"
          onClick={() => setShowLocationPopup(true)}
        />
      </div>

      <div className="md:hidden">
        <FaMapMarkerAlt
          className="text-xl text-gray-600 cursor-pointer"
          onClick={() => setShowLocationPopup(true)}
        />
      </div>

      <div className="w-full mt-3 md:mt-0 md:w-[300px] flex justify-between items-center gap-2">
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl flex-1">
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none border-none py-2 text-sm flex-1"
          />
          <FaSearch
            className="text-gray-500 ml-2 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div
          className="md:hidden text-gray-600 text-xl cursor-pointer ml-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        {navItems.map((item, index) => {
          const Icon = item.icon;

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
                    <Link to="/about" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <FaUserCircle /> About Us
                    </Link>
                    <Link to="/favourites" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <FaHeart /> Favourites
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <FaPhone /> Contact Us
                    </Link>
                    <Link to="/faq" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <FaQuestionCircle /> FAQ
                    </Link>
                    <a href="https://wa.me/9685553090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
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
              onClick={() => handleNavItemClick(item)}
            >
              <Icon className="text-[1.3rem]" />
              <span className="text-xs mt-1">{item.label}</span>

              {item.label === "My Account" && showAccountDropdown && (
                <div className="absolute top-[2rem] right-0 bg-white border rounded shadow-lg text-left w-44 z-10">
                  <div
                    onClick={() => {
                      navigate(currentUser?.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
                      setShowAccountDropdown(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Dashboard
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showMobileMenu && (
        <div className="flex flex-col bg-white shadow-md w-full mt-3 p-4 gap-3 text-gray-700 md:hidden">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            if (item.label === "More") {
              return (
                <div key={index} className="flex flex-col gap-1">
                  <div
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </div>
                  {showMore && (
                    <div className="ml-5 flex flex-col gap-2">
                      <Link to="/about" className="flex items-center gap-2 px-4  hover:bg-gray-100">
                        <FaUserCircle /> About Us
                      </Link>
                      <Link to="/favourites" className="flex items-center gap-2 px-4  hover:bg-gray-100">
                        <FaHeart /> Favourites
                      </Link>
                      <Link to="/contact" className="flex items-center gap-2 px-4  hover:bg-gray-100">
                        <FaPhone /> Contact Us
                      </Link>
                      <Link to="/faq" className="flex items-center gap-2 px-4  hover:bg-gray-100">
                        <FaQuestionCircle /> FAQ
                      </Link>
                      <a href="https://wa.me/9685553090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4  hover:bg-gray-100">
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
                onClick={() => handleNavItemClick(item)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Icon />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}

      {showLocationPopup && <LocationPopup onClose={() => setShowLocationPopup(false)} />}
      {showGiftFinderPopup && <GiftFinder onClose={() => setShowGiftFinderPopup(false)} />}
      {showSignInPopup && (
        <SignIn
          onClose={() => setShowSignInPopup(false)}
          onSuccess={(user) => {
            setCurrentUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            setShowSignInPopup(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
