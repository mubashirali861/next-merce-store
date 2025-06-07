import React from "react";
import "./SizeDropdown.css";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
const SizeDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  return (
    <div className="size-dropdown-container">
      <div
        className={`size-dropdown-header ${
          toggleDropdown ? "size-dropdown-header--active" : ""
        }`}
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <p className="size-dropdown-title">Size</p>
        <button
          onClick={() => setToggleDropdown(!toggleDropdown)}
          aria-label="button for size dropdown"
          className={`size-dropdown-toggle ${
            toggleDropdown ? "size-dropdown-toggle--rotated" : ""
          }`}
        >
          {/* dropdown-arrow-icon */}
          <IoIosArrowDropdown className="size-dropdown-icon" />
        </button>
      </div>

      <div
        className={`size-options ${toggleDropdown ? "is-open" : "is-closed"}`}
      >
        {["M", "L", "XL", "XXL"].map((size) => (
          <label
            key={size}
            htmlFor={`size${size}`}
            className={`size-label ${size === "M" ? "size-label--active" : ""}`}
          >
            <div className="size-radio-wrapper">
              <input
                type="radio"
                name="size"
                id={`size${size}`}
                className="sr-only"
              />
              <div className="size-value">{size}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeDropdown;
