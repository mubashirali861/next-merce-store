import React, { useEffect, useState } from "react";
import "./BlogGridWithSidebar.css";
import BreadCrumb from "../common/BreadCrumb";
import BlogItem from "../Blog/BlogItem";
import SearchForm from "../Blog/SearchForm";
import LatestPost from "../Blog/LatestPost";
import LatestProduct from "../Blog/LatestProduct";
import Categories from "../Blog/Categories";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const BlogGridWithSidebar = () => {
  const [blogData, setBlogData] = useState([]);
  const [shopData, setShopData] = useState([]);

  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getBlogData = async () => {
      try {
        let res = await axios.get(`${port}/blogData`);
        setBlogData(res.data);
      } catch (error) {
        console.log("Failed to load Blogdata:", error);
      }
    };

    let getShopdata = async () => {
      try {
        let res1 = await axios.get(`${port}/shopData`);
        setShopData(res1.data);
      } catch (error) {
        console.log("Failed to load shopData:", error);
      }
    };

    getBlogData();
    getShopdata();
  }, []);
  const categories = [
    {
      name: "Desktop",
      products: 10,
    },
    {
      name: "Laptop",
      products: 12,
    },
    {
      name: "Monitor",
      products: 30,
    },
    {
      name: "UPS",
      products: 23,
    },
    {
      name: "Phone",
      products: 10,
    },
    {
      name: "Watch",
      products: 13,
    },
  ];

  return (
    <>
      <BreadCrumb title={"Blog Grid Sidebar"} pages={["blog grid sidebar"]} />

      <section className="bgs-section">
        <div className="bgs-container">
          <div className="bgs-layout">
            <div className="bgs-grid">
              <div className="bgs-grid-wrapper">
                {blogData.map((blog, key) => (
                  <BlogItem blog={blog} key={key} />
                ))}
              </div>

              {/* Pagination */}
              <div className="bgs-pagination">
                <div className="bgs-pagination-box">
                  <ul className="bgs-pagination-list">
                    <li>
                      {/* Left Arrow SVG replaced with image */}

                      <button className="bgs-page-btn" disabled>
                        <FaAngleLeft />
                      </button>
                    </li>

                    {[1, 2, 3, 4, 5, "...", 10].map((page, index) => (
                      <li key={index}>
                        <Link to="/" className="bgs-page-link">
                          {page}
                        </Link>
                      </li>
                    ))}

                    <li>
                      {/* Right Arrow SVG replaced with image */}
                      <button className="bgs-page-btn">
                        <FaAngleRight />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bgs-sidebar">
              <SearchForm />
              <LatestPost blogs={blogData} />
              <LatestProduct products={shopData} />
              <Categories categories={categories} />

              {/* Tags */}
              <div className="bgs-tags">
                <div className="bgs-tags-header">
                  <h2 className="bgs-tags-title">Tags</h2>
                </div>
                <div className="bgs-tags-body">
                  <div className="bgs-tags-list">
                    {[
                      "Desktop",
                      "Macbook",
                      "PC",
                      "Watch",
                      "USB Cable",
                      "Mouse",
                      "Windows PC",
                      "Monitor",
                    ].map((tag, i) => (
                      <Link key={i} to="/" className="bgs-tag-item">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;
