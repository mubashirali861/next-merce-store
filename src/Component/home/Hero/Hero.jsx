import React from "react";
import "./Hero.css";
import HeroCarousel from "./HeroCarousel";
import HeroFeatures from "./HeroFeatures";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-style">
        <div className="hero-flex">
          <div className="hero-size">
            <div className="hero-img">
              {/* <!-- bg shapes --> */}
              <img
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="image-style"
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="custom-box">
            <div className="flex-responsive">
              <div className="custom-box-1">
                <div className="flex-center-gap">
                  <div>
                    <h2 className="custom-text">
                      <Link to="/" className="hero-link-dom">
                        {" "}
                        iPhone 14 Plus & 14 Pro Max{" "}
                      </Link>
                    </h2>

                    <div>
                      <p className="custom-text-small">limited time offer</p>
                      <span className="flex-center-gap-3">
                        <span className="custom-heading-red">$699</span>
                        <span className="custom-strikethrough"> $999</span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <img
                      src="/images/hero/hero-02.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>

              <div className="custom-box-1">
                <div className="flex-center-gap">
                  <div>
                    <h2 className="custom-text">
                      <Link to="/" className="hero-link-dom">
                        {" "}
                        Wireless Headphone{" "}
                      </Link>
                    </h2>
                    <div>
                      <p className="custom-text-small">limited time offer</p>
                      <span className="flex-center-gap-3">
                        <span className="custom-heading-red">$699</span>
                        <span className="custom-strikethrough">$999</span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <img
                      src="/images/hero/hero-01.png"
                      alt="headphone-img"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Features */}
      <HeroFeatures />
    </section>
  );
};

export default Hero;
