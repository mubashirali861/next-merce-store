import React from "react";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import SingleItem from "./SingleItem";
import BreadCrumb from "../common/BreadCrumb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Cart.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  return (
    <>
      {/* ===== Breadcrumb Section Start ===== */}
      <section>
        <BreadCrumb title={"Cart"} pages={["Cart"]} />
      </section>
      {/* ===== Breadcrumb Section End ===== */}

      {cartItems.length > 0 ? (
        <section className="cart-section">
          <div className="cart-container">
            <div className="cart-header">
              <h2 className="cart-title">Your Cart</h2>
              <button className="cart-clear-btn">Clear Shopping Cart</button>
            </div>

            <div className="cart-table-wrapper">
              <div className="cart-table-scroll">
                <div className="cart-table-inner">
                  {/* Table Header */}
                  <div className="cart-table-header">
                    <div className="cart-col-product">Product</div>
                    <div className="cart-col-price">Price</div>
                    <div className="cart-col-qty">Quantity</div>
                    <div className="cart-col-subtotal">Subtotal</div>
                    <div className="cart-col-action">Action</div>
                  </div>

                  {/* Cart Items */}
                  {cartItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}
                </div>
              </div>
            </div>

            <div className="cart-summary-wrapper">
              <Discount />
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        <div className="cart-empty">
          <div className="cart-empty-icon">
            {/* Replaced SVG with image placeholder */}
            {/* <img src="empty-cart.svg" alt="Empty Cart" /> */}
            <MdOutlineShoppingCart className="empty-cart-img" />
          </div>
          <p className="cart-empty-text">Your cart is empty!</p>

          <Link to="/shop-with-sidebar" className="cart-continue-btn">
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
