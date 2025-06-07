import React from "react";
import "./EmptyCart.css";
import { useCartModalContext } from "../../../app/context/CartSideBarModalContext";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
const EmptyCart = () => {
  const { closeCartModal } = useCartModalContext();
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-image-wrapper">
        {/* Replace with: empty-cart.svg */}
        <MdOutlineShoppingCart className="empty-img" />
      </div>

      <p className="empty-cart-message">Your cart is empty!</p>

      <Link
        href="/shop-with-sidebar"
        className="continue-shopping-btn"
        onClick={closeCartModal}
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
