import React, { useState } from "react";

const CustomerImages = () => {
  const [showModal, setShowModal] = useState(false);

  const images = [
    "https://imgcdn.floweraura.com/fa/review_image/1751373807_906397.jpeg?tr=w-75",
    "https://imgcdn.floweraura.com/fa/review_image/opr_review/1745223360_1368.jpg?tr=w-220",
    "https://imgcdn.floweraura.com/fa/review_image/1751373807_906397.jpeg?tr=w-75",
    "https://imgcdn.floweraura.com/fa/review_image/opr_review/1745223360_1368.jpg?tr=w-220",
    "https://imgcdn.floweraura.com/fa/review_image/1751373807_906397.jpeg?tr=w-75",
    "https://imgcdn.floweraura.com/fa/review_image/opr_review/1745223360_1368.jpg?tr=w-220",
    "https://imgcdn.floweraura.com/fa/review_image/1751373807_906397.jpeg?tr=w-75",
    "https://imgcdn.floweraura.com/fa/review_image/1751373807_906397.jpeg?tr=w-75",
    "https://imgcdn.floweraura.com/fa/review_image/opr_review/1745223360_1368.jpg?tr=w-220",
  ];

  const MAX_VISIBLE = 3;
  const visibleImages = images.slice(0, MAX_VISIBLE);
  const hiddenImages = images.length - MAX_VISIBLE;
  const nextImage = images[MAX_VISIBLE]; // first hidden image

  return (
    <div>
      <h3 className="font-semibold mb-2">Customer Images</h3>
      <div className="flex gap-2">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Customer ${index + 1}`}
            className="w-16 h-16 object-cover rounded cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        ))}
        {hiddenImages > 0 && (
          <div
            onClick={() => setShowModal(true)}
            className="w-16 h-16 rounded relative overflow-hidden cursor-pointer text-sm text-white flex justify-center items-center"
            style={{
              backgroundImage: `url(${nextImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              +{hiddenImages} <span>More</span>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded w-11/12 max-w-5xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">All Customer Images</h4>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Customer ${index + 1}`}
                  className="w-full mb-4 rounded object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerImages;
