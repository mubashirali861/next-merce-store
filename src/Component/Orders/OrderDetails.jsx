import React from "react";
import "./OrderDetails.css";
const OrderDetails = ({ orderItem }) => {
  return (
    <>
      <div className="order-header">
        <div className="order-col">
          <p className="order-label">Order</p>
        </div>
        <div className="order-col">
          <p className="order-label">Date</p>
        </div>
        <div className="order-col">
          <p className="order-label">Status</p>
        </div>
        {/* <div className="order-col"><p className="order-label">Title</p></div> */}
        <div className="order-col">
          <p className="order-label">Total</p>
        </div>
        {/* <div className="order-col"><p className="order-label">Action</p></div> */}
      </div>

      <div className="order-row">
        <div className="order-col">
          <p className="order-red">#{orderItem.orderId.slice(-8)}</p>
        </div>
        <div className="order-col wide">
          <p className="order-label">{orderItem.createdAt}</p>
        </div>
        <div className="order-col status">
          <p className={`order-status ${getStatusClass(orderItem.status)}`}>
            {orderItem.status}
          </p>
        </div>
        {/* <div className="order-col wider"><p className="order-label">{orderItem.orderTitle}</p></div> */}
        <div className="order-col">
          <p className="order-label">{orderItem.total}</p>
        </div>
      </div>

      <div className="order-address">
        <p className="font-bold">Shipping Address:</p>
        {""}
        <p>942 Aspen Road Encino, CA 91316</p>
      </div>
    </>
  );
};

export default OrderDetails;
