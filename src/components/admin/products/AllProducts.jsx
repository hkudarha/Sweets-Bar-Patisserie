import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { deleteProduct } from "../../../api/user.api"; 
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/api/products");
      console.log("✅ API Response:", data);

      if (Array.isArray(data)) {
        setProducts(data);
      } else if (data.products && Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("❌ Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id);
          setProducts((prev) => prev.filter((p) => p._id !== id));
          Swal.fire("Deleted!", "Product has been deleted.", "success");
        } catch (err) {
          console.error("❌ Failed to delete product", err);
          Swal.fire("Error!", "Failed to delete product.", "error");
        }
      }
    });
  };

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
        All Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition space-y-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl text-blue-800">
                {product.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  product.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.isAvailable ? "Available" : "Not Available"}
              </span>
            </div>

            <p className="text-gray-600 text-sm">{product.description}</p>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="text-green-700 font-medium">
                ₹{product.price}
              </span>
              <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                {product.category}
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                {product.flavor}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs flex items-center gap-1 ${
                  product.eggType === "Eggless"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                🥚 {product.eggType}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs mt-2">
              {product.weightOptions.map((w, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="text-xs text-gray-500">
              Delivery: {product.deliveryDate} at {product.deliveryTime}
            </div>

            {product.discount > 0 && (
              <div className="text-sm text-orange-600 font-medium">
                🎉 {product.discount}% Off
              </div>
            )}

            <div className="flex gap-2 mt-3 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="product"
                  className="h-16 w-16 object-cover rounded border"
                />
              ))}
            </div>

            <div className="flex justify-end gap-4 mt-3">
              <button className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="text-red-600 hover:underline flex items-center gap-1 text-sm"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
