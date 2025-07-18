import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import PriceDetails from "./PriceDetails";
import { useNavigate } from "react-router-dom";



const OrderDetails = ({ detailsOrder, goBack }) => {
    const navigate = useNavigate();


    const handleImageClick = () => {
    // navigate to product page with id
    console.log("Image clicked, navigating to product details");
    navigate(`/product/${detailsOrder.id}`);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <button onClick={goBack} className="mr-2 text-lg">
          <FaArrowLeft />
        </button>
        <h3 className="text-xl font-bold">Order Details</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Order ID - ORD000{detailsOrder.id}
      </p>

      <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded shadow mb-6">
        <img
          src={detailsOrder.image}
          alt={detailsOrder.name}
          className="w-24 h-24 object-cover rounded"
           onClick={handleImageClick}
        />
        <div>
          <h4 className="font-semibold">{detailsOrder.name}</h4>
          <p className="text-sm text-gray-500">
            Seller: {detailsOrder.seller}
          </p>
          <p className="text-lg font-bold">{detailsOrder.price}</p>
          <p className="text-sm text-gray-500 mt-1">
            Quantity: {detailsOrder.quantity}
          </p>
        </div>
      </div>

      <PriceDetails priceDetails={detailsOrder.priceDetails} />
    </div>
  );
};

export default OrderDetails;
