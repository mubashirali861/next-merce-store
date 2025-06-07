import React from "react";
import "./SingleItem.css";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "../../redux/features/wishlist-slice";
import { addItemToCart } from "../../redux/features/cart-slice";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
const SingleItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item.id));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };
  return (
    <div className="wishlist-item">
      <div className="remove-button">
        <button
          onClick={handleRemoveFromWishlist}
          aria-label="Remove product from wishlist"
          className="remove-icon"
        >
          {/* cancel-icon.svg */}
          <FaRegTrashCan />
        </button>
      </div>

      <div className="product-info">
        <div className="product-row">
          <div className="product-left">
            <div className="product-thumbnail">
              <img
                src={item.imgs?.thumbnails[0]}
                alt="product"
                width={80}
                height={80}
              />
            </div>
            <div>
              <h3 className="product-title">
                <Link to="/" className="product-title-link">
                  {item.title}
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="product-price">
        <p>${item.discountedPrice}</p>
      </div>

      <div className="product-status">
        <div className="status-content">
          {/* info-icon.svg */}
          <span className="status-text">Out of Stock</span>
        </div>
      </div>

      <div className="add-cart">
        <button onClick={handleAddToCart} className="add-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
