import "./QuickViewModal.css";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/features/cart-slice";
import { usePreviewSlider } from "./../../app/context/PreViewSliderContext";
import { updateproductDetails } from "../../redux/features/product-details";
import { useModalContext } from "./../../app/context/QuickViewModalContext";
import { IoMdClose } from "react-icons/io";
import { PiRectangleDashedLight } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
const QuickViewModal = () => {
  const { isModalOpen, closeModal } = useModalContext();
  const { openPreviewModal } = usePreviewSlider();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const modalRef = useRef(null);

  // get the product data
  const product = useSelector((state) => state.quickViewReducer.value);

  const [activePreview, setActivePreview] = useState(0);
  // preview modal
  const handlePreviewSlider = () => {
    dispatch(updateproductDetails(product));
    openPreviewModal();
  };

  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...product,
        quantity,
      })
    );
    closeModal();
    toast.success("Added to cart");
  };

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setQuantity(1); // Reset on unmount
    };
  }, [isModalOpen, closeModal]);

  return (
    <div className={isModalOpen ? "modal-open" : "hidden"}>
      <div className="flex-container-quickview">
        <div className="custom-modal-content-quickview">
          <button
            className="modal-close-btn"
            onClick={() => closeModal()}
            aria-label="button for close modal"
          >
            <IoMdClose className="close-btn-icon" />
          </button>
          <div className="flex-wrapper-quickview">
            <div className="product-gallery">
              <div className="product-gallery__layout">
                <div className="product-gallery__thumbnails">
                  {product.imgs.thumbnails?.map((img, key) => (
                    <button
                      onClick={() => setActivePreview(key)}
                      key={key}
                      className={`thumbnail-button ${
                        activePreview === key ? "thumbnail-button--active" : ""
                      }`}
                    >
                      <img
                        src={img || ""}
                        alt="thumbnail"
                        width={61}
                        height={61}
                        className="thumbnail-image"
                      />
                    </button>
                  ))}
                </div>

                <div className="product-gallery__preview">
                  <div>
                    <button
                      onClick={handlePreviewSlider}
                      aria-label="button for zoom"
                      className="zoom-button"
                    >
                      {/* Replace with 'zoom-icon.svg' */}
                      <PiRectangleDashedLight />
                    </button>

                    <img
                      src={product?.imgs?.previews?.[activePreview]}
                      alt="products-details"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-445">
              <span className="badge-sale">SALE 20% OFF</span>

              <h3 className="product-title">{product.title}</h3>

              <div className="product-meta">
                <div className="product-rating">
                  <div className="product-stars">
                    {/* Replace with 3x star-icon.svg (filled) */}
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
                    {/* Replace with 2x star-icon.svg (gray) */}
                  </div>
                  <span>
                    <span className="rating-score">4.7 Rating</span>
                    <span className="rating-reviews">(5 reviews)</span>
                  </span>
                </div>

                <div className="product-stock">
                  {/* Replace with check-circle.svg */}
                  <FaRegCheckCircle />

                  <span className="stock-text">In Stock</span>
                </div>
              </div>

              <p className="product-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
              </p>

              <div className="product-details">
                <div className="product-price">
                  <h4 className="section-heading">Price</h4>

                  <span className="price-info">
                    <span className="price-discounted">
                      ${product.discountedPrice}
                    </span>
                    <span className="price-original">${product.price}</span>
                  </span>
                </div>

                <div className="product-quantity">
                  <h4 className="section-heading">Quantity</h4>

                  <div className="quantity-controls">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      aria-label="Decrease quantity"
                      disabled={quantity < 0 && true}
                      className="quantity-btn"
                    >
                      {/* Replace with minus-icon.svg */}
                      <FaMinus />
                    </button>

                    <span className="quantity-display">{quantity}</span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className="quantity-btn"
                    >
                      {/* Replace with plus-icon.svg */}

                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-actions">
                <button
                  disabled={quantity === 0 && true}
                  onClick={() => handleAddToCart()}
                  className="btn-cart"
                >
                  Add to Cart
                </button>

                <button className="btn-wishlist">
                  {/* Replace with heart-icon.svg */}
                  <CiHeart />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickViewModal;
