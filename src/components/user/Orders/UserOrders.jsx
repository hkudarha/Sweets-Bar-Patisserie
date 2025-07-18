import React, { useState } from "react";
import OrdersList from "./OrdersList";
import OrderDetails from "./OrderDetails";
import EmptyOrders from "./EmptyOrders";

import img1 from "../../../assets/cake/anniversary-cakes_2.jpg";
import img2 from "../../../assets/cake/birthday_cake.jpg";
import img3 from "../../../assets/cake/designer-cakes.jpg";

const orders = [
  {
    id: 1,
    status: "Dispatched - Arrives tomorrow",
    deliveryWindow: "7am - 7pm",
    name: "Chocolate Truffle Cake",
    price: "₹799",
    quantity: 1,
    image: img1,
    seller: "SweetTreats",
    priceDetails: {
      listPrice: 999,
      sellingPrice: 899,
      extraDiscount: 100,
      specialPrice: 799,
      handlingFee: 0,
      promoDiscount: 0,
      protectFee: 9,
      totalAmount: 808,
    },
  },
  {
    id: 2,
    status: "Dispatched - Expected on Mon, 2 July",
    deliveryWindow: "7am - 7pm",
    name: "Red Velvet Cake",
    price: "₹899",
    quantity: 2,
    image: img2,
    seller: "CakeHeaven",
    priceDetails: {
      listPrice: 1200,
      sellingPrice: 1100,
      extraDiscount: 150,
      specialPrice: 950,
      handlingFee: 0,
      promoDiscount: 0,
      protectFee: 9,
      totalAmount: 959,
    },
  },
  {
    id: 3,
    status: "Delivered on 23 June",
    deliveryWindow: "",
    name: "Black Forest Cake",
    price: "₹699",
    quantity: 1,
    image: img3,
    seller: "ChocoFantasy",
    priceDetails: {
      listPrice: 850,
      sellingPrice: 800,
      extraDiscount: 100,
      specialPrice: 700,
      handlingFee: 0,
      promoDiscount: 0,
      protectFee: 9,
      totalAmount: 709,
    },
  },
];

const UserOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsOrder, setDetailsOrder] = useState(null);

  const handleSelect = (id) => setSelectedOrder(id);

  const openDetails = (order) => setDetailsOrder(order);

  const goBack = () => setDetailsOrder(null);

  return (
    <div className="p-6">
      {!detailsOrder ? (
        <>
          <h3 className="mb-4">My Orders</h3>
          {orders.length === 0 ? (
            <EmptyOrders />
          ) : (
            <OrdersList
              orders={orders}
              selectedOrder={selectedOrder}
              handleSelect={handleSelect}
              openDetails={openDetails}
            />
          )}
        </>
      ) : (
        <OrderDetails detailsOrder={detailsOrder} goBack={goBack} />
      )}
    </div>
  );
};

export default UserOrders;
