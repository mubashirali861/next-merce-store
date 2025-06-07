import React, { useState } from "react";
import "./PaymentMethod.css";
const PaymentMethod = () => {
  const [payment, setPayment] = useState("bank");
  return (
    <div className="payment-wrapper">
      <div className="payment-header">
        <h3 className="payment-title">Payment Method</h3>
      </div>

      <div className="payment-body">
        <div className="payment-options">
          {/* Bank */}
          <label htmlFor="bank" className="payment-option-label">
            <div className="payment-input-container">
              <input
                type="checkbox"
                id="bank"
                className="payment-hidden-input"
                onChange={() => setPayment("bank")}
              />
              <div
                className={`payment-radio ${
                  payment === "bank" ? "payment-radio-active" : ""
                }`}
              ></div>
            </div>

            <div
              className={`payment-card ${
                payment === "bank" ? "payment-card-active" : ""
              }`}
            >
              <div className="payment-card-inner">
                <div className="payment-icon">
                  <img
                    src="/images/checkout/bank.svg"
                    alt="bank"
                    width={29}
                    height={12}
                  />
                </div>
                <div className="payment-divider">
                  <p>Direct bank transfer</p>
                </div>
              </div>
            </div>
          </label>

          {/* Cash */}
          <label htmlFor="cash" className="payment-option-label">
            <div className="payment-input-container">
              <input
                type="checkbox"
                id="cash"
                className="payment-hidden-input"
                onChange={() => setPayment("cash")}
              />
              <div
                className={`payment-radio ${
                  payment === "cash" ? "payment-radio-active" : ""
                }`}
              ></div>
            </div>

            <div
              className={`payment-card payment-card-min-width ${
                payment === "cash" ? "payment-card-active" : ""
              }`}
            >
              <div className="payment-card-inner">
                <div className="payment-icon">
                  <img
                    src="/images/checkout/cash.svg"
                    alt="cash"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="payment-divider">
                  <p>Cash on delivery</p>
                </div>
              </div>
            </div>
          </label>

          {/* Paypal */}
          <label htmlFor="paypal" className="payment-option-label">
            <div className="payment-input-container">
              <input
                type="checkbox"
                id="paypal"
                className="payment-hidden-input"
                onChange={() => setPayment("paypal")}
              />
              <div
                className={`payment-radio ${
                  payment === "paypal" ? "payment-radio-active" : ""
                }`}
              ></div>
            </div>

            <div
              className={`payment-card payment-card-min-width ${
                payment === "paypal" ? "payment-card-active" : ""
              }`}
            >
              <div className="payment-card-inner">
                <div className="payment-icon">
                  <img
                    src="/images/checkout/paypal.svg"
                    alt="paypal"
                    width={75}
                    height={20}
                  />
                </div>
                <div className="payment-divider">
                  <p>Paypal</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
