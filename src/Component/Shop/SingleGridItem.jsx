import React from "react";
import "./SingleGridItem.css";
import { useModalContext } from "./../../app/context/QuickViewModalContext";
import { updateQuickView } from "../../redux/features/quickView-slice";
import { addItemToCart } from "../../redux/features/cart-slice";
import { addItemToWishlist } from "../../redux/features/wishlist-slice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
const SingleGridItem = ({ item }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch();

  // Update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // Add to cart
  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
    toast.success("Added to cart");
  };

  // Add to wishlist
  const handleItemToWishList = () => {
    dispatch(addItemToWishlist({ ...item, status: "available", quantity: 1 }));
    toast.success("Product Added to Wishlist");
  };
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={item.imgs.previews[0]} alt="" width={250} height={250} />

        <div className="product-actions">
          <button
            onClick={() => {
              openModal();
              handleQuickViewUpdate();
            }}
            id="newOne"
            aria-label="button for quick view"
            className="icon-button"
          >
            {/* Replace with <img src="/icons/view.svg" alt="Quick View" /> */}
            <FiEye />
          </button>

          <button
            onClick={() => handleAddToCart()}
            className="add-to-cart-button"
          >
            Add to cart
          </button>

          <button
            onClick={() => handleItemToWishList()}
            aria-label="button for favorite select"
            id="favOne"
            className="icon-button"
          >
            {/* Replace with <img src="/icons/heart.svg" alt="Wishlist" /> */}
            <CiHeart />
          </button>
        </div>
      </div>

      <div className="product-rating">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={15}
              height={15}
            />
          ))}
        </div>
        <p className="review-count">({item.reviews})</p>
      </div>

      <h3 className="product-title">
        <Link to="/shop-details" className="shop-detail-link">
          {item.title}
        </Link>
      </h3>

      <span className="product-price">
        <span className="discounted">${item.discountedPrice}</span>
        <span className="original">${item.price}</span>
      </span>
    </div>
  );
};

export default SingleGridItem;
