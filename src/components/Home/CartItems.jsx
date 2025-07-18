import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import RemoveCardItem from "../Popup/RemoveCardItem";
import PlaceOrder from "../Cart/PlaceOrder";

const CartItems = ({ cartItems, setCartItems }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [removingItems, setRemovingItems] = useState([]);

  // const handlePlaceOrder = () => {
  //   Swal.fire({
  //     icon: "success",
  //     title: "Your order is successfully placed!",
  //     showConfirmButton: false,
  //     timer: 2000,
  //   });
  // };

  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            setRemovingItems((rem) => [...rem, id]);
            return item; 
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const handleTransitionEnd = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    setRemovingItems((rem) => rem.filter((r) => r !== id));
  };

  const openRemoveModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeRemoveModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const confirmRemove = () => {
    setCartItems((prev) => prev.filter((i) => i.id !== selectedItem.id));
    closeRemoveModal();
  };

  const orderTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {!modalOpen && (
        <div className="mx-auto px-[2rem] sm:px-[4rem] py-[2rem]">
          <div className="p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="border border-gray-300 rounded-md">
                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-t-md">
                  <h3 className="font-semibold">Express Delivery</h3>
                </div>

                <div className="p-3 space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className={`cart-item flex items-center justify-between border-gray-300 border rounded-md p-2 transition-all duration-500 overflow-hidden ${
                        removingItems.includes(item.id) ? "is-removing" : ""
                      }`}
                      onTransitionEnd={() =>
                        removingItems.includes(item.id) &&
                        handleTransitionEnd(item.id)
                      }
                    >
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">₹ {item.price}</p>
                          {item.weight && (
                            <p className="text-xs text-gray-500">
                              Weight: {item.weight}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <button
                          onClick={() => openRemoveModal(item)}
                          className="!text-gray-500 !hover:text-red-500 !bg-transparent"
                        >
                          <FaTrash />
                        </button>
                        <div className="flex rounded-2xl items-center gap-2 bg-[#0e4d65]">
                          <button
                            onClick={() => decrementQty(item.id)}
                            className="custom-button2"
                          >
                            -
                          </button>

                          <span className="custom-button2">{item.quantity}</span>
                          <button
                            onClick={() => incrementQty(item.id)}
                            className="custom-button2"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {cartItems.length === 0 && (
                    <p className="text-center text-gray-500">
                      Your cart is empty.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="border border-gray-300 rounded-md p-4">
                <h3 className="font-semibold mb-2">Bill Summary</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {cartItems.length} Items
                </p>
                <div className="flex justify-between mb-2">
                  <span>Order Total</span>
                  <span>₹ {orderTotal}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Grand Total</span>
                  <span>₹ {orderTotal}</span>
                </div>
                
                <PlaceOrder />
              </div>
            </div>
          </div>
        </div>
      )}
      {modalOpen && (
        <RemoveCardItem
          isOpen={modalOpen}
          onClose={closeRemoveModal}
          onConfirm={confirmRemove}
          item={selectedItem}
        />
      )}
    </>
  );
};

export default CartItems;
