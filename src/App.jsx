import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TrackYourOrder from "./components/TrackOrder/TrackYourOrder";
import FaqSection from "./components/More/FaqSection";
import Cart from "./components/Cart/Cart";
import Favourites from "./components/More/Favourites";
import ProductDetails from "./components/Home/ProductDetails";
// import UserDashboard from "./components/user/UserDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import SignIn from "./components/auth/SignIn";
import DashboardLayout from "./components/user/DashboardLayout";
import UserProfile from "./components/user/UserProfile";
import UserOrders from "./components/user/Orders/UserOrders";
import UserWallet from "./components/user/UserWallet";
import Notifications from "./components/user/Notifications";
import AccountSettings from "./components/user/AccountSettings";
import MyReviews from "./components/user/MyReviews";
import ManageSavedCards from "./components/user/ManageSavedCards";
import ManageSavedUPI from "./components/user/ManageSavedUPI";
import AddressBook from "./components/user/address/AddressBook"
import BuyProduct from "./components/Home/BuyProduct";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track-order" element={<TrackYourOrder />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/favouites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />


<Route path="/buy/:id" element={<BuyProduct />} />


        <Route
          path="/login"
          element={<SignIn onSuccess={setUser} onClose={() => { }} />}
        />

        {user?.role === "admin" && (
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        )}
        {user?.role === "user" && (
          <Route path="/user-dashboard/*" element={<DashboardLayout user={user} />}>
            <Route index element={<UserProfile user={user} />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="wallet" element={<UserWallet />} />
            <Route path="address" element={<AddressBook />} />
            <Route path="cards" element={<ManageSavedCards />} />
            <Route path="upi" element={<ManageSavedUPI />} />
            <Route path="reviews" element={<MyReviews />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>

        )}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
