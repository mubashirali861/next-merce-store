import { Swiper, SwiperSlide } from "swiper/react";
import "./Categories.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaTags } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import SingleItem from "./SingleItem";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
const Categories = () => {
  let sliderRef = useRef(null);
  const [categorydata, setCategoryData] = useState([]);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getCategoryData = async () => {
      try {
        let response = await axios.get(`${port}/categories`);
        setCategoryData(response.data);
      } catch (error) {
        console.log("Failed to load category data:", error);
      }
    };
    getCategoryData();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.init();
    }
  }, []);
  return (
    <section className="custom-section">
      <div className="custom-container">
        <div className="swiper categories-carousel common-carousel">
          {/* section title */}
          <div className="custom-header-row">
            <div>
              <span className="custom-span">
                <FaTags className="icon-style" />
                Categories
              </span>
              <h2 className="custom-heading">Browse by Category</h2>
            </div>

            <div className="custom-flex">
              <button
                onClick={handlePrev}
                className="arrow-button"
                // className="swiper-button-prev"
                aria-label="previous button"
              >
                <FaArrowLeft
                  className="arrow-icon"
                  style={{ fontSize: "24px", color: "black" }}
                />
              </button>

              <button
                onClick={handleNext}
                // className="swiper-button-next"
                className="arrow-button"
                aria-label="next button"
              >
                <FaArrowRight
                  className="arrow-icon"
                  style={{ fontSize: "24px", color: "#333" }}
                />
              </button>
            </div>
          </div>

          <Swiper
            ref={sliderRef}
            slidesPerView={6}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 4,
                // spaceBetween: 4,
              },
              // when window width is >= 768px
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {categorydata.map((item, key) => (
              <SwiperSlide key={key}>
                <SingleItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Categories;
