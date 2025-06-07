import React from "react";
import "./Billing.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCheckboxOutline } from "react-icons/io";

const Billing = () => {
  return (
    <div className="billing-wrapper">
      <h2 className="billing-title">Billing details</h2>

      <div className="billing-box">
        <div className="flex-wrap-lg">
          <div className="input-group">
            <label htmlFor="firstName" className="input-label">
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Jhon"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName" className="input-label">
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Deo"
              className="input-field"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="companyName" className="input-label">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="countryName" className="input-label">
            Country/Region <span style={{ color: "red" }}>*</span>
          </label>
          <div className="select-wrapper">
            <select className="select-input" id="countryName">
              <option value="0">Australia</option>
              <option value="1">America</option>
              <option value="2">England</option>
            </select>

            {/* replaced SVG with image */}
            <span className="select-arrow">
              {/* ▼ Arrow image for dropdown */}
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="address" className="input-label">
            Street Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="House number and street name"
            className="input-field"
          />
          <div style={{ marginTop: "1.25rem" }}>
            <input
              type="text"
              id="addressTwo"
              name="addressTwo"
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="input-field"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="town" className="input-label">
            Town/City <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="town" name="town" className="input-field" />
        </div>

        <div className="input-group">
          <label htmlFor="country" className="input-label">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone" className="input-label">
            Phone <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="phone" name="phone" className="input-field" />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" id="email" name="email" className="input-field" />
        </div>

        <div>
          <label htmlFor="checkboxLabelTwo" className="checkbox-label">
            <div className="checkbox-box">
              <input
                type="checkbox"
                id="checkboxLabelTwo"
                className="sr-only"
              />
              {/* Comment: SVG checkmark replaced */}
              {/* <img src="/images/checkmark.svg" alt="Checked" width="16" height="16" /> */}
              <IoIosCheckboxOutline />
            </div>
            Create an Account
          </label>
        </div>
      </div>
    </div>
  );
};

export default Billing;
