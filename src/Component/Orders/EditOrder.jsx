import React from "react";
import "./EditOrder.css";
import { useState } from "react";
import { toast } from "react-toastify";
const EditOrder = ({ order, toggleModal }) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status);

  const handleChange = (e) => {
    setCurrentStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentStatus) {
      toast.error("Please select a status");
      return;
    }

    toggleModal(false);
  };

  return (
    <div className="order-status-container">
      <p className="order-status-title">Order Status</p>
      <div className="order-status-inner">
        <select
          name="status"
          id="status"
          required
          onChange={handleChange}
          className="order-status-select"
        >
          <option value="processing">Processing</option>
          <option value="on-hold">On Hold</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <button className="order-status-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditOrder;
