import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom"


const Signup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const data = await signupUser(email, password);
      setMessage("Signup successful!");
    } catch (err) {
      setMessage("Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm">
    <div className="bg-white rounded-lg flex w-[90%] md:w-[700px] shadow-lg overflow-hidden relative">
      <div className="w-1/2 hidden md:block">
        <img
          src="http://localhost:5173/src/assets/cards/luscious-rasmalai-pista-cream-cake-9815470ca-A.avif"
          alt="Flowers"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Hello dear customer!</h2>
        <p className="text-sm text-gray-600 mb-4">Please enter your Email and Password</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 cursor-pointer select-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
          >
            {loading ? "Submitting..." : "Continue"}
          </button>
        </form>

        <div className="w-full flex items-center justify-center mt-4">
            <Link to="/sign-up"
            className="text-blue-700 underline  text-center">
            Sign Up
            </Link>
        </div>

        {message && (
          <p className="mt-2 text-center text-sm text-red-500">{message}</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Signup;
