import React, { useState } from 'react';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

const LocationPopup = ({ onClose }) => {
  const [location, setLocation] = useState('');

  const handleUseCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`);
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Please enable location services.');
        }
      );
    } else {
      alert('Geolocation not supported in this browser.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl p-4 sm:p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
        
        {/* Close Icon */}
        <FaTimes
          className="absolute top-3 right-3 text-gray-500 text-lg cursor-pointer"
          onClick={onClose}
        />

        {/* Title */}
        <h2 className="text-base sm:text-lg font-semibold text-center">Enter delivery location</h2>
        <p className="text-xs sm:text-sm text-blue-500 text-center mt-1">
          30-min delivery now live in some areas
        </p>

        {/* Input box */}
        <div className="flex items-center mt-4 border border-gray-300 rounded-md overflow-hidden">
          <div className="flex items-center px-3 bg-gray-50">
            <span className="text-lg sm:text-xl">🇮🇳</span>
            <span className="ml-2 text-sm sm:text-base">Ind</span>
          </div>
          <input
            type="text"
            placeholder="Enter Address / Location"
            className="flex-1 px-4 py-2 outline-none text-sm sm:text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Use current location button */}
        <div className="mt-4 text-center">
          <button
            className="text-blue-600 text-sm font-medium flex items-center justify-center gap-2 mx-auto"
            onClick={handleUseCurrentLocation}
          >
            <FaMapMarkerAlt />
            Use Current Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
