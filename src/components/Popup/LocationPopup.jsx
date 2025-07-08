import React, { useState } from 'react';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

const LocationPopup = ({ onClose }) => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUseCurrentLocation = () => {
    if ('geolocation' in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
            .then((res) => res.json())
            .then((data) => {
              const addr = data.address;

              const cleanName = [
                addr.road,
                addr.neighbourhood,
                addr.suburb,
                addr.city || addr.town || addr.village,
                addr.state,
                addr.country,
                `(${latitude.toFixed(4)}, ${longitude.toFixed(4)})`
              ]
                .filter(Boolean)
                .join(', ');

              setLocation(cleanName);
              setLoading(false);
            })
            .catch((err) => {
              console.error('Error reverse geocoding:', err);
              alert('Unable to get address name.');
              setLoading(false);
            });
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      alert('Geolocation not supported in this browser.');
    }
  };


  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl p-4 sm:p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
        <FaTimes
        className="absolute top-3 right-3 text-gray-500 text-lg cursor-pointer"
          onClick={onClose}
        />

        <h2 className="text-base sm:text-lg font-semibold text-center">Enter delivery location</h2>
        <p className="text-xs sm:text-sm text-blue-500 text-center mt-1">
          30-min delivery now live in some areas
        </p>

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

        <div className="mt-4 text-center">
          <button
            className="text-blue-600 text-sm font-medium flex items-center justify-center gap-2 mx-auto"
            onClick={handleUseCurrentLocation}
            disabled={loading}
          >
            <FaMapMarkerAlt />
            {loading ? "Fetching Location..." : "Use Current Location"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
