import "./BlogGrid.css";
import React, { useEffect, useState } from "react";
import BreadCrumb from "./../common/BreadCrumb";
import BlogItem from "../Blog/BlogItem";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const BlogGrid = () => {
  const [blogData1, setBlogData1] = useState([]);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getBlogData1 = async () => {
      try {
        let res1 = await axios.get(`${port}/blogData`);
        setBlogData1(res1.data);
      } catch (err) {
        console.log("Failed to load blogdata:", err);
      }
    };
    getBlogData1();
  }, []);

  return (
    <>
      <BreadCrumb title={"Blog Grid"} pages={["blog grid"]} />

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-grid">
            {/* Blog Items */}
            {blogData1.map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>

          {/* Blog Pagination */}
          <div className="pagination-wrapper">
            <div className="pagination-container">
              <ul className="pagination-list">
                <li>
                  <button
                    id="paginationLeft"
                    aria-label="Previous page"
                    type="button"
                    disabled
                    className="pagination-arrow disabled"
                  >
                    {/* image: pagination-left.png */}
                    <FaAngleLeft />
                  </button>
                </li>

                {[1, 2, 3, 4, 5].map((num) => (
                  <li key={num}>
                    <Link
                      to="/"
                      className={`pagination-link${num === 1 ? " active" : ""}`}
                    >
                      {num}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link to="/" className="pagination-link">
                    ...
                  </Link>
                </li>

                <li>
                  <Link to="/" className="pagination-link">
                    10
                  </Link>
                </li>

                <li>
                  <button
                    id="paginationRight"
                    aria-label="Next page"
                    type="button"
                    className="pagination-arrow"
                  >
                    {/* image: pagination-right.png */}
                    <FaAngleRight />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
