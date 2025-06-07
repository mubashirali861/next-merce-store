import React from "react";
import "./TopScroll.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top-button ${isVisible ? "flex" : "hidden"}`}
        >
          {/* Replace this comment with your image */}
          <FaArrowUp className="top-scroll-btn" />
        </button>
      )}
    </>
  );
};

export default TopScroll;
