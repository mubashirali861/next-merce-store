import React from "react";
import "./Categories.css";
const Categories = ({ categories }) => {
  return (
    <div className="popular-category-card">
      <div className="popular-category-header">
        <h2 className="popular-category-title">Popular Category</h2>
      </div>

      <div className="popular-category-body">
        <div className="popular-category-list">
          <button className="popular-category-item">
            Desktop
            <span className="popular-category-count">12</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
