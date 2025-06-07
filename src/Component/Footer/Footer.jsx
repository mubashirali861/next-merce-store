import React from "react";
import "./Footer.css";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* <!-- footer menu start --> */}
        <div className="footer-menu-grid">
          <div className="footer-help-section">
            <h2 className="footer-heading">Help & Support</h2>

            <ul className="footer-list">
              <li className="footer-list-item-with-icon">
                <span className="footer-icon-wrapper">
                  {/* Location Icon */}
                  <GrMapLocation className="help-support-icon" />
                </span>
                685 Market Street,Las Vegas, LA 95820,United States.
              </li>

              <li>
                <Link to="/" className="footer-link-with-icon">
                  {/* Phone Icon */}
                  <FaPhoneVolume className="help-support-icon" />
                  (+099) 532-786-9843
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-link-with-icon">
                  {/* Email Icon */}
                  <MdOutlineEmail className="help-support-icon" />
                  support@example.com
                </Link>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="social-links-container">
              <Link
                to="/"
                aria-label="Facebook Social Link"
                className="social-link"
              >
                {/* Facebook Icon */}
                <MdOutlineFacebook />
              </Link>

              <Link
                to="/"
                aria-label="Twitter Social Link"
                className="social-link"
              >
                {/* Twitter Icon */}
                <FaTwitter />
              </Link>

              <Link
                to="/"
                aria-label="Instagram Social Link"
                className="social-link"
              >
                {/* Instagram Icon */}
                <FaInstagram />
              </Link>

              <Link
                to="/"
                aria-label="Linkedin Social Link"
                className="social-link"
              >
                {/* LinkedIn Icon */}
                <IoLogoLinkedin />
              </Link>
            </div>
            {/* <!-- Social Links end --> */}
          </div>

          <div className="footer-account-section">
            <h2 className="footer-heading">Account</h2>

            <ul className="footer-account-list">
              <li>
                <Link className="footer-link" to="/my-account">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/signin">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/wishlist">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/shop-with-sidebar">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-quicklink-section">
            <h2 className="footer-heading">Quick Link</h2>

            <ul className="footer-quicklink-list">
              <li>
                <Link className="footer-link" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-app-section">
            <h2 className="footer-app-heading">Download App</h2>

            <p className="footer-app-subtitle">
              Save $3 With App & New User only
            </p>

            <ul className="footer-app-list">
              <li>
                <Link className="app-store-button" to="/">
                  {/* Apple App Store Icon */}
                  <AiOutlineApple className="app-store-icon" />

                  <div>
                    <span className="app-button-small-text">
                      Download on the
                    </span>
                    <p className="app-button-main-text">App Store</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link className="google-play-button" to="/">
                  {/* Google Play Store Icon */}
                  <FaGooglePlay className="app-store-icon" />
                  <div>
                    <span className="app-button-small-text"> Get in On </span>
                    <p className="app-button-main-text">Google Play</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {year}. All rights reserved by PimjoLabs.
            </p>

            <div className="footer-payment-section">
              <p className="footer-payment-text">We Accept:</p>

              <div className="footer-payment-icons">
                <Link to="/" aria-label="payment system with visa card">
                  <img
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </Link>
                <Link to="/" aria-label="payment system with paypal">
                  <img
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </Link>
                <Link to="/" aria-label="payment system with master card">
                  <img
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </Link>
                <Link to="/" aria-label="payment system with apple pay">
                  <img
                    src="/images/payment/payment-04.svg"
                    alt="apple pay"
                    width={52.94}
                    height={22}
                  />
                </Link>
                <Link to="/" aria-label="payment system with google pay">
                  <img
                    src="/images/payment/payment-05.svg"
                    alt="google pay"
                    width={56}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
