import React from "react";
import "./SingleListItem.css";
import { Link } from "react-router-dom";
import { useModalContext } from "../../app/context/QuickViewModalContext";
import { updateQuickView } from "../../redux/features/quickView-slice";
import { addItemToCart } from "../../redux/features/cart-slice";
import { addItemToWishlist } from "../../redux/features/wishlist-slice";
import { useDispatch } from "react-redux";
import { FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";

const SingleListItem = ({ item }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch();

  // Update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // Add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
    toast.success("Added to cart");
  };

  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
    toast.success("Product Added to Wishlist");
  };

  return (
    <div className="product-card">
      <div className="product-card-inner">
        <div className="product-image-wrapper">
          <img src={item.imgs.previews[0]} alt="" width={250} height={250} />

          <div className="product-actions">
            <button
              onClick={() => {
                openModal();
                handleQuickViewUpdate();
              }}
              aria-label="button for quick view"
              className="action-button"
            >
              {/* <img src="/icons/view-icon.svg" alt="Quick view" /> */}
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
              className="action-button"
            >
              {/* <img src="/icons/heart-icon.svg" alt="Add to wishlist" /> */}
              <CiHeart />
            </button>
          </div>
        </div>

        <div className="product-info">
          <div>
            <h3 className="product-title">
              <Link to="/shop-details" className="shop-details-title">
                {item.title}
              </Link>
            </h3>
            <span className="product-price">
              <span className="price-current">${item.discountedPrice}</span>
              <span className="price-old">${item.price}</span>
            </span>
          </div>

          <div className="product-rating">
            <div className="stars">
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={15}
                height={15}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={15}
                height={15}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={15}
                height={15}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={15}
                height={15}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={15}
                height={15}
              />
            </div>
            <p className="review-count">({item.reviews})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListItem;
