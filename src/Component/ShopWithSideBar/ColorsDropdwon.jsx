import React from "react";
import "./ColorsDropdwon.css";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const ColorsDropdwon = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [activeColor, setActiveColor] = useState("blue");

  const colors = ["red", "blue", "orange", "pink", "purple"];

  return (
    <div className="color-dropdown-container">
      <div
        className={`color-dropdown-header ${
          toggleDropdown ? "color-dropdown-header--active" : ""
        }`}
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <p className="color-dropdown-title">Colors</p>
        <button
          aria-label="button for colors dropdown"
          className={`color-dropdown-toggle ${
            toggleDropdown ? "color-dropdown-toggle--rotated" : ""
          }`}
        >
          {/* dropdown-arrow-icon */}
          <IoIosArrowDropdown className="color-dropdown-icon" />
        </button>
      </div>

      <div
        className={`color-options ${toggleDropdown ? "is-open" : "is-closed"}`}
      >
        {colors.map((color, key) => (
          <label key={key} htmlFor={color} className="color-option">
            <div className="color-radio-wrapper">
              <input
                type="radio"
                name="color"
                id={color}
                className="sr-only"
                onChange={() => setActiveColor(color)}
              />
              <div
                className={`color-circle-outer ${
                  activeColor === color ? "color-circle-outer--active" : ""
                }`}
                style={activeColor === color ? { borderColor: color } : {}}
              >
                <span
                  className="color-circle-inner"
                  style={{ backgroundColor: color }}
                ></span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorsDropdwon;
