import React from "react";
import "./SingleOrder.css";
import OrderModal from "./OrderModal";
import OrderActions from "./OrderActions";
import { useState } from "react";
const SingleOrder = ({ orderItem, smallView }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const toggleEdit = () => {
    setShowEdit((prev) => !prev);
  };

  const toggleModal = (status) => {
    setShowDetails(status);
    setShowEdit(status);
  };
  function getStatusClass(status) {
    switch (status) {
      case "delivered":
        return "status-green";
      case "on-hold":
        return "status-red";
      case "processing":
        return "status-yellow";
      default:
        return "status-unknown";
    }
  }

  return (
    <>
      {!smallView && (
        <div className="order-row">
          <div className="order-cell">
            <p className="order-text order-id">
              #{orderItem.orderId.slice(-8)}
            </p>
          </div>
          <div className="order-cell">
            <p className="order-text">{orderItem.createdAt}</p>
          </div>
          <div className="order-cell">
            <p className={`status-badge ${getStatusClass(orderItem.status)}`}>
              {orderItem.status}
            </p>
          </div>
          <div className="order-cell">
            <p className="order-text">{orderItem.title}</p>
          </div>
          <div className="order-cell">
            <p className="order-text">{orderItem.total}</p>
          </div>
          <div className="order-actions">
            <OrderActions
              toggleDetails={toggleDetails}
              toggleEdit={toggleEdit}
            />
          </div>
        </div>
      )}

      {smallView && (
        <div className="order-mobile">
          <div className="order-section">
            <p>
              <span className="label">Order:</span> #
              {orderItem.orderId.slice(-8)}
            </p>
            <p>
              <span className="label">Date:</span> {orderItem.createdAt}
            </p>
            <p>
              <span className="label">Status:</span>
              <span
                className={`status-badge ${getStatusClass(orderItem.status)}`}
              >
                {orderItem.status}
              </span>
            </p>
            <p>
              <span className="label">Title:</span> {orderItem.title}
            </p>
            <p>
              <span className="label">Total:</span> ${orderItem.total}
            </p>
            <p>
              <span className="label">Actions:</span>
              <OrderActions
                toggleDetails={toggleDetails}
                toggleEdit={toggleEdit}
              />
            </p>
          </div>
        </div>
      )}

      <OrderModal
        showDetails={showDetails}
        showEdit={showEdit}
        toggleModal={toggleModal}
        order={orderItem}
      />
    </>
  );
};

export default SingleOrder;
