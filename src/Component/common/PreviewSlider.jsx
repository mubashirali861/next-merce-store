import React from "react";
import "./PreviewSlider.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { useSelector } from "react-redux";
import { usePreviewSlider } from "./../../app/context/PreViewSliderContext";
const PreviewSlider = () => {
  const { closePreviewModal, isModalPreviewOpen } = usePreviewSlider();
  const data = useSelector((state) => state.productDetailsReducer.value);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div
      className={`preview-slider ${
        isModalPreviewOpen ? "modal-open" : "modal-hidden"
      }`}
    >
      <button
        onClick={closePreviewModal}
        aria-label="button for close modal"
        className="close-button"
      >
        {/* icon-close.svg */}
        <IoMdClose />
      </button>

      <div>
        <button className="arrow-button left-arrow" onClick={handlePrev}>
          {/* icon-arrow-left.svg */}
          <FaArrowLeft />
        </button>

        <button className="arrow-button right-arrow" onClick={handleNext}>
          {/* icon-arrow-right.svg */}
          <FaArrowRight />
        </button>
      </div>

      <Swiper ref={sliderRef} slidesPerView={1} spaceBetween={20}>
        <SwiperSlide>
          <div className="slider-content">
            <img
              src="/images/products/product-2-bg-1.png"
              alt="product image"
              width={450}
              height={450}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PreviewSlider;
