import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { useModalContext } from "./../../app/context/QuickViewModalContext";
import { updateQuickView } from "../../redux/features/quickView-slice";
import { addItemToCart } from "../../redux/features/cart-slice";
import { addItemToWishlist } from "../../redux/features/wishlist-slice";
import { updateproductDetails } from "../../redux/features/product-details";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductItem = ({ item }) => {
  let { openModal } = useModalContext();
  let dispatch = useDispatch();

  let handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
    setTimeout(() => {
      openModal();
    }, 0);
  };

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

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  return (
    <div className="product-group">
      <div className="product-container">
        <img src={item.imgs.previews[0]} alt="" width={250} height={250} />

        <div className="product-overlay">
          <button
            onClick={handleQuickViewUpdate}
            id="new-one"
            aria-label="button for quick view"
            className="icon-button"
          >
            <MdOutlineRemoveRedEye height={16} width={16} />
          </button>

          <button
            onClick={() => handleAddToCart()}
            className="custom-button-addtocart"
          >
            Add to cart
          </button>

          <button
            onClick={() => handleItemToWishList()}
            aria-label="button for favorite select"
            id="favOne"
            className="custom-button-handleitemwishlist"
          >
            <CiHeart height={16} width={16} />
          </button>
        </div>
      </div>

      <div className="custom-flex-product">
        <div className="custom-flex-gap-product">
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

        <p className="custom-txt-product-dscrp">( {item.reviews})</p>
      </div>

      <h3
        className="custom-txt-heading-product"
        onClick={() => handleProductDetails()}
      >
        <Link to="/shop-details" className="new-arrival-item-title">
          {item.title}
        </Link>
      </h3>

      <span className="custom-span-product-price">
        <span className="text-dark-discount">${item.discountedPrice}</span>
        <span className="teaxt-dark-price">${item.price}</span>
      </span>
    </div>
  );
};

export default ProductItem;
