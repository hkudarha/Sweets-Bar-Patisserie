import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "./SalingCardsProducts";
import PlaceOrder from "../Cart/PlaceOrder";

const BuyProduct = () => {
  const { id } = useParams();
  const product = products[id];
  const navigate = useNavigate();

  const [address, setAddress] = useState(""); // initially empty (no address saved)
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center text-red-600 mt-8">
        Product not found
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddNewAddress = () => {
    navigate("/user-dashboard/address");
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-8">
       
        <div className="w-full md:w-2/3 space-y-6">
          <div className="flex gap-4 border border-gray-200 p-4 rounded-md shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600 text-sm">Price: ₹ {product.price}</p>
              {product.weight && (
                <p className="text-xs text-gray-500 mt-1">
                  Weight: {product.weight}
                </p>
              )}

              <div className="mt-2 flex items-center gap-2">
                <div
                  onClick={decrementQuantity}
                  className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                >
                  -
                </div>
                <span className="px-3">{quantity}</span>
                <div
                  onClick={incrementQuantity}
                  className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                >
                  +
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg mb-2">Delivery Address</h3>
              <button
              onClick={handleAddNewAddress}
              className="!px-[1rem]  !text-[0.8rem] bg-blue-600 rounded"
            >
              Add New Address
            </button>
            </div>

            <p className="text-sm text-gray-600">
              There is no address saved. Please save an address.
            </p>
           
          </div>

      
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-semibold text-lg mb-2">Product Details</h3>
            <p className="text-sm text-gray-700">
              {product.description || "No description available."}
            </p>

            {product.careInstructions?.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-1">Care Instructions:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {product.careInstructions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

       
        <div className="w-full md:w-1/3">
          <div className="border border-gray-300 rounded-md p-4 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Bill Summary</h3>

            <div className="flex justify-between text-sm mb-1">
              <span>Item</span>
              <span>{product.name}</span>
            </div>

            <div className="flex justify-between text-sm mb-1">
              <span>Unit Price</span>
              <span>₹ {product.price}</span>
            </div>

            <div className="flex justify-between text-sm mb-1">
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>

            <div className="border-t my-2"></div>

            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Grand Total</span>
              <span>₹ {totalPrice}</span>
            </div>

            <PlaceOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
