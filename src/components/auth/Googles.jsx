import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Googles = ({ onSuccess }) => {
  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);

    const role = decoded.email === "admin@example.com" ? "admin" : "user";

    const userData = {
      role,
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
    };

    onSuccess(userData);
  };

  return <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.error("Google Login Failed")} />;
};

export default Googles;
