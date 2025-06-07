import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { useCallback, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

//    import swiper css
import "swiper/css/navigation";
import "swiper/css";
import SingleTestimonialsItem from "./SingleTestimonialsItem";
import axios from "axios";
const Testimonials = () => {
  let [testimonialsData, setTestimonialsData] = useState([]);
  let slideRef = useRef(null);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getTestimonialsData = async () => {
      try {
        let res = await axios.get(`${port}/testimonials`);
        setTestimonialsData(res.data);
      } catch (error) {
        console.log("Failed to load Testimonials data:", error);
      }
    };
    getTestimonialsData();
  }, []);

  let handlePrev = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slidePrev();
  }, []);

  let handleNext = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-wrapper">
          <div className="testimonial-carousel p-5">
            {/* Section Title */}
            <div className="testimonial-header">
              <div>
                <span className="testimonial-tag">
                  <img
                    src="/images/icons/icon-08.svg"
                    alt="icon"
                    width={17}
                    height={17}
                  />
                  Testimonials
                </span>
                <h2 className="testimonial-title">User Feedbacks</h2>
              </div>

              <div className="testimonial-nav">
                <div onClick={handlePrev} className="testimonial-prev">
                  {/* Left Arrow */}
                  <FaArrowLeft className="icon" />
                </div>

                <div onClick={handleNext} className="testimonial-next">
                  {/* Right Arrow */}
                  <FaArrowRight className="icon" />
                </div>
              </div>
            </div>

            {/* Swiper */}
            <Swiper
              ref={slideRef}
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                1000: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {testimonialsData.map((item, key) => (
                <SwiperSlide key={key}>
                  <SingleTestimonialsItem testimonial={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
