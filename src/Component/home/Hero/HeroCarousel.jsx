import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "./HeroCarousel.css";

// import swiper css style
import "swiper/css/pagination";
import "swiper/css";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="hero-slide-layout">
          <div className="hero-slide-content">
            <div className="sale-badge">
              <span className="discount-label">30%</span>
              <span className="sale-text">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="hero-heading">
              <Link to="/" className="hero-carousel-link">
                True Wireless Noise Cancelling Headphone
              </Link>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              ipsum at risus euismod lobortis in
            </p>

            <Link to="/" className="hero-carousel-link shop-now-btn">
              Shop Now
            </Link>
          </div>

          <div>
            <img
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {""}
        <div className="hero-slide-layout">
          <div className="hero-slide-content">
            <div className="sale-badge">
              <span className="discount-label">30%</span>
              <span className="sale-text">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="hero-heading">
              <Link to="/" className="hero-carousel-link">
                Apple Watch Ultra
              </Link>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              ipsum at risus euismod lobortis in
            </p>

            <Link to="/" className="hero-carousel-link shop-now-btn">
              Shop Now
            </Link>
          </div>

          <div>
            <img
              src="/images/products/product-5-bg-1.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {""}
        <div className="hero-slide-layout">
          <div className="hero-slide-content">
            <div className="sale-badge">
              <span className="discount-label">30%</span>
              <span className="sale-text">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="hero-heading">
              <Link to="/" className="hero-carousel-link">
                Macbook Pro M4 Pro-512/16GB
              </Link>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              ipsum at risus euismod lobortis in
            </p>

            <Link to="/" className="hero-carousel-link shop-now-btn">
              Shop Now
            </Link>
          </div>

          <div>
            <img
              src="/images/products/product-7-bg-1.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
