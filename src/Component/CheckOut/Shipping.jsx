import React from "react";
import "./Shipping.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
const Shipping = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="ship-diff-wrapper">
      <div onClick={() => setDropdown(!dropdown)} className="ship-diff-toggle">
        Ship to a different address?
        <span className={`ship-diff-icon ${dropdown ? "rotated" : ""}`}>
          {/* icon-arrow-down.svg */}
          <IoIosArrowDown />
        </span>
      </div>

      <div className={`ship-diff-content ${dropdown ? "show" : "hide"}`}>
        <div className="ship-field">
          <label htmlFor="countryName" className="ship-label">
            Country/ Region <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select className="ship-select">
              <option value="0">Australia</option>
              <option value="1">America</option>
              <option value="2">England</option>
            </select>
            <span className="select-icon">
              {/* icon-select-arrow.svg */}
              <FaRegArrowAltCircleDown />
            </span>
          </div>
        </div>

        <div className="ship-field">
          <label htmlFor="address" className="ship-label">
            Street Address <span className="required">*</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="House number and street name"
            className="ship-input"
          />
          <div className="mt-5">
            <input
              type="text"
              name="address"
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="ship-input"
            />
          </div>
        </div>

        <div className="ship-field">
          <label htmlFor="town" className="ship-label">
            Town/ City <span className="required">*</span>
          </label>
          <input type="text" name="town" className="ship-input" />
        </div>

        <div className="ship-field">
          <label htmlFor="country" className="ship-label">
            Country
          </label>
          <input type="text" name="country" className="ship-input" />
        </div>

        <div className="ship-field">
          <label htmlFor="phone" className="ship-label">
            Phone <span className="required">*</span>
          </label>
          <input type="text" name="phone" className="ship-input" />
        </div>

        <div className="ship-field">
          <label htmlFor="email" className="ship-label">
            Email Address <span className="required">*</span>
          </label>
          <input type="email" name="email" className="ship-input" />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
