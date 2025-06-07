import React from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import BreadCrumb from "./../../common/BreadCrumb";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <BreadCrumb title={"Signup"} pages={["Signup"]} />
      <section className="signup-section">
        <div className="signup-container">
          <div className="signup-box">
            <div className="signup-header">
              <h2 className="signup-title">Create an Account</h2>
              <p>Enter your detail below</p>
            </div>

            <div className="signup-buttons">
              <button className="signup-btn social-google">
                {/* Google Icon */}
                <FcGoogle />
                Sign Up with Google
              </button>

              <button className="signup-btn social-github">
                {/* GitHub Icon */}
                <VscGithubInverted />
                Sign Up with Github
              </button>
            </div>

            <span className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">Or</span>
            </span>

            <div className="signup-form-wrapper">
              <form>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="text-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="text-required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    Password <span className="text-required">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    autoComplete="on"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="re-type-password">
                    Re-type Password <span className="text-required">*</span>
                  </label>
                  <input
                    type="password"
                    name="re-type-password"
                    id="re-type-password"
                    placeholder="Re-type your password"
                    autoComplete="on"
                    className="form-input"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Create Account
                </button>

                <p className="signin-link">
                  Already have an account?
                  <NavLink to="/signin" className="signin-now">
                    Sign in Now
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
