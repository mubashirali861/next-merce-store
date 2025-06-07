import React from "react";
import "./HeroFeatures.css";

let featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "For all orders $200",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "1 & 1 Returns",
    description: "Cancellation after 1 day",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "100% Secure Payments",
    description: "Gurantee secure payments",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Dedicated Support",
    description: "Anywhere & anytime",
  },
];
const HeroFeatures = () => {
  return (
    <div className="container-custom">
      <div className="flex-wrap-center">
        {featureData.map((item, key) => (
          <div className="flex-center-gap" key={key}>
            <img src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="text-medium-dark-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeatures;
