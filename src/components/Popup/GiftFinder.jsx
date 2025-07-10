import React, { useState, useRef, useEffect } from 'react';
import { MdCelebration } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const cities = ['Mumbai', 'Delhi', 'Bhopal', 'Indore', 'Hyderabad', 'Chennai', 'Kolkata', 'Jaipur'];
const occasions = ['Birthday', 'Anniversary', 'Appreciation', 'Love and Romance', 'Wedding', 'Congratulations'];

const GiftFinder = ({ onClose }) => {
  const [cityInput, setCityInput] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showOccasionDropdown, setShowOccasionDropdown] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const occasionRef = useRef(null);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) => date.toISOString().split('T')[0];
  const formattedToday = formatDate(today);
  const formattedTomorrow = formatDate(tomorrow);

  useEffect(() => {
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(cityInput.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [cityInput]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-auto'>
      <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl py-4 px-6 space-y-2">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
        >
          <IoClose />
        </button>

        <h2 className="text-center text-[#0e4d65] text-lg font-semibold">Gift Finder</h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Find the Perfect Gift in Just <span className="underline">3 mins</span>
        </p>

        <div>
          <label className="block text-sm font-medium mb-1">Select Delivery City</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Start typing..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none"
              value={cityInput}
              onChange={(e) => {
                setCityInput(e.target.value);
                setSelectedCity('');
              }}
            />
            {cityInput && filteredCities.length > 0 && !selectedCity && (
              <ul className="absolute z-10 bg-white border mt-1 w-full max-h-40 overflow-y-auto rounded-lg shadow">
                {filteredCities.map((city, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCity(city);
                      setCityInput(city);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium mb-1">When should it arrive?</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setSelectedDate(formattedToday)}
              className={`custom-button w-full sm:w-auto ${selectedDate === formattedToday ? 'bg-blue-100' : ''}`}
            >
              Today<br /><span className="font-semibold">{formattedToday.slice(8, 10)} {today.toLocaleString('default', { month: 'short' })}</span>
            </button>
            <button
              onClick={() => setSelectedDate(formattedTomorrow)}
              className={`custom-button w-full sm:w-auto ${selectedDate === formattedTomorrow ? 'bg-blue-100' : ''}`}
            >
              Tomorrow<br /><span className="font-semibold">{formattedTomorrow.slice(8, 10)} {tomorrow.toLocaleString('default', { month: 'short' })}</span>
            </button>

            {/* Custom Calendar */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="custom-button w-full"
              >
                {selectedDate
                  ? `${selectedDate.slice(8, 10)}-${selectedDate.slice(5, 7)}-${selectedDate.slice(0, 4)}`
                  : "Select Date"}
              </button>

              {showCalendar && (
                <div className="absolute z-10 bg-white border rounded-lg mt-2 shadow p-2 w-full sm:w-56">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setShowCalendar(false);
                    }}
                    className="cursor-pointer outline-0 w-full text-center"
                    min={formattedToday}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Occasion Selection */}
        <div ref={occasionRef}>
          <label className="block text-sm font-medium mb-1">Select Occasion</label>
          <div
            onClick={() => setShowOccasionDropdown(!showOccasionDropdown)}
            className="flex items-center justify-between w-full px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50"
          >
            <span className='flex gap-2 items-center'>
              <MdCelebration /> {selectedOccasion || 'Select Occasion'}
            </span>
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {showOccasionDropdown && (
            <ul className="mt-1 border rounded-lg max-h-40 overflow-y-auto bg-white shadow absolute z-10 w-full">
              {occasions.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedOccasion(item);
                    setShowOccasionDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit */}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={() => alert(`City: ${selectedCity || cityInput}, Date: ${selectedDate}, Occasion: ${selectedOccasion}`)}
        >
          Find Gifts
        </button>
      </div>
    </div>
  );
};

export default GiftFinder;
