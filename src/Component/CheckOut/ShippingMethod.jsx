import React from "react";
import "./ShippingMethod.css";
import { useState } from "react";
const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("free");
  return (
    <div className="shipping-container">
      <div className="shipping-header">
        <h3 className="shipping-title">Shipping Method</h3>
      </div>

      <div className="shipping-body">
        <div className="shipping-options">
          {/* Free Shipping */}
          <label htmlFor="free" className="shipping-label">
            <div className="relative">
              <input
                type="checkbox"
                id="free"
                name="free"
                className="sr-only"
                onChange={() => setShippingMethod("free")}
              />
              <div
                className={`shipping-radio ${
                  shippingMethod === "free" ? "selected" : "unselected"
                }`}
              ></div>
            </div>
            Free Shipping
          </label>

          {/* FedEx Shipping */}
          <label htmlFor="fedex" className="shipping-label">
            <div className="relative">
              <input
                type="checkbox"
                id="fedex"
                name="fedex"
                className="sr-only"
                onChange={() => setShippingMethod("fedex")}
              />
              <div
                className={`shipping-radio ${
                  shippingMethod === "fedex" ? "selected" : "unselected"
                }`}
              ></div>
            </div>

            <div className="shipping-box">
              <div className="shipping-box-content">
                <div className="shipping-icon">
                  <img
                    src="/images/checkout/fedex.svg"
                    alt="fedex"
                    width={64}
                    height={18}
                  />
                </div>
                <div className="shipping-text">
                  <p className="shipping-price">$10.99</p>
                  <p className="shipping-type">Standard Shipping</p>
                </div>
              </div>
            </div>
          </label>

          {/* DHL Shipping */}
          <label htmlFor="dhl" className="shipping-label">
            <div className="relative">
              <input
                type="checkbox"
                id="dhl"
                name="dhl"
                className="sr-only"
                onChange={() => setShippingMethod("dhl")}
              />
              <div
                className={`shipping-radio ${
                  shippingMethod === "dhl" ? "selected" : "unselected"
                }`}
              ></div>
            </div>

            <div className="shipping-box">
              <div className="shipping-box-content">
                <div className="shipping-icon">
                  <img
                    src="/images/checkout/dhl.svg"
                    alt="dhl"
                    width={64}
                    height={20}
                  />
                </div>
                <div className="shipping-text">
                  <p className="shipping-price">$12.50</p>
                  <p className="shipping-type">Standard Shipping</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
