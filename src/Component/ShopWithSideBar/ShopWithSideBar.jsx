import React from "react";
import "./ShopWithSideBar.css";
import { useState, useEffect } from "react";
import BreadCrumb from "../common/BreadCrumb";
import CustomSelectShop from "./CustomSelectShop";
import { FiGrid } from "react-icons/fi";
import { IoIosList } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import CategoryDropdown from "./CategoryDropdown";
import GenderDropdown from "./GenderDropdown";
import SizeDropdown from "./SizeDropdown";
import ColorsDropdwon from "./ColorsDropdwon";
import PriceDropdown from "./PriceDropdown";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import axios from "axios";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import Footer from "./../Footer/Footer";

const ShopWithSideBar = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
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
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Best Selling", value: "1" },
    { label: "Old Products", value: "2" },
  ];

  const categories = [
    {
      name: "Desktop",
      products: 10,
      isRefined: true,
    },
    {
      name: "Laptop",
      products: 12,
      isRefined: false,
    },
    {
      name: "Monitor",
      products: 30,
      isRefined: false,
    },
    {
      name: "UPS",
      products: 23,
      isRefined: false,
    },
    {
      name: "Phone",
      products: 10,
      isRefined: false,
    },
    {
      name: "Watch",
      products: 13,
      isRefined: false,
    },
  ];

  const genders = [
    {
      name: "Men",
      products: 10,
    },
    {
      name: "Women",
      products: 23,
    },
    {
      name: "Unisex",
      products: 8,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    // closing sidebar while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <BreadCrumb
        title={"Explore All Products"}
        pages={["shop", "/", "shop with sidebar"]}
      />

      <section className="shop-with-sidebar-section">
        <div className="shop-with-sidebar-container">
          <div className="shop-with-sidebar-header">
            {/* content start */}
            <div
              className={`sidebar-container ${
                productSidebar ? "sidebar-open" : "sidebar-closed"
              }`}
            >
              <button
                onClick={() => setProductSidebar(!productSidebar)}
                aria-label="button for product sidebar toggle"
                className={`toggle-button ${
                  stickyMenu ? "is-sticky" : "not-sticky"
                }`}
              >
                {/* Replace with image: toggle-arrow.svg */}
                <MdArrowDropDown />
              </button>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="sidebar-form">
                  {/* Filter Box */}
                  <div className="filter-box">
                    <div className="filter-header">
                      <p>Filters:</p>
                      <button className="clear-button">Clean All</button>
                    </div>
                  </div>

                  {/* Dropdown Components */}
                  <CategoryDropdown categories={categories} />
                  <GenderDropdown genders={genders} />
                  <SizeDropdown />
                  <ColorsDropdwon />
                  <PriceDropdown />
                </div>
              </form>
            </div>
            {/* // <!-- Sidebar End --> */}

            {/* // <!-- Content Start --> */}
            <div className="custom-xl-container-870">
              <div className="top-bar">
                <div className="top-bar-content">
                  {/* top bar left */}
                  <div className="top-bar-left">
                    <CustomSelectShop options={options} />
                    <p>
                      Showing <span className="text-dark">9 of 50</span>{" "}
                      Products
                    </p>
                  </div>

                  {/* top bar right */}
                  <div className="top-bar-right">
                    <button
                      onClick={() => setProductStyle("grid")}
                      aria-label="button for product grid tab"
                      className={`view-toggle-button ${
                        productStyle === "grid" ? "active" : ""
                      }`}
                    >
                      {/* img: grid-icon.svg */}
                      <FiGrid />
                    </button>

                    <button
                      onClick={() => setProductStyle("list")}
                      aria-label="button for product list tab"
                      className={`view-toggle-button ${
                        productStyle === "list" ? "active" : ""
                      }`}
                    >
                      {/* img: list-icon.svg */}
                      <IoIosList />
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Products Grid Tab Content Start --> */}
              <div
                className={`product-layout ${
                  productStyle === "grid" ? "layout--grid" : "layout--list"
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
              {/*   Products Grid Tab Content End*/}
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
            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ShopWithSideBar;
