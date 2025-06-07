import React from "react";
import "./ShopSingleItem.css";
import { useModalContext } from "../../../app/context/QuickViewModalContext";
import { useDispatch } from "react-redux";
import { updateQuickView } from "../../../redux/features/quickView-slice";
import { addItemToCart } from "../../../redux/features/cart-slice";
import { addItemToWishlist } from "../../../redux/features/wishlist-slice";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";

const ShopSingleItem = ({ item }) => {
  let { openModal } = useModalContext();
  let dispatch = useDispatch();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
    toast.success(`added to wishlist`);
  };

  // add item to wishlist
  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
    toast.info("Product Added to wishlist");
  };
  return (
    <div className="product-card group">
      <div className="product-card__container">
        <div className="product-card__content">
          <div className="product-card__rating">
            <div className="stars">
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={14}
                height={14}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={14}
                height={14}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={14}
                height={14}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={14}
                height={14}
              />
              <img
                src="/images/icons/icon-star.svg"
                alt="star icon"
                width={14}
                height={14}
              />
            </div>
            <p className="product-card__reviews">({item.reviews})</p>
          </div>

          <h3 className="product-card__title">
            <Link to="/shop-details" className="shopping-item-title">
              {item.title}
            </Link>
          </h3>

          <span className="product-card__price">
            <span className="product-card__discounted">
              ${item.discountedPrice}
            </span>
            <span className="product-card__original">${item.price}</span>
          </span>
        </div>

        <div className="product-card__image-container">
          <img src={item.imgs.previews[0]} alt="" width={280} height={280} />
        </div>

        <div className="product-card__actions">
          <button
            onClick={() => {
              handleQuickViewUpdate();
              openModal();
            }}
            aria-label="button for quick view"
            id="bestOne"
            className="action-btn action-btn--quickview"
          >
            {/* svg quick view icon */}
            <MdOutlineRemoveRedEye className="eye-btn" />
          </button>

          <button
            onClick={() => handleAddToCart()}
            aria-label="button for add to cart"
            id="addCartOne"
            className="action-btn action-btn--addcart"
          >
            {/* svg add to cart icon */}
            <BsCartCheck />
          </button>

          <button
            onClick={() => handleItemToWishList()}
            aria-label="button for add to fav"
            id="addFavOne"
            className="action-btn action-btn--fav"
          >
            {/* svg fav icon */}
            <CiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopSingleItem;
