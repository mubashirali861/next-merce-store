import React, { useEffect, useState } from "react";
import "./RecentlyViewdItems.css";
import ProductItem from "../../common/ProductItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const RecentlyViewdItems = () => {
  let [shopData, setShopData] = useState([]);
  const sliderRef = useRef(null);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getShopData = async () => {
      try {
        let res = await axios.get(`${port}/shopData`);
        setShopData(res.data);
      } catch (error) {
        console.log("Failed to load shopdata:", error);
      }
    };
    getShopData();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="swiper categories-carousel common-carousel">
          {/* Section Title */}
          <div className="categories-header">
            <div>
              <span className="categories-label">
                {/* icon-05.svg */}
                <img
                  src="/images/icons/icon-05.svg"
                  width={17}
                  height={17}
                  alt="Categories Icon"
                />
                Categories
              </span>
              <h2 className="categories-title">Browse by Category</h2>
            </div>

            <div className="categories-nav">
              <button onClick={handlePrev} className="swiper-button-prev">
                {/* arrow-left.svg */}
                <FaArrowLeft />
              </button>
              <button onClick={handleNext} className="swiper-button-next">
                {/* arrow-right.svg */}
                <FaArrowRight />
              </button>
            </div>
          </div>

          <Swiper
            ref={sliderRef}
            slidesPerView={4}
            spaceBetween={20}
            className="justify-between"
          >
            {shopData.map((item, key) => (
              <SwiperSlide key={key}>
                <ProductItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewdItems;
