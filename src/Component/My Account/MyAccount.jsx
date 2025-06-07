import React from "react";
import { useState } from "react";
import "./MyAccount.css";
import BreadCrumb from "../common/BreadCrumb";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { VscHome } from "react-icons/vsc";
import { LuUserRound } from "react-icons/lu";
import { GrLogout } from "react-icons/gr";
import Order from "./../Orders/Order";
import { FaRegEdit } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { FaArrowDown } from "react-icons/fa";
import AddressModal from "./AddressModal";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [addressModal, setAddressModal] = useState(false);

  const openAddressModal = () => {
    setAddressModal(true);
  };

  const closeAddressModal = () => {
    setAddressModal(false);
  };
  return (
    <>
      <BreadCrumb title={"My Account"} pages={["my account"]} />

      <section className="my-account-section">
        <div className="my-account-container">
          <div className="custom-flex-layout-my-account">
            {/* <!--== user dashboard menu start ==--> */}
            <div className="custom-box-menu">
              <div className="custom-flex-menu">
                <div className="custom-box-dashboard-menu">
                  <div className="rounded-box-dashboard-menu">
                    <img
                      src="/images/users/user-04.jpg"
                      alt="user"
                      width={64}
                      height={64}
                    />
                  </div>

                  <div>
                    <p className="text-block-dashboard-menu">James Septimus</p>
                    <p className="text-custom-xs">Member Since Sep 2020</p>
                  </div>
                </div>

                <div className="responsive-padding-dasboard-menu">
                  <div className="flex-container-menu-dashboard-1">
                    <button
                      onClick={() => setActiveTab("dashboard")}
                      className={`nav-tab ${
                        activeTab === "dashboard" ? "active" : "inactive"
                      }`}
                    >
                      <RxDashboard /> Dashboard
                    </button>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className={`nav-tab ${
                        activeTab === "orders" ? "active" : "inactive"
                      }`}
                    >
                      <MdOutlineShoppingBag /> Orders
                    </button>

                    <button
                      onClick={() => setActiveTab("downloads")}
                      className={`nav-tab ${
                        activeTab === "downloads" ? "active" : "inactive"
                      }`}
                    >
                      <BiSolidDownload />
                      Downloads
                    </button>

                    <button
                      onClick={() => setActiveTab("addresses")}
                      className={`nav-tab ${
                        activeTab === "addresses" ? "active" : "inactive"
                      }`}
                    >
                      <VscHome />
                      Addresses
                    </button>

                    <button
                      onClick={() => setActiveTab("account-details")}
                      className={`nav-tab ${
                        activeTab === "account-details" ? "active" : "inactive"
                      }`}
                    >
                      <LuUserRound />
                      Account Details
                    </button>

                    <button
                      onClick={() => setActiveTab("logout")}
                      className={`nav-tab ${
                        activeTab === "logout" ? "active" : "inactive"
                      }`}
                    >
                      <GrLogout />
                      Lougout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* user menu dashboard end */}

            {/* <!-- dashboard tab content start --> */}
            <div
              className={`dashboard-tab ${
                activeTab === "dashboard" ? "visible-tab" : "hidden-tab"
              }`}
            >
              <p className="dashboard-greeting">
                Hello Annie (not Annie?
                <a href="#" className="dashboard-logout-link">
                  Log Out
                </a>
                )
              </p>

              <p className="dashboard-description">
                From your account dashboard you can view your recent orders,
                manage your shipping and billing addresses, and edit your
                password and account details.
              </p>
            </div>
            {/* <!-- dashboard tab content end -->

          <!-- orders tab content start --> */}
            <div
              className={`orders-tab ${
                activeTab === "orders" ? "visible-tab" : "hidden-tab"
              }`}
            >
              <Order />
            </div>
            {/* <!-- orders tab content end -->

          <!-- downloads tab content start --> */}
            <div
              className={`downloads-tab ${
                activeTab === "downloads" ? "visible-tab" : "hidden-tab"
              }`}
            >
              <p className="downloads-message">You don't have any download</p>
            </div>
            {/* <!-- downloads tab content end -->

          <!-- addresses tab content start --> */}
            <div
              className={`addresses-tab ${
                activeTab === "addresses" ? "visible-tab-1" : "hidden-tab-1"
              }`}
            >
              <div className="card-box-adress-tab">
                <div className="section-header-address-tab">
                  <p className="section-title-adress">Shipping Address</p>
                  <button
                    onClick={openAddressModal}
                    className="link-text-address"
                  >
                    <FaRegEdit />
                  </button>
                </div>

                <div className="profile-wrapper">
                  <div className="profile-content">
                    <p className="profile-name">
                      {/* User Profile Icon */}
                      Name: James Septimus
                    </p>

                    <p className="profile-name">
                      <LuMessageSquareText />
                      Email: jamse@example.com
                    </p>

                    <p className="profile-name">
                      <FaPhone />
                      Phone: 1234 567890
                    </p>

                    <p className="profile-name-1">
                      <LiaMapMarkerAltSolid />
                      Address: 7398 Smoke Ranch RoadLas Vegas, Nevada 89128
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- addresses tab content end -->

          <!-- details tab content start --> */}
            <div
              className={`xl:max-w-[770px] w-full ${
                activeTab === "account-details" ? "block-12" : "hidden-12"
              }`}
            >
              <form>
                <div className="custom-card-account-detail">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">
                        First Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Jhon"
                        defaultValue="Jhon"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">
                        Last Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Deo"
                        defaultValue="Deo"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-block">
                    <label htmlFor="countryName">
                      Country/ Region <span className="text-red">*</span>
                    </label>

                    <div className="select-wrapper">
                      <select id="countryName" className="custom-select">
                        <option value="0">Australia</option>
                        <option value="1">America</option>
                        <option value="2">England</option>
                      </select>

                      <span className="custom-icon">
                        {/* <!-- Replace with down-arrow.svg --> */}

                        <FaArrowDown />
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="submit-button">
                    Save Changes
                  </button>
                </div>
                <p className="note-text">
                  This will be how your name will be displayed in the account
                  section and in reviews
                </p>

                <p className="password-heading">Password Change</p>

                <div className="password-container">
                  <div className="form-group">
                    <label htmlFor="oldPassword" className="form-label">
                      Old Password
                    </label>
                    <input
                      type="password"
                      name="oldPassword"
                      id="oldPassword"
                      autoComplete="on"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      autoComplete="on"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmNewPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      id="confirmNewPassword"
                      autoComplete="on"
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
            {/* <!-- details tab content end -->
          <!--== user dashboard content end ==--> */}
          </div>
        </div>
      </section>

      <AddressModal isOpen={addressModal} closeModal={closeAddressModal} />
    </>
  );
};

export default MyAccount;
