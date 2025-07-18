import React from "react";
import OrderCard from "./OrderCard";

const OrdersList = ({ orders, selectedOrder, handleSelect, openDetails }) => {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          isSelected={selectedOrder === order.id}
          onSelect={() => handleSelect(order.id)}
          onViewDetails={() => openDetails(order)}
        />
      ))}
    </div>
  );
};

export default OrdersList;
