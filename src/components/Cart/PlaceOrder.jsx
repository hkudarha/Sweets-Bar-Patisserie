import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePlaceOrder = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("⚠️ Please sign in before placing an order.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_iT1m7z7AJPuXoA",
      amount: 50000,
      currency: "INR",
      name: "Sweets Bar Patisserie",
      description: "Test Transaction",
      image: "https://yourlogo.com/logo.png",
      handler: function (response) {
        alert(`✅ Payment successful! ID: ${response.razorpay_payment_id}`);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      },
      prefill: {
        name: "Harshita",
        email: "harshita@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button
        className="w-full bg-blue-900 text-white py-2 rounded"
        onClick={handlePlaceOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default PlaceOrder;
