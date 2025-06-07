import React from "react";
import "./BlogItem.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const BlogItem = ({ blog }) => {
  return (
    <div className="blog-card">
      <Link to="/blogs/blog-details" className="blog-image-link">
        <img
          src={blog.img}
          alt="blog"
          className="blog-image"
          width={330}
          height={210}
        />
      </Link>

      <div className="blog-content">
        <span className="blog-meta">
          <Link to="/" className="blog-meta-link">
            {blog.date}
          </Link>
          <span className="blog-divider"></span>
          <Link to="/" className="blog-meta-link">
            {blog.views} Views
          </Link>
        </span>

        <h2 className="blog-title">
          <Link to="/blogs/blog-details">{blog.title}</Link>
        </h2>

        <Link to="/blogs/blog-details" className="blog-readmore">
          Read More
          {/* Arrow Icon */}
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
