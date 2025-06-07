import React from "react";
import "./Discount.css";
const Discount = () => {
  return (
    <div className="coupon-container">
      <form>
        <div className="coupon-box">
          <div className="coupon-header">
            <h3 className="coupon-title">Have any discount code?</h3>
          </div>

          <div className="coupon-body">
            <div className="coupon-input-wrapper">
              <div className="coupon-input-container">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Enter coupon code"
                  className="coupon-input"
                />
              </div>

              <button type="submit" className="coupon-button">
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
