import React from "react";
import "./MailSucess.css";
import BreadCrumb from "../common/BreadCrumb";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const MailSucess = () => {
  return (
    <>
      <BreadCrumb title={"MailSuccess"} pages={["MailSuccess"]} />
      <section className="mailsuccess-section">
        <div className="mailsuccess-container">
          <div className="mailsuccess-box">
            <div className="mailsuccess-content">
              <h2 className="mailsuccess-title">Successful!</h2>
              <h3 className="mailsuccess-subtitle">
                Your message sent successfully
              </h3>
              <p className="mailsuccess-text">
                Thank you so much for your message. We check e-mail frequently
                and will try our best to respond to your inquiry.
              </p>
              <Link to="/" className="mailsuccess-button">
                {/* SVG: left-arrow */}
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

export default MailSucess;
