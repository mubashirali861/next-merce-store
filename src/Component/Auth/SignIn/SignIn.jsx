import React from "react";
import "./SignIn.css";
import BreadCrumb from "../../common/BreadCrumb";
import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
const SignIn = () => {
  return (
    <>
      <BreadCrumb title={"Signin"} pages={["Signin"]} />
      <section className="signin-section">
        <div className="signin-container">
          <div className="signin-box">
            <div className="signin-header">
              <h2 className="signin-title">Sign In to Your Account</h2>
              <p>Enter your detail below</p>
            </div>

            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
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

                <button type="submit" className="submit-btn">
                  Sign in to account
                </button>

                <Link to="/" className="forgot-link">
                  Forget your password?
                </Link>

                <span className="divider">
                  <span className="divider-line"></span>
                  <span className="divider-text">Or</span>
                </span>

                <div className="social-buttons">
                  <button className="social-btn google-btn">
                    {/* Google Icon */}
                    <FcGoogle />
                    Sign In with Google
                  </button>

                  <button className="social-btn github-btn">
                    {/* GitHub Icon */}
                    <VscGithubInverted />
                    Sign In with GitHub
                  </button>
                </div>

                <p className="signin-footer">
                  Don&apos;t have an account?
                  <NavLink to="/signup" className="signup-link">
                    Sign Up Now!
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

export default SignIn;
