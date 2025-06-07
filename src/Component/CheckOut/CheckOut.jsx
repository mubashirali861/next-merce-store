import React from "react";
import "./CheckOut.css";
import BreadCrumb from "./../common/BreadCrumb";
import Login from "./Login";
import Billing from "./Billing";
import Shipping from "./Shipping";
import Coupon from "./Coupon";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
const CheckOut = () => {
  return (
    <>
      <BreadCrumb title={"Checkout"} pages={["checkout"]} />
      <section className="checkout-section">
        <div className="checkout-container">
          <form>
            <div className="checkout-form">
              {/* Checkout Left */}
              <div className="checkout-left">
                <Login />
                <Billing />
                <Shipping />

                {/* Other Notes */}
                <div className="checkout-notes">
                  <div>
                    <label htmlFor="notes">Other Notes (optional)</label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={5}
                      placeholder="Notes about your order, e.g. speacial notes for delivery."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Checkout Right */}
              <div className="checkout-right">
                <div className="order-box">
                  <div className="order-box-header">
                    <h3>Your Order</h3>
                  </div>

                  <div className="order-box-body">
                    <div className="order-title">
                      <h4>Product</h4>
                      <h4 className="text-right">Subtotal</h4>
                    </div>

                    <div className="order-item">
                      <p>iPhone 14 Plus , 6/128GB</p>
                      <p className="text-right">$899.00</p>
                    </div>

                    <div className="order-item">
                      <p>Asus RT Dual Band Router</p>
                      <p className="text-right">$129.00</p>
                    </div>

                    <div className="order-item">
                      <p>Havit HV-G69 USB Gamepad</p>
                      <p className="text-right">$29.00</p>
                    </div>

                    <div className="order-item">
                      <p>Shipping Fee</p>
                      <p className="text-right">$15.00</p>
                    </div>

                    <div className="order-total">
                      <p>Total</p>
                      <p className="text-right">$1072.00</p>
                    </div>
                  </div>
                </div>

                <div className="coupon-box">
                  <Coupon />
                </div>

                <div className="shipping-box">
                  <ShippingMethod />
                </div>

                <div className="payment-box">
                  <PaymentMethod />
                </div>

                <button type="submit" className="checkout-button">
                  Process to Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
