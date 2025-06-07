import React from "react";
import "./OrderSummary.css";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/features/cart-slice";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="order-container">
      <div className="order-box">
        <div className="order-header">
          <h3 className="order-title">Order Summary</h3>
        </div>

        <div className="order-content">
          <div className="order-row order-row--title">
            <div>
              <h4 className="order-subtitle">Product</h4>
            </div>
            <div>
              <h4 className="order-subtitle order-subtitle--right">Subtotal</h4>
            </div>
          </div>

          {cartItems.map((item, key) => (
            <div key={key} className="order-row">
              <div>
                <p className="order-item-title">{item.title}</p>
              </div>
              <div>
                <p className="order-item-price">
                  ${item.discountedPrice * item.quantity}
                </p>
              </div>
            </div>
          ))}

          <div className="order-total">
            <div>
              <p className="order-total-label">Total</p>
            </div>
            <div>
              <p className="order-total-value">${totalPrice}</p>
            </div>
          </div>

          <button type="submit" className="order-button">
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
