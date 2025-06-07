import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-wrapper">
          {/* Background shapes */}
          <img
            src="/images/shapes/newsletter-bg.jpg"
            alt="background illustration"
            className="newsletter-bg-image"
            width={1170}
            height={200}
          />
          <div className="newsletter-gradient-bg"></div>

          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">
                Don&apos;t Miss Out Latest Trends & Offers
              </h2>
              <p className="newsletter-description">
                Register to receive news about the latest offers & discount
                codes
              </p>
            </div>

            <div className="newsletter-form-wrapper">
              <form>
                <div className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
