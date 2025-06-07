import React from "react";
import "./DropDown.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = ({ menuItem, stickyMenu }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const location = useLocation();

  const isActive = location.pathname.includes(menuItem.title.toLowerCase());

  return (
    <li
      onClick={() => setDropdownToggler(!dropdownToggler)}
      className={`nav-link-li ${isActive ? "active" : ""}`}
    >
      <Link
        to="/"
        className={`menu-link ${stickyMenu ? "sticky" : ""} ${
          isActive ? "active" : ""
        }`}
      >
        {menuItem.title}
        <IoIosArrowDown className="arrow-setting" />
      </Link>

      {/* DropDown Start */}
      {menuItem.submenu && (
        <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
          {menuItem.submenu.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`menu-subitem ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropDown;
