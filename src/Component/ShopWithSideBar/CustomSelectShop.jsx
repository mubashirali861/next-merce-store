import React from "react";
import "./CustomSelectShop.css";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const CustomSelectShop = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef(null);

  // Function to close the dropdown when a click occurs outside the component
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className="custom-select-wrapper" ref={selectRef}>
      <div
        className={`select-header ${isOpen ? "select-header-active" : ""}`}
        onClick={toggleDropdown}
      >
        <IoIosArrowDropdown />
        {selectedOption.label}
      </div>
      <div className={`select-options ${isOpen ? "show" : "hide"}`}>
        {options.slice(1).map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-option ${
              selectedOption === option ? "selected" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelectShop;
