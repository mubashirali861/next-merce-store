import "./PromoBanner.css";
import { NavLink } from "react-router-dom";
const PromoBanner = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        {/* Promo Banner Big */}
        <div className="banner-container">
          <div className="banner-custom-width">
            <span className="custom-block-txt-banner">
              Apple iPhone 16 Plus
            </span>

            <h2 className="banner-heading"> UP TO 30% OFF</h2>

            <p>
              iPhone 16 has the same superspeedy chip that’s in iPhone 15 Pro,
              A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>

            <NavLink to="/" className="custom-button-banner">
              Buy Now
            </NavLink>
          </div>

          <img
            src="/images/promo/promo-01.png"
            alt="promo img"
            className="promo-banner-img"
            width={274}
            height={350}
          />
        </div>

        <div className="banner-grid">
          {/* Promo Banner small */}
          <div className="custom-container-small-banner">
            <img
              src="/images/promo/promo-02.png"
              alt="promo img"
              className="small-banner-img-style"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="custom-block-text-small-banner">
                {" "}
                Foldable Motorised Treadmill
              </span>

              <h2 className="custom-title-small-banner"> Workout At Home</h2>

              <p className="custom-p-small-banner">Flat 20% off</p>

              <NavLink to="/" className="custom-button-tredmill">
                Grab Now
              </NavLink>
            </div>
          </div>

          {/* promo banner second small */}

          <div className="custom-container-second-banner">
            <img
              src="/images/promo/promo-03.png"
              alt="promo img"
              width={200}
              height={200}
              className="small-banner-second-img"
            />

            <div>
              <span className="custom-block-second-banner">
                Apple Watch Ultra
              </span>

              <h2 className="custom-title-second-small-banner">
                Up to <span className="">40%</span>off
              </h2>

              <p className="text-block-second-small-banner">
                The aerospace-grade titanium case strikes the perfect balance of
                everything.
              </p>

              <NavLink to="/" className="custom-second-small-button">
                Buy Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
