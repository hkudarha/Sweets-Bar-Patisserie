import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Google = () => {
  const handleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    console.log("Google JWT Token:", token);
  };

  const handleLoginError = () => {
    console.error("Login Failed");
  };
  return (
        <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />   
  );
};
export default Google;
