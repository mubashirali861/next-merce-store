import "./SingleItem.css";
import React from "react";
import { useDispatch } from "react-redux";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";

const SingleItem = ({ item, removeItemFromCart }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <div className="cart-item__image-wrapper">
          <img
            src={item.imgs?.thumbnails[0]}
            alt="product"
            className="cart-item__image"
          />
        </div>

        <div className="cart-item__details">
          <h3 className="cart-item__title">
            <Link to="/" className="side-bar-title">
              {" "}
              {item.title}{" "}
            </Link>
          </h3>
          <p className="cart-item__price">Price: ${item.discountedPrice}</p>
        </div>
      </div>

      <button
        onClick={handleRemoveFromCart}
        aria-label="button for remove product from cart"
        className="cart-item__remove-btn"
      >
        {/* replace with: delete-icon.svg */}
        <GoTrash />
      </button>
    </div>
  );
};

export default SingleItem;
