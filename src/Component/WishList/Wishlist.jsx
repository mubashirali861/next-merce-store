import React from "react";
import "./Wishlist.css";
import BreadCrumb from "../common/BreadCrumb";
import SingleItem from "./SingleItem";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlistReducer.items);
  return (
    <>
      <section>
        <BreadCrumb title="Wishlist" pages={["Wishlist"]} />
      </section>

      {wishlistItems.length > 0 ? (
        <section className="wishlist-section">
          <div className="wishlist-container">
            <div className="wishlist-header">
              <h2 className="wishlist-title">Your Wishlist</h2>
              <button className="wishlist-clear-btn">
                Clear Wishlist Cart
              </button>
            </div>

            <div className="wishlist-box">
              <div className="wishlist-scroll">
                <div className="wishlist-table">
                  {/* <!-- table header --> */}
                  <div className="wishlist-table-header">
                    <div className="col-action-placeholder"></div>
                    <div className="col-product">
                      <p className="text-dark">Product</p>
                    </div>
                    <div className="col-price">
                      <p className="text-dark">Unit Price</p>
                    </div>
                    <div className="col-stock">
                      <p className="text-dark">Stock Status</p>
                    </div>
                    <div className="col-action">
                      <p className="text-dark text-right">Action</p>
                    </div>
                  </div>

                  {/* <!-- wishlist items --> */}
                  {wishlistItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="cart-empty">
          <div className="cart-empty-icon">
            {/* Replaced SVG with image placeholder */}
            {/* <img src="empty-cart.svg" alt="Empty Cart" /> */}
            <MdOutlineShoppingCart className="empty-cart-img" />
          </div>
          <p className="cart-empty-text">Your cart is empty!</p>

          <Link to="/shop-with-sidebar" className="cart-continue-btn">
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Wishlist;
