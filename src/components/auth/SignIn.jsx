import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import img from "../../assets/flower_login_bg.avif";
import SliderLogin from "./Sliderlogin";
import Googles from "./Googles";

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpModal(true);
    }, 1000);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    alert("OTP Verified!");
    setOtpModal(false);
  };

  const handleResend = () => {
    setResend(true);
    setTimeout(() => {
      setResend(false);
      alert("OTP Resent!");
    }, 1000);
  };

  return (
    <>
      {/* Main SignIn Modal */}
      <div className=" p-[4rem] z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg flex w-[90%] md:w-[700px] shadow-lg overflow-hidden relative">
          <div className="w-1/2 hidden md:block">
            <img
              src={img}
              alt="Flowers"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 w-full md:w-1/2 relative">
            <Link to="/">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
              >
                &times;
              </button>
            </Link>

            <h2 className="text-3xl font-bold mb-2">Hello!</h2>
            <p className="text-sm text-gray-600 mb-4">Please enter your email</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
              >
                {loading ? "Please wait..." : "Continue"}
              </button>
            </form>

            <div className="text-center my-4 text-sm text-gray-500">
              Or, Login with
            </div>

            <GoogleOAuthProvider clientId="255480341544-n4jfg032c2lbleacmf1ericjgvrd2kv2.apps.googleusercontent.com">
              <Googles />
            </GoogleOAuthProvider>

            <div className="text-xs text-gray-400 mt-4">
              by continuing you agree to Sweets Bar Patisserie{" "}
              <Link to="/terms" className="underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline">
                Privacy Policy
              </Link>
            </div>

            <SliderLogin/>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {otpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative max-h-screen overflow-y-auto">
            <button
              onClick={() => setOtpModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Verify OTP
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                An OTP has been sent to{" "}
                <span className="font-medium">{email}</span>. Please enter it
                below.
              </p>
            </div>

            <form onSubmit={handleOtpSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              >
                Verify
              </button>
            </form>

            <div className="text-center mt-4">
              <button
                onClick={handleResend}
                disabled={resend}
                className="text-sm text-blue-600 hover:text-blue-700 disabled:text-gray-400"
              >
                {resend ? "Resending..." : "Resend OTP"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
