import React from "react";
import "./Coupon.css";
const Coupon = () => {
  return (
    <div className="coupon-wrapper">
      <div className="coupon-header">
        <h3 className="coupon-title">Have any Coupon Code?</h3>
      </div>

      <div className="coupon-body">
        <div className="coupon-form">
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Enter coupon code"
            className="coupon-input"
          />

          <button type="submit" className="coupon-btn">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
