import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BreadCrumb from "../common/BreadCrumb";

const Error = () => {
  return (
    <>
      <BreadCrumb title={"Error"} pages={["error"]} />
      <section className="error-section">
        <div className="error-container">
          <div className="error-box">
            <div className="error-content">
              <img
                src="/images/404.svg"
                alt="404"
                className="error-image"
                width={288}
                height={190}
              />

              <h2 className="error-heading">Sorry, the page can’t be found</h2>

              <p className="error-message">
                The page you were looking for appears to have been moved,
                deleted or does not exist.
              </p>

              <Link to="/" className="error-button">
                {/* SVG icon: arrow-left.svg */}
                <FaArrowLeft />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
