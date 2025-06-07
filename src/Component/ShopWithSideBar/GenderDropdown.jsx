import "./GenderDropdown.css";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const GenderItem = ({ category }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`gender-item-button ${
        selected ? "gender-item-button--selected" : ""
      }`}
      onClick={() => setSelected(!selected)}
    >
      <div className="gender-item-left">
        <div
          className={`gender-checkbox ${
            selected
              ? "gender-checkbox--selected"
              : "gender-checkbox--unselected"
          }`}
        >
          {/* check-icon */}
          {/* <FaCheck
            className={`gender-check-icon ${selected ? "visible" : "hidden"}`}
          /> */}
          {selected && <FaCheck className="gender-check-icon" />}
        </div>
        <span className="gender-name">{category.name}</span>
      </div>

      <span
        className={`gender-count ${selected ? "gender-count--selected" : ""}`}
      >
        {category.products}
      </span>
    </button>
  );
};

const GenderDropdown = ({ genders }) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <div className="gender-dropdown-container">
      <div
        className={`gender-dropdown-header ${
          toggleDropdown ? "gender-dropdown-header--active" : ""
        }`}
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <p className="gender-dropdown-title">Gender</p>
        <button
          onClick={() => setToggleDropdown(!toggleDropdown)}
          aria-label="button for gender dropdown"
          className={`gender-dropdown-toggle ${
            toggleDropdown ? "gender-dropdown-toggle--rotated" : ""
          }`}
        >
          {/* dropdown-arrow-icon */}
          <IoIosArrowDropdown className="gender-dropdown-arrow" />
        </button>
      </div>

      <div
        className={`gender-dropdown-menu ${
          toggleDropdown ? "is-open" : "is-closed"
        }`}
      >
        {genders.map((gender, key) => (
          <GenderItem key={key} category={gender} />
        ))}
      </div>
    </div>
  );
};

export default GenderDropdown;
