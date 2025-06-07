import React from "react";
import "./ShopDetail.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePreviewSlider } from "../../app/context/PreViewSliderContext";
import RecentlyViewdItems from "./RecentlyViewed/RecentlyViewdItems";
import NewsLetter from "./../common/NewsLetter";
import BreadCrumb from "./../common/BreadCrumb";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { PiRectangleDashedLight } from "react-icons/pi";
const ShopDetail = () => {
  const [activeColor, setActiveColor] = useState("blue");
  const [previewImg, setPreviewImg] = useState(0);
  const [storage, setStorage] = useState("gb128");
  const [type, setType] = useState("active");
  const [sim, setSim] = useState("dual");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tabOne");

  const storages = [
    { id: "gb128", title: "128 GB" },
    { id: "gb256", title: "256 GB" },
    { id: "gb512", title: "521 GB" },
  ];

  const types = [
    { id: "active", title: "Active" },
    { id: "inactive", title: "Inactive" },
  ];

  const sims = [
    { id: "dual", title: "Dual" },
    { id: "e-sim", title: "E Sim" },
  ];

  const tabs = [
    { id: "tabOne", title: "Description" },
    { id: "tabTwo", title: "Additional Information" },
    { id: "tabThree", title: "Reviews" },
  ];

  const colors = ["red", "blue", "orange", "pink", "purple"];

  const { openPreviewModal } = usePreviewSlider();

  const productFromStorage = useSelector(
    (state) => state.productDetailsReducer.value
  );
  // get product from localStorage or Redux store
  const alreadyExist = localStorage.getItem("productDetails");
  const product = alreadyExist ? JSON.parse(alreadyExist) : productFromStorage;

  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(product));
  }, [product]);

  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  return (
    <>
      <BreadCrumb title={"Shop Details"} pages={["shop details"]} />
      {product?.title === "" ? (
        "Please add product"
      ) : (
        <>
          <section className="first-section-shop-detail">
            <div className="first-shop-detail-container">
              <div className="flex-shop-detail">
                <div className="image-container">
                  <div className="image-preview-wrapper">
                    <div>
                      <button
                        onClick={handlePreviewSlider}
                        aria-label="button for zoom"
                        className="zoom-button"
                      >
                        {/* Replace with your zoom icon */}

                        <PiRectangleDashedLight />
                        {/* You can replace "zoom-icon.svg" with your actual filename */}
                      </button>

                      <img
                        src={product.imgs?.previews[previewImg]}
                        alt="products-details"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>

                  <div className="">
                    {product.imgs?.thumbnails.map((thumb, key) => (
                      <button
                        onClick={() => setPreviewImg(key)}
                        key={key}
                        className={`thumbnail-button ${
                          key === previewImg ? "active" : ""
                        }`}
                      >
                        <img
                          width={50}
                          height={50}
                          src={thumb}
                          alt="thumbnail"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                {/* <!-- product content --> */}
                <div style={{ maxWidth: "539px", width: "100%" }}>
                  <div className="product-header">
                    <h2 className="product-title">{product.title}</h2>

                    <div className="discount-badge">30% OFF</div>
                  </div>
                  <div className="product-meta">
                    <div className="product-rating">
                      {/* <!-- stars --> */}
                      <div className="rating-stars">
                        {/* Replace SVG with star image */}
                        <img
                          src="/images/icons/icon-star.svg"
                          alt="star"
                          width="18"
                          height="18"
                        />
                        <img
                          src="/images/icons/icon-star.svg"
                          alt="star"
                          width="18"
                          height="18"
                        />
                        <img
                          src="/images/icons/icon-star.svg"
                          alt="star"
                          width="18"
                          height="18"
                        />
                        <img
                          src="/images/icons/icon-star.svg"
                          alt="star"
                          width="18"
                          height="18"
                        />
                        <img
                          src="/images/icons/icon-star.svg"
                          alt="star"
                          width="18"
                          height="18"
                        />
                      </div>
                      <span> (5 customer reviews) </span>
                    </div>

                    <div className="product-stock">
                      {/* Replace SVG with checkmark image */}
                      <CiCircleCheck className="free-check-btn-2" />
                      <span>In Stock</span>
                    </div>
                  </div>
                  <h3 className="product-price">
                    <span>Price: ${product.price}</span>
                    <span className="line-through">
                      {" "}
                      ${product.discountedPrice}{" "}
                    </span>
                  </h3>

                  <ul className="feature-list">
                    <li className="feature-item">
                      {/* icon-check-blue.png */}
                      <CiCircleCheck className="free-check-btn" />
                      Free delivery available
                    </li>

                    <li className="feature-item">
                      {/* icon-check-blue.png */}
                      <CiCircleCheck className="free-check-btn" />
                      Sales 30% Off Use Code: PROMO30
                    </li>
                  </ul>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="product-form">
                      {/* <!-- details item --> */}
                      <div className="details-item">
                        <div className="details-label">
                          <h4>Color:</h4>
                        </div>

                        <div className="color-options">
                          {colors.map((color, key) => (
                            <label
                              key={key}
                              htmlFor={color}
                              className="color-radio"
                            >
                              <div className="relative">
                                <input
                                  type="radio"
                                  name="color"
                                  id={color}
                                  className="sr-only"
                                  onChange={() => setActiveColor(color)}
                                />
                                <div
                                  className="color-circle-wrapper"
                                  style={{
                                    border:
                                      activeColor === color
                                        ? `2px solid ${color}`
                                        : "2px solid transparent",
                                  }}
                                >
                                  <span
                                    className="color-circle-inner"
                                    style={{ backgroundColor: color }}
                                  ></span>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="details-group">
                        {/* Storage */}
                        <div className="details-item">
                          <div className="details-label">
                            <h4>Storage:</h4>
                          </div>
                          <div className="options-container">
                            {storages.map((item, key) => (
                              <label
                                key={key}
                                htmlFor={item.id}
                                className="checkbox-label"
                              >
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    name="storage"
                                    id={item.id}
                                    className="checkbox-input"
                                    onChange={() => setStorage(item.id)}
                                  />
                                  <div
                                    className={`checkbox-box ${
                                      storage === item.id ? "checked" : ""
                                    }`}
                                  >
                                    {storage === item.id && (
                                      // ✅ Replace SVG with image
                                      // 🔽 Image file name: check-white.png
                                      <FaCheck className="check-btn-white" />
                                    )}
                                  </div>
                                </div>
                                {item.title}
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Type */}
                        <div className="details-item">
                          <div className="details-label">
                            <h4>Type:</h4>
                          </div>
                          <div className="options-container">
                            {types.map((item, key) => (
                              <label
                                key={key}
                                htmlFor={item.id}
                                className="checkbox-label"
                              >
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    name="type"
                                    id={item.id}
                                    className="checkbox-input"
                                    onChange={() => setType(item.id)}
                                  />
                                  <div
                                    className={`checkbox-box ${
                                      type === item.id ? "checked" : ""
                                    }`}
                                  >
                                    {type === item.id && (
                                      // ✅ Replace SVG with image
                                      // 🔽 Image file name: check-white.png
                                      <FaCheck className="check-btn-white" />
                                    )}
                                  </div>
                                </div>
                                {item.title}
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Sim */}
                        <div className="details-item">
                          <div className="details-label">
                            <h4>Sim:</h4>
                          </div>
                          <div className="options-container">
                            {sims.map((item, key) => (
                              <label
                                key={key}
                                htmlFor={item.id}
                                className="checkbox-label"
                              >
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    name="sim"
                                    id={item.id}
                                    className="checkbox-input"
                                    onChange={() => setSim(item.id)}
                                  />
                                  <div
                                    className={`checkbox-box ${
                                      sim === item.id ? "checked" : ""
                                    }`}
                                  >
                                    {sim === item.id && (
                                      // ✅ Replace SVG with image
                                      // 🔽 Image file name: check-white.png

                                      <FaCheck className="check-btn-white" />
                                    )}
                                  </div>
                                </div>
                                {item.title}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="quantity-wrapper">
                      <div className="quantity-control">
                        <button
                          aria-label="button for remove product"
                          className="quantity-button"
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                        >
                          {/* Minus Icon (img name: minus-icon.svg) */}

                          <FaMinus />
                        </button>

                        <span className="quantity-value">{quantity}</span>

                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          aria-label="button for add product"
                          className="quantity-button"
                        >
                          {/* Plus Icon (img name: plus-icon.svg) */}

                          <FaPlus />
                        </button>
                      </div>

                      <Link to="/" className="purchase-btn">
                        Purchase Now
                      </Link>

                      <Link to="/" className="wishlist-btn">
                        {/* Heart Icon (img name: heart-outline.svg) */}
                        <CiHeart />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="second-section-wrapper-shop">
            <div className="second-wrapper-container">
              {/* <!--== tab header start ==--> */}
              <div className="tab-container">
                {tabs.map((item, key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(item.id)}
                    className={`tab-button ${
                      activeTab === item.id ? "active" : "inactive"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              {/* <!--== tab header end ==--> */}
              {/* <!--== tab content start ==--> */}
              {/* <!-- tab content one start --> */}
              <div>
                <div
                  className={`tab-content ${
                    activeTab === "tabOne" ? "active" : ""
                  }`}
                >
                  <div className="spec-col">
                    <h2 className="section-title">Specifications:</h2>
                    <p className="section-text">
                      Lorem Ipsum is simply dummy text...
                    </p>
                    <p className="section-text">
                      It has survived not only five centuries...
                    </p>
                    <p>with the release of Letraset sheets...</p>
                  </div>

                  <div className="care-col">
                    <h2 className="section-title">Care & Maintenance:</h2>
                    <p className="section-text">
                      Lorem Ipsum is simply dummy text...
                    </p>
                    <p>It has survived not only five centuries...</p>
                  </div>
                </div>
              </div>
              {/* <!-- tab content one end --> */}

              {/* <!-- tab content two start --> */}
              <div>
                <div
                  className={`tab-panel ${
                    activeTab === "tabTwo" ? "active" : ""
                  }`}
                >
                  {[
                    { label: "Brand", value: "Apple" },
                    { label: "Model", value: "iPhone 14 Plus" },
                    { label: "Display Size", value: "6.7 inches" },
                    {
                      label: "Display Type",
                      value:
                        "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
                    },
                    {
                      label: "Display Resolution",
                      value: "1284 x 2778 pixels, 19.5:9 ratio",
                    },
                    { label: "Chipset", value: "Apple A15 Bionic (5 nm)" },
                    {
                      label: "Memory",
                      value: "128GB 6GB RAM | 256GB 6GB RAM | 512GB 6GB RAM",
                    },
                    {
                      label: "Main Camera",
                      value:
                        "12MP + 12MP | 4K@24/25/30/60fps, stereo sound rec.",
                    },
                    {
                      label: "Selfie Camera",
                      value:
                        "12 MP | 4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
                    },
                    {
                      label: "Battery Info",
                      value:
                        "Li-Ion 4323 mAh, non-removable | 15W wireless (MagSafe), 7.5W wireless (Qi)",
                    },
                  ].map((item, index) => (
                    <div className="info-row" key={index}>
                      <div className="info-label">
                        <p>{item.label}</p>
                      </div>
                      <div className="info-text">
                        <p>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- tab content two end --> */}

              {/* <!-- tab content three start --> */}
              <div>
                <div
                  className={`tab-three ${
                    activeTab === "tabThree" ? "active" : ""
                  }`}
                >
                  <div className="review-container">
                    <h2 className="review-title">03 Review for this product</h2>

                    <div className="review-list">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="review-item">
                          <div className="review-header">
                            <a href="#" className="review-author">
                              <div className="review-avatar">
                                {/* Replace with actual image */}
                                <img
                                  src="/images/users/user-01.jpg"
                                  alt="author"
                                  className="avatar-img"
                                  width={50}
                                  height={50}
                                />
                              </div>

                              <div>
                                <h3 className="author-name">Davis Dorwart</h3>
                                <p className="author-title">
                                  Serial Entrepreneur
                                </p>
                              </div>
                            </a>

                            <div className="review-stars">
                              {/* Replace below span with star.svg image or icon */}
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="star-icon">
                                  <img
                                    src="/images/icons/icon-star.svg"
                                    alt="star"
                                  />
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="review-content">
                            “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                            malesuada justo vitae augue suscipit beautiful
                            vehicula”
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="review-wrapper">
                    <form>
                      <h2>Add a Review</h2>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>

                      <div className="review-rating">
                        <span>Your Rating*</span>
                        <div className="stars">
                          <span className="star">
                            <img src="/images/icons/icon-star.svg" alt="Star" />
                          </span>
                          <span className="star">
                            <img src="/images/icons/icon-star.svg" alt="Star" />
                          </span>
                          <span className="star">
                            <img src="/images/icons/icon-star.svg" alt="Star" />
                          </span>
                          <span className="star inactive">
                            <img src="/images/icons/icon-star.svg" alt="Star" />
                          </span>
                          <span className="star inactive">
                            <img src="/images/icons/icon-star.svg" alt="Star" />
                          </span>
                        </div>
                      </div>

                      <div className="review-form">
                        <div className="mb-5">
                          <label htmlFor="comments">Comments</label>
                          <textarea
                            id="comments"
                            name="comments"
                            rows={5}
                            placeholder="Your comments"
                          />
                          <div className="char-limit">
                            <span>Maximum</span>
                            <span>0/250</span>
                          </div>
                        </div>

                        <div className="review-inputs">
                          <div>
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your email"
                            />
                          </div>
                        </div>

                        <button type="submit">Submit Reviews</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- tab content three end --> */}
              {/* <!--== tab content end ==--> */}
            </div>
          </section>
          <RecentlyViewdItems />

          <NewsLetter />
        </>
      )}
    </>
  );
};

export default ShopDetail;
