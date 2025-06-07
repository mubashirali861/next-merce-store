import React from "react";
import "./CategoryDropdown.css";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CategoryItem = ({ category }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`category-button ${
        selected ? "category-button--selected" : ""
      }`}
      onClick={() => setSelected(!selected)}
    >
      <div className="category-button-left">
        <div
          className={`checkbox ${
            selected ? "checkbox--selected" : "checkbox--unselected"
          }`}
        >
          {selected && <FaCheck className="check-icon" />}
        </div>

        <span className="">{category.name}</span>
      </div>

      <span
        className={`badge ${
          selected ? "badge--selected" : "badge--unselected"
        } group`}
      >
        {category.products}
      </span>
    </button>
  );
};

const CategoryDropdown = ({ categories }) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <div className="dropdown-container">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`dropdown-header ${
          toggleDropdown ? "dropdown-header--active" : ""
        }`}
      >
        <p className="dropdown-title">Category</p>
        <button
          aria-label="button for category dropdown"
          className={`dropdown-toggle-button ${
            toggleDropdown ? "dropdown-toggle-button--rotated" : ""
          }`}
        >
          {/* dropdown-arrow-icon */}
          <IoIosArrowDropdown className="dropdown-toggle-icon" />
        </button>
      </div>

      <div
        className={`dropdown-content ${
          toggleDropdown
            ? "dropdown-content--visible"
            : "dropdown-content--hidden"
        }`}
      >
        {categories.map((category, key) => (
          <CategoryItem key={key} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
