import React, { useState } from "react";
import imagekit from "../../../constants/imagekit";
import { createProduct } from "../../../api/user.api";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [weightOptions, setWeightOptions] = useState(""); // comma separated
  const [category, setCategory] = useState("");
  const [flavor, setFlavor] = useState("");
  const [eggType, setEggType] = useState("Egg");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      Swal.fire("⚠️ Oops!", "You can upload up to 5 images only", "warning");
      return;
    }

    setUploadedImages([]);

    Swal.fire({
      title: "Uploading...",
      text: "Please wait while images are uploading",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const urls = [];

      for (const img of files) {
        const authRes = await fetch("http://localhost:5000/auth");
        const authParams = await authRes.json();

        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });

        const res = await new Promise((resolve, reject) => {
          imagekit.upload(
            {
              file: base64,
              fileName: img.name,
              token: authParams.token,
              signature: authParams.signature,
              expire: authParams.expire,
            },
            (err, result) => {
              if (err) reject(err);
              else resolve(result);
            }
          );
        });

        urls.push(res.url);
      }

      setUploadedImages(urls);
      Swal.close();
      Swal.fire("✅ Done!", "Images uploaded successfully!", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("❌ Failed!", "Something went wrong while uploading images.", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !price ||
      !weightOptions ||
      !category ||
      !flavor ||
      !discount ||
      !rating||
      !deliveryDate ||
      !deliveryTime ||
      uploadedImages.length === 0
    ) {
      Swal.fire("⚠️ Missing Fields!", "Please fill all fields and upload images.", "warning");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title,
        description,
        price,
        weightOptions: weightOptions.split(",").map((w) => w.trim()), // convert to array
        category,
        flavor,
        eggType,
        discount,
        rating,
        isAvailable,
        deliveryDate,
        deliveryTime,
        images: uploadedImages,
      };

      await createProduct(payload);

      Swal.fire("✅ Success!", "Product created successfully!", "success");

      setTitle("");
      setDescription("");
      setPrice("");
      setWeightOptions("");
      setCategory("");
      setFlavor("");
      setEggType("Egg");
      setDiscount("");
      setRating("");
      setIsAvailable(true);
      setDeliveryDate("");
      setDeliveryTime("");
      setUploadedImages([]);
    } catch (err) {
      console.error(err);
      Swal.fire("❌ Failed!", "Something went wrong while creating product.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 border rounded-lg shadow bg-white space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-700">Create New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Product Title", value: title, setValue: setTitle, placeholder: "e.g., Chocolate Cake" },
          { label: "Description", value: description, setValue: setDescription, placeholder: "Enter product description" },
          { label: "Price (₹)", value: price, setValue: setPrice, placeholder: "e.g., 499" },
          { label: "Weight Options", value: weightOptions, setValue: setWeightOptions, placeholder: "e.g., 500g, 1kg, 2kg" },
          { label: "Category", value: category, setValue: setCategory, placeholder: "e.g., Birthday, Wedding" },
          { label: "Flavor", value: flavor, setValue: setFlavor, placeholder: "e.g., Chocolate, Vanilla" },
          { label: "Rating (1-5)", value: rating, setValue: setRating, placeholder: "e.g., 4.5" },
          { label: "Discount (%)", value: discount, setValue: setDiscount, placeholder: "e.g., 10" },
        ].map(({ label, value, setValue, placeholder }) => (
          <div key={label} className="grid grid-cols-3 gap-4 items-center">
            <label className="font-medium text-gray-600">{label}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="col-span-2 border p-2 rounded w-full"
            />
          </div>
        ))}

        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="font-medium text-gray-600">Egg / Eggless</label>
          <div className="col-span-2 flex gap-4">
            <label><input type="radio" name="eggType" value="Egg" checked={eggType === "Egg"} onChange={(e) => setEggType(e.target.value)} /> Egg</label>
            <label><input type="radio" name="eggType" value="Eggless" checked={eggType === "Eggless"} onChange={(e) => setEggType(e.target.value)} /> Eggless</label>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="font-medium text-gray-600">Is Available</label>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
            className="col-span-2 w-5 h-5"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="font-medium text-gray-600">Delivery Date</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="col-span-2 border p-2 rounded w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="font-medium text-gray-600">Delivery Time</label>
          <input
            type="time"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="col-span-2 border p-2 rounded w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="font-medium text-gray-600">Upload Images (max 5)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="col-span-2 border p-2 rounded w-full"
          />
        </div>

        {uploadedImages.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {uploadedImages.map((url, idx) => (
              <img key={idx} src={url} alt={`product-${idx}`} className="w-20 h-20 object-cover rounded" />
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg font-semibold"
        >
          {loading ? "Submitting..." : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
