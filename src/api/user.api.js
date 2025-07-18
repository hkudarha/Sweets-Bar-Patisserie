import axiosInstance from "./axiosInstance";



export async function getAllUsers() {
  const response = await axiosInstance.get("/api/users");
  return response?.data;
}

// products 

export async function createProduct(payload) {
  const response = await axiosInstance.post("/api/products", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response?.data;
}  


export async function getAllProducts() {
  const response = await axiosInstance.get("/api/products");
  return response?.data;
}


export const deleteProduct = async (id) => {
  return axiosInstance.delete(`/api/products/${id}`);
};


// Address 

export async function createAddress(payload){
  const response = await axiosInstance.post("/api/address",payload, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return response?.data;
}

export async function getAddresses() {
  const response = await axiosInstance.get("/api/address");
  return response?.data;
};

// export const deleteAddress = async (id) => {
//   return axiosInstance.delete(`/api/address/${id}`);
// }

