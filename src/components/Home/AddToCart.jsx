import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../auth/SignIn";

const AddToCart = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowSignIn(true);
    } else {
      navigate("/cart");
      window.location.reload();
     
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to cart
      </button>

      {showSignIn && (
        <SignIn
          onClose={() => setShowSignIn(false)}
          onSuccess={() => setShowSignIn(false)}
        />
      )}
    </div>
  );
};

export default AddToCart;
