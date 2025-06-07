import React from "react";
import { useEffect } from "react";
import "./CartSidebarModal.css";
import { useCartModalContext } from "./../../../app/context/CartSideBarModalContext";
import {
  removeItemFromCart,
  selectTotalPrice,
} from "../../../redux/features/cart-slice";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const CartSidebarModal = () => {
  const { isCartModalOpen, closeCartModal } = useCartModalContext();

  const cartItems = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    // Close modal when clicking outside the modal content
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeCartModal();
      }
    }

    if (isCartModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartModalOpen, closeCartModal]);

  return (
    <div className={`cart-modal ${isCartModalOpen ? "open" : ""}`}>
      <div className="cart-modal__wrapper">
        <div className="cart-modal__panel modal-content">
          <div className="cart-modal__header">
            <h2 className="cart-modal__title">Cart View</h2>
            <button
              onClick={closeCartModal}
              aria-label="button for close modal"
              className="cart-modal__close-btn"
            >
              {/* close-icon.svg */}
              <IoMdClose />
            </button>
          </div>

          <div className="cart-modal__items">
            <div className="cart-modal__items-wrapper">
              {cartItems.length > 0 ? (
                cartItems.map((item, key) => (
                  <SingleItem
                    key={key}
                    item={item}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>

          <div className="cart-modal__footer">
            <div className="cart-modal__subtotal">
              <p className="cart-modal__subtotal-label">Subtotal:</p>
              <p className="cart-modal__subtotal-value">${totalPrice}</p>
            </div>

            <div className="cart-modal__actions">
              <Link
                to="/cart"
                onClick={closeCartModal}
                className="cart-modal__view-cart"
              >
                View Cart
              </Link>
              <Link to="/checkout" className="cart-modal__checkout">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebarModal;
