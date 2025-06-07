import React from "react";
import "./SingleItem.css";
import { Link } from "react-router-dom";

const SingleItem = ({ item }) => {
  return (
    <Link to="/" className="custom-group-1">
      <div className="custom-box-2">
        <img
          src={item.img}
          alt="Category"
          width={82}
          height={62}
          className="image-cat-style"
        />
      </div>

      <div className="flex-center">
        <div className="group">
          <h3 className="custom-heading">{item.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
