import React from "react";
import { IoMdClose } from "react-icons/io";
import OrderDetails from "./OrderDetails";
import EditOrder from "./EditOrder";
import "./OrderModal.css";
const OrderModal = ({ showDetails, showEdit, toggleModal, order }) => {
  if (!showDetails && !showEdit) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <button
            onClick={() => toggleModal(false)}
            className="modal-close-btn"
          >
            {/* Close Icon */}
            <IoMdClose />
          </button>

          <>
            {showDetails && <OrderDetails orderItem={order} />}
            {showEdit && <EditOrder order={order} toggleModal={toggleModal} />}
          </>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
