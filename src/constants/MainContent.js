import axios from "axios";

import appLogoClr from "../assets/logo_basic.png"

export const MainContent = {
  appName: "Sweets Bar Patisserie",
  appLogo: appLogoClr,
  appLogoClr: appLogoClr,
  appURL: "",
  contactNo: "+096855 53090",
  email: "sweetsbar@patisserie.com",
  address: "Shop NO.- 5 and 6, Plot no.130, Birla Mandir Rd, Near Malviya Complex, Roshanpura, Malviya Nagar, Bhopal, Madhya Pradesh 462003",
  telegram_link: "https://t.me/YourTelegramUsername",
};
export const backendConfig = {

  // base: "http://192.168.1.17:5000",
  // origin: "http://192.168.1.17:5000",
  base: "http://10.122.55.184:5000",
  origin: "http://10.122.55.184:5000",
};
export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    // const state = Store.getState();
    const token = localStorage.getItem("token")
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);