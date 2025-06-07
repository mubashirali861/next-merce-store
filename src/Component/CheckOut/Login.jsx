import React from "react";
import "./Login.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const Login = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="login-toggle-box">
      <div
        onClick={() => setDropdown(!dropdown)}
        className={`login-toggle-header ${
          dropdown ? "login-toggle-header-active" : ""
        }`}
      >
        Returning customer?
        <span className="login-toggle-label">
          Click here to login
          {/* icon-dropdown.svg */}
          <IoIosArrowDown />
        </span>
      </div>

      {/* <!-- dropdown menu --> */}
      <div className={`login-dropdown ${dropdown ? "show" : "hide"}`}>
        <p className="login-message">
          If you didn&apos;t Logged in, Please Log in first.
        </p>

        <div className="login-input-group">
          <label htmlFor="name" className="login-label">
            Username or Email
          </label>
          <input type="text" name="name" id="name" className="login-input" />
        </div>

        <div className="login-input-group">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            className="login-input"
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
