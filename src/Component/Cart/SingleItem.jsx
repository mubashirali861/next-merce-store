import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "../../redux/features/cart-slice";
import "./SingleItem.css";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateCartItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateCartItemQuantity({ id: item.id, quantity: newQuantity }));
    }
  };
  return (
    <div className="cart-item-row">
      <div className="cart-item-product">
        <div className="cart-item-product-wrapper">
          <div className="cart-item-image-container">
            <img
              width={80}
              height={80}
              src={item.imgs?.thumbnails[0]}
              alt="product"
            />
          </div>

          <div>
            <h3 className="cart-item-title">
              <Link to="/" className="singleitem-cart-title">
                {item.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>

      <div className="cart-item-price">
        <p>${item.discountedPrice}</p>
      </div>

      <div className="cart-item-qty">
        <div className="cart-item-qty-wrapper">
          <button
            onClick={() => handleDecreaseQuantity()}
            aria-label="button for remove product"
            className="cart-item-btn cart-item-btn-decrease"
          >
            {/* <img src="minus-icon.svg" alt="Decrease quantity" /> */}
            <FaMinus />
          </button>

          <span className="cart-item-qty-value">{quantity}</span>

          <button
            onClick={() => handleIncreaseQuantity()}
            aria-label="button for add product"
            className="cart-item-btn cart-item-btn-increase"
          >
            {/* <img src="plus-icon.svg" alt="Increase quantity" /> */}
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="cart-item-subtotal">
        <p>${item.discountedPrice * quantity}</p>
      </div>

      <div className="cart-item-action">
        <button
          onClick={() => handleRemoveFromCart()}
          aria-label="button for remove product from cart"
          className="cart-item-remove-btn"
        >
          {/* <img src="trash-icon.svg" alt="Remove item" /> */}
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
