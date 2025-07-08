import React, { useState } from 'react';
import BestCategories from '../Home/BestCategories';
import CartItems from '../Home/CartItems';
import CardEmpty from '../Home/CardEmpty';
import cake from "../../assets/cake/birthday_cake.jpg";

const initialItems = [
  {
    id: 1,
    name: "Magic Candles",
    price: 59,
    img: cake, 
     weight: "1 Kg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Glam Bday Cake Topper",
    price: 99,
     weight: "1.5 Kg",
    img: cake,
    quantity: 1,
  },
  {
    id: 3,
    name: "Chocolate Truffle Cake",
    price: 595,
    weight: "0.5 Kg",
    img: cake,
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialItems);

  return (
    <div data-aos="fade-up">
      {cartItems.length === 0 ? (
        <CardEmpty />
      ) : (
        <CartItems cartItems={cartItems} setCartItems={setCartItems} />
      )}
      <BestCategories />
    </div>
  );
};

export default Cart;
