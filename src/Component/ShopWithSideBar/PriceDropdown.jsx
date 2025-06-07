import React from "react";
import "./PriceDropdown.css";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { IoIosArrowDropdown } from "react-icons/io";

const PriceDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState({
    from: 0,
    to: 100,
  });

  return (
    <div className="price-dropdown-container">
      <div
        className="price-dropdown-header"
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <p className="price-dropdown-title">Price</p>
        <button
          id="price-dropdown-btn"
          aria-label="button for price dropdown"
          className={`price-dropdown-toggle ${toggleDropdown ? "rotated" : ""}`}
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          {/* dropdown-arrow-icon */}
          <IoIosArrowDropdown className="price-dropdown-icon" />
        </button>
      </div>

      <div
        className={`price-dropdown-body ${
          toggleDropdown ? "visible" : "hidden"
        }`}
      >
        <div className="price-range-section">
          <RangeSlider
            id="range-slider-gradient"
            className="price-range-slider"
            step="any"
            onInput={(e) =>
              setSelectedPrice({
                from: Math.floor(e[0]),
                to: Math.ceil(e[1]),
              })
            }
          />

          <div className="price-amount-wrapper">
            <div className="price-box">
              <span className="price-symbol">$</span>
              <span id="minAmount" className="price-value">
                {selectedPrice.from}
              </span>
            </div>

            <div className="price-box">
              <span className="price-symbol">$</span>
              <span id="maxAmount" className="price-value">
                {selectedPrice.to}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
