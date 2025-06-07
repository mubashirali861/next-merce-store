import React from "react";
import "./ShopWithoutSidebar.css";
import BreadCrumb from "./../common/BreadCrumb";
import SingleGridItem from "./../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { useState, useEffect } from "react";
import CustomSelectShop from "../ShopWithSideBar/CustomSelectShop";
import { FiGrid } from "react-icons/fi";
import { IoIosList } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopWithoutSidebar = () => {
  const [productStyle, setProductStyle] = useState("grid");
  let [shopData, setShopData] = useState([]);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getShopData = async () => {
      try {
        let res = await axios.get(`${port}/shopData`);
        setShopData(res.data);
      } catch (error) {
        console.log("Failed to load shopdata:", error);
      }
    };
    getShopData();
  }, []);

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Best Selling", value: "1" },
    { label: "Old Products", value: "2" },
  ];
  return (
    <>
      <BreadCrumb
        title="Explore All Products"
        pages={["shop", "/", "shop without sidebar"]}
      />
      <section className="product-section">
        <div className="product-container">
          <div className="product-content-wrapper">
            <div className="product-toolbar">
              <div className="product-toolbar-left">
                <CustomSelectShop options={options} />
                <p>
                  Showing <span className="text-highlight">9 of 50</span>{" "}
                  Products
                </p>
              </div>

              <div className="product-toolbar-right">
                <button
                  onClick={() => setProductStyle("grid")}
                  aria-label="button for product grid tab"
                  className={`custom-button-grid ${
                    productStyle === "grid" ? "active" : ""
                  }`}
                >
                  {/* grid icon */}
                  <FiGrid />
                </button>

                <button
                  onClick={() => setProductStyle("list")}
                  aria-label="button for product list tab"
                  className={`custom-button-list ${
                    productStyle === "list" ? "active" : ""
                  }`}
                >
                  {/* list icon */}
                  <IoIosList />
                </button>
              </div>
            </div>

            <div
              className={`product-items ${
                productStyle === "grid" ? "grid-view" : "list-view"
              }`}
            >
              {shopData.map((item, key) =>
                productStyle === "grid" ? (
                  <SingleGridItem item={item} key={key} />
                ) : (
                  <SingleListItem item={item} key={key} />
                )
              )}
            </div>

            {/* <!-- Products Grid Tab Content End --> */}

            {/* <!-- Products Pagination Start --> */}
            <div className="pagination-container">
              <div className="pagination-wrapper">
                <ul className="pagination-list">
                  <li>
                    <button
                      id="paginationLeft"
                      aria-label="button for pagination left"
                      type="button"
                      disabled
                      className="pagination-button pagination-button--disabled"
                    >
                      {/* Image: left-arrow.svg */}

                      <FaArrowLeft />
                    </button>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="pagination-link pagination-link--active"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pagination-link">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pagination-link">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pagination-link">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pagination-link">
                      5
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pagination-link">
                      ...
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="pagination-link">
                      10
                    </Link>
                  </li>

                  <li>
                    <button
                      id="paginationRight"
                      aria-label="button for pagination right"
                      type="button"
                      className="pagination-button"
                    >
                      {/* Image: right-arrow.svg */}
                      <FaArrowRight />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Products Pagination End --> */}
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopWithoutSidebar;
