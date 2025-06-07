import React, { useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import "./UpperNavbar.css";
import CustomSelect from "./CustomSelect";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DropDown from "./DropDown";
import { useCartModalContext } from "./../../app/context/CartSideBarModalContext";
import { selectTotalPrice } from "../../redux/features/cart-slice";
import { useSelector } from "react-redux";

const UpperNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [menuData, setMenuData] = useState([]);

  const { openCartModal } = useCartModalContext();

  const product = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleOpenCartModal = () => {
    openCartModal();
  };

  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getMenuData = async () => {
      try {
        let response = await axios.get(`${port}/menu`);
        setMenuData(response.data);
      } catch (err) {
        console.log("Failed to load menu data:", err);
      }
    };
    getMenuData();
  }, []);
  let handleStickyMenu = () => {
    if (window.scroll > 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  const options = [
    { label: "All Categories", value: "0" },
    { label: "Desktop", value: "1" },
    { label: "Laptop", value: "2" },
    { label: "Monitor", value: "3" },
    { label: "Phone", value: "4" },
    { label: "Watch", value: "5" },
    { label: "Mouse", value: "6" },
    { label: "Tablet", value: "7" },
  ];

  return (
    <header className={`header ${stickyMenu ? "sticky" : ""}`}>
      <div className="main-flex-container">
        {/* header top start */}
        <div className={`container ${stickyMenu ? "sticky-1" : ""}`}>
          {/* header top left  */}
          <div className="top-left">
            <Link to="/" className="shrink-a">
              <img
                className="a-img-logo"
                src="/images/Logo/logo.svg"
                alt="Logo"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <div className="search-container">
              <form>
                <div className="form-combined">
                  <CustomSelect options={options} />

                  <div className="search-bar">
                    <span className="line-search-bar"></span>
                    <input
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      type="search"
                      name="search"
                      id="search"
                      placeholder="I am shopping for..."
                      autoComplete="off"
                      className="search-input"
                    />
                    <button aria-label="Search" className="search-btn">
                      <GoSearch />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* HEADER TOP RIGHT */}
          <div className="top-right">
            <div className="top-right-detail">
              <div className="icon-style">
                <FaPhoneVolume />
              </div>
              <div>
                <span className="phone-detail">24/7 Support</span>
                <p className="phone-number">(+965) 7492-3477</p>
              </div>
            </div>
            {/* Divider  */}
            <span className="line-span"></span>
            <div className="top-right-second">
              <div className="signin-detail">
                <Link to="/signin" className="link-style">
                  <div className="icon-style">
                    <BsPerson />
                  </div>
                  <div>
                    <span className="account-style">account</span>
                    <p className="font-style">Sign In</p>
                  </div>
                </Link>

                <button className="cart-button" onClick={handleOpenCartModal}>
                  <span className="cart-span">
                    <div className="icon-style">
                      <BsCartCheck className="bascart-Check" />
                    </div>
                    <span className="product-length">{product.length}</span>
                  </span>
                  <div>
                    <span className="cart-uppernavbar">cart</span>
                    <p className="font-medium text-custom-sm text-dark">
                      ${totalPrice}
                    </p>
                  </div>
                </button>
              </div>
              {/* Humburger toggle btn  */}

              <button
                className="toggle-btn"
                aria-label="Toggler"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                <span className="main-span">
                  <span className="toggle-span">
                    <span
                      className={`toggle-span-1 ${
                        !navigationOpen ? "navigation-closed-1" : ""
                      }`}
                    ></span>
                    <span
                      className={`toggle-span-2 ${
                        !navigationOpen ? "navigation-closed-2" : ""
                      }`}
                    ></span>
                    <span
                      className={`toggle-span-3 ${
                        !navigationOpen ? "navigation-closed-3" : ""
                      }`}
                    ></span>
                  </span>

                  <span className="main-closed-span">
                    <span
                      className={`close-span-1 ${
                        !navigationOpen ? "navigation-closer-1" : ""
                      }`}
                    ></span>
                    <span
                      className={`close-span-2 ${
                        !navigationOpen ? "navigation-closer-2" : ""
                      }`}
                    ></span>
                  </span>
                </span>
              </button>
              {/*  Humbuger toggle btn complete */}
            </div>
          </div>
        </div>
        {/* header top end */}
      </div>

      <>
        {/* <MainnavBar navigationOpen={navigationOpen} stickyMenu={stickyMenu} /> */}
      </>
      <div className="border-top-gray">
        <div className="main-nav-size">
          <div className="flex-container">
            {/* Nav Start */}
            <div className={`nav-menu${navigationOpen ? " open" : ""}`}>
              {/* MAin nav start */}
              <nav>
                <ul className="nav-list">
                  {menuData.map((menuItem, i) =>
                    menuItem.submenu ? (
                      <DropDown
                        key={i}
                        menuItem={menuItem}
                        stickyMenu={stickyMenu}
                      />
                    ) : (
                      <li className="nav-link-li" key={i}>
                        <Link
                          to={menuItem.path}
                          className={`nav-link ${!stickyMenu ? "sticky" : ""}`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
              {/* Main nav end  */}
            </div>
            {/* Main nav end  */}

            {/* Main nav Right Starts */}

            <div className="responsive-show-xl">
              <ul className="flex-gap-center">
                <li className="padding-y-4">
                  <Link to="/" className="flex-link">
                    <FaArrowsRotate />
                    Recently Viewed
                  </Link>
                </li>
                <li className="padding-y-4">
                  <Link to="/wishlist" className="flex-link">
                    <CiHeart />
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpperNavbar;
