import React from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import NewArrivals from "./NewArrivals/NewArrivals";
import PromoBanner from "./promoBanner/PromoBanner";
import BestSellers from "./bestSellers/BestSellers";
import CountDown from "./Countdown/CountDown";
import Testimonials from "./Testimonials/Testimonials";
import NewsLetter from "./../common/NewsLetter";
const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrivals />
      <PromoBanner />
      <BestSellers />
      <CountDown />
      <Testimonials />
      <NewsLetter />
    </main>
  );
};

export default Home;
