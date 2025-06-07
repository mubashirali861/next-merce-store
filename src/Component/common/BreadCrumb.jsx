import React from "react";
import "./BreadCrumb.css";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, pages }) => {
  return (
    <div className="breadcrumb-wrapper">
      <div className="breadcrumb-border">
        <div className="breadcrumb-container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">{title}</h1>

            <ul className="breadcrumb-list">
              <li className="breadcrumb-link">
                <Link to="/" className="link-breadcrumb">
                  Home /
                </Link>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li className="breadcrumb-item" key={key}>
                    {page}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
