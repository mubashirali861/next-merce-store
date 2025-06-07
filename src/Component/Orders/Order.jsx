import React from "react";
import "./Order.css";
import ordersData from "./OrderData";
import SingleOrder from "./SingleOrder";
const Order = () => {
  return (
    <>
      <div className="orders-wrapper">
        <div className="orders-container">
          {/* Header Row */}
          {ordersData.length > 0 && (
            <div className="orders-header">
              <div className="orders-col order-col">
                <p className="orders-label">Order</p>
              </div>
              <div className="orders-col date-col">
                <p className="orders-label">Date</p>
              </div>
              <div className="orders-col status-col">
                <p className="orders-label">Status</p>
              </div>
              <div className="orders-col title-col">
                <p className="orders-label">Title</p>
              </div>
              <div className="orders-col total-col">
                <p className="orders-label">Total</p>
              </div>
              <div className="orders-col action-col">
                <p className="orders-label">Action</p>
              </div>
            </div>
          )}

          {/* Orders Table Rows */}
          {ordersData.length > 0 ? (
            ordersData.map((orderItem, key) => (
              <SingleOrder key={key} orderItem={orderItem} smallView={false} />
            ))
          ) : (
            <p className="orders-empty-message">
              You don&apos;t have any orders!
            </p>
          )}
        </div>

        {/* Mobile View Orders */}
        {ordersData.length > 0 &&
          ordersData.map((orderItem, key) => (
            <SingleOrder key={key} orderItem={orderItem} smallView={true} />
          ))}
      </div>
    </>
  );
};

export default Order;
