import { useParams, Link } from "react-router-dom";
import products from "./SalingCardsProducts.js";
import { useState } from "react";
import Swal from "sweetalert2";
import CustomerImages from "./CustomerImages.jsx";


const ProductDetails = () => {
  const { id } = useParams();
  const product = products[id];

  const [selectedWeight, setSelectedWeight] = useState("");
  const [nameOnCake, setNameOnCake] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("462002, Bhopal");

  if (!product) {
    return <div className="text-center text-red-600 mt-8">Product not found</div>;
  }

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  const handleBuyNow = () => {
    Swal.fire({
      title: "Success!",
      text: "Your order has been placed.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="max-w-7xl mx-auto sm:p-[4rem] p-[1rem]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Image */}
        <div className="md:w-1/2 relative">
          <div className="sticky top-4">
            <img
              src={product.image}
              alt={product.name}
              className="rounded w-full h-auto"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 sm:pr-[4rem] pr-[0rem]">
          <div className="max-h-screen overflow-y-auto pr-2 hide-scrollbar">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <div className="flex items-center gap-2 ">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                {product.rating} ★
              </span>
              <span className="text-gray-600 mt-[1rem]">({product.reviews} Reviews)</span>
            </div>

            <p className="text-2xl font-semibold">₹ {product.price}</p>
            <p className="text-gray-500 mt-1">Delivery: {product.delivery}</p>

            <div className="mt-6 flex gap-4 ">
              <button
                onClick={handleBuyNow}
                className="cursor-pointer"
              >
                Buy Now
              </button>

              <Link
                to="/"
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Back to products
              </Link>
            </div>

            <div className="mt-[1rem]">
              <p className="font-medium mb-2">Name on Cake</p>
              <input
                type="text"
                value={nameOnCake}
                onChange={(e) => setNameOnCake(e.target.value.slice(0, 25))}
                placeholder="Write Name Here"
                className="w-full border rounded px-2 py-1"
              />
              <p className="text-right text-xs text-gray-500">
                {nameOnCake.length}/25
              </p>
            </div>
            <div className="mt-4">
              {product.weights?.length > 0 && (
                <>
                  <p className="font-medium mb-2">Weight</p>
                  <div className="flex flex-wrap gap-2">
                    {product.weights.map((w) => (
                      <button
                        key={w}
                        onClick={() => handleWeightChange(w)}
                        className={`custom-button
                          ${selectedWeight === w
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                          }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>

                  {selectedWeight && (
                    <p className="mt-[1rem] text-sm text-green-700">
                      Selected Weight: <strong>{selectedWeight}</strong>
                    </p>
                  )}
                </>
              )}
            </div>

            <div>
              <h5 className="font-bold mt-[1rem]">Product Reviews</h5>
               <div className="flex items-center gap-2  ">
              <p className="  px-2 font-extrabold py-1 rounded !text-[1.5rem]">
             <span className="text-yellow-500">  ★ {"  "}</span> {product.rating} 
              </p>
            </div>

            </div>

            <CustomerImages />


            <div className="mt-8">
              <div className="border overflow-hidden border-gray-300 rounded-xl mb-6">
                {product.productContains?.length > 0 && (
                  <div className="mb-6">
                    <h6 className="p-2 bg-gray-100 font-semibold mb-2">
                      Product Contains
                    </h6>
                    <ul className="list-disc p-4 list-inside space-y-1 text-gray-700">
                      {product.productContains.map((item, index) => (
                        <li key={index} className="text-[0.7rem]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.description && (
                  <div className="mb-6">
                    <h6 className="bg-gray-100 p-2 font-semibold mb-2">
                      Description
                    </h6>
                    <p className="p-2 text-gray-700 !text-[0.7rem]">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.careInstructions?.length > 0 && (
                  <div className="rounded mb-6">
                    <h6 className="font-semibold mb-2 bg-gray-100 p-2">
                      Care Instructions
                    </h6>
                    <ul className="list-disc p-2 list-inside space-y-1 text-gray-700">
                      {product.careInstructions.map((item, index) => (
                        <li key={index} className="text-[0.7rem]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
