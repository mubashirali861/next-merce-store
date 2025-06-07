import React, { useEffect, useState } from "react";
import ShopSingleItem from "./ShopSingleItem";
import "./BestSellers.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BestSellers = () => {
  const [shopData, setShopData] = useState([]);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getShopData = async () => {
      try {
        let res = await axios.get(`${port}/shop`);
        setShopData(res.data);
      } catch (error) {
        console.log("Failed to load shop data:", error);
      }
    };
    getShopData();
  }, []);

  return (
    <section className="best-sellers-section">
      <div className="best-sellers-container">
        {/* Section Title */}
        <div className="best-sellers-header">
          <div>
            <span className="best-sellers-span">
              <img
                src="/images/icons/icon-07.svg"
                alt="icon"
                width={17}
                height={17}
              />
              This Month
            </span>
            <h2 className="best-sellers-title">Best Sellers</h2>
          </div>
        </div>

        <div className="best-sellers-grid">
          {shopData.slice(1, 7).map((item, key) => (
            <ShopSingleItem item={item} key={key} />
          ))}
        </div>

        <div className="best-sellers-footer">
          <Link to="/shop-without-sidebar" className="view-all-buttons">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
