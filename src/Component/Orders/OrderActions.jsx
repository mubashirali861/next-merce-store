import React from "react";
import "./OrderActions.css";
import { FiEye } from "react-icons/fi";
import { BiSolidEdit } from "react-icons/bi";
const OrderActions = ({ toggleEdit, toggleDetails }) => {
  return (
    <>
      <button onClick={toggleDetails} className="action-btn">
        {/* Eye Icon */}
        <FiEye />
      </button>

      <button onClick={toggleEdit} className="action-btn">
        {/* Edit Icon */}
        <BiSolidEdit />
      </button>
    </>
  );
};

export default OrderActions;
