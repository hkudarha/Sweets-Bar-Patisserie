import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../auth/SignIn";

const BuyNow = ({ productId }) => {

   const [showSignIn, setShowSignIn] = useState(false);
    const navigate = useNavigate();
  
    const handleBuyNow = () => {
      const token = localStorage.getItem("token");
    
  
      if (!token) {
        setShowSignIn(true);
      } else {
    
        navigate(`/buy/${productId}`);
        window.location.reload();
      }
    };

    

  return (
    <div>
        <button className=''  onClick={handleBuyNow}>Buy Now</button>  
        {showSignIn && (
        <SignIn
          onClose={() => setShowSignIn(false)}
          onSuccess={() => setShowSignIn(false)}
        />
      )}    
    </div>
  )
}

export default BuyNow
