import React, { useEffect, useState } from "react";
import "./CountDown.css";
import { Link } from "react-router-dom";
const CountDown = () => {
  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);

  let deadline = "December,31,2025";

  let getTime = () => {
    let time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    let interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-box">
          <div className="countdown-content">
            <span className="countdown-subtitle">Don’t Miss!!</span>

            <h2 className="countdown-title">Enhance Your Music Experience</h2>

            <p className="countdown-description">
              The Havit H206d is a wired PC headphone.
            </p>

            <div
              className="countdown-timer"
              x-data="timer()"
              x-init="countdown()"
            >
              <div className="countdown-item">
                <span className="countdown-number">
                  {days < 10 ? "0" + days : days}
                </span>
                <span className="countdown-label">Days</span>
              </div>

              <div className="countdown-item">
                <span className="countdown-number">
                  {hours < 10 ? "0" + hours : hours}
                </span>
                <span className="countdown-label">Hours</span>
              </div>

              <div className="countdown-item">
                <span className="countdown-number">
                  {minutes < 10 ? "0" + minutes : minutes}
                </span>
                <span className="countdown-label">Minutes</span>
              </div>

              <div className="countdown-item">
                <span className="countdown-number">
                  {seconds < 10 ? "0" + seconds : seconds}
                </span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>

            <Link to="/" className="countdown-button">
              Check it Out!
            </Link>
          </div>

          {/* Background images */}
          <img
            src="/images/countdown/countdown-bg.png"
            alt="bg shapes"
            className="countdown-bg-shape"
            width={737}
            height={482}
          />
          <img
            src="/images/countdown/countdown-01.png"
            alt="product"
            className="countdown-product-image"
            width={411}
            height={376}
          />
        </div>
      </div>
    </section>
  );
};

export default CountDown;
