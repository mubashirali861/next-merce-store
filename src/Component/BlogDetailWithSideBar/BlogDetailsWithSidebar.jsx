import React, { useEffect, useState } from "react";
import "./BlogDetailsWithSidebar.css";
import BreadCrumb from "./../common/BreadCrumb";
import SearchForm from "./../Blog/SearchForm";
import LatestPost from "./../Blog/LatestPost";
import LatestProduct from "./../Blog/LatestProduct";
import { Link } from "react-router-dom";
import axios from "axios";
const BlogDetailsWithSidebar = () => {
  const [blogData, setBlogData] = useState([]);
  const [shopData, setShopData] = useState([]);

  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getBlogData = async () => {
      try {
        let res = await axios.get(`${port}/blogData`);
        setBlogData(res.data);
      } catch (error) {
        console.log("Failed to load blogData:", error);
      }
    };
    let getShopData = async () => {
      try {
        let res2 = await axios.get(`${port}/shopData`);
        setShopData(res2.data);
      } catch (error) {
        console.log("Failed to load ShopData:", error);
      }
    };

    getBlogData();
    getShopData();
  }, []);

  return (
    <>
      <div className="breadcrumb-wrapper">
        <BreadCrumb
          title="Blog Details With Sidebar"
          pages={["blog details sidebar"]}
        />
      </div>

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-content-wrapper">
            {/* Blog Content */}
            <div className="blog-main">
              <div className="blog-image-wrapper">
                <img
                  className="blog-image"
                  src="/images/blog/blog-details-01.jpg"
                  alt="details"
                  width={750}
                  height={477}
                />
              </div>

              <div className="blog-details">
                <span className="blog-meta">
                  <Link to="/" className="meta-link">
                    Mar 27, 2022
                  </Link>
                  <span className="meta-divider"></span>
                  <Link to="/" className="meta-link">
                    300k Views
                  </Link>
                </span>

                <h2 className="blog-title">
                  What information is needed for shipping?
                </h2>

                <p className="blog-paragraph">Lorem ipsum dolor sit amet...</p>
                <p className="blog-paragraph">Nunc faucibus libero sem...</p>
                <p className="blog-paragraph">Lorem ipsum dolor sit amet...</p>

                <div className="blog-subsection">
                  <h3 className="blog-subtitle">
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <ul className="blog-list">
                    <li>Consectetur adipiscing elit in voluptate velit.</li>
                    <li>Mattis vulputate cupidatat.</li>
                    <li>
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li>Ligula ullamcorper malesuada proin</li>
                  </ul>
                </div>

                <div className="quote-box">
                  <p className="quote-text">‘‘Lorem ipsum dolor sit amet...</p>
                  <Link to="/" className="quote-author">
                    <div className="author-image">
                      <img
                        src="/images/users/user-04.jpg"
                        alt="user"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">Jhon Drineo</h4>
                      <p className="author-role">Entroprenor</p>
                    </div>
                  </Link>
                </div>

                <p className="blog-paragraph">
                  consectetur adipiscing elit in voluptate...
                </p>
                <p className="blog-paragraph">Nunc faucibus libero sem...</p>
                <p className="blog-paragraph">Lorem ipsum dolor sit amet...</p>
                <p className="blog-paragraph">Lorem ipsum dolor sit amet...</p>

                <div className="tag-share-wrapper">
                  <div className="tag-list">
                    <p className="tag-title">Popular Tags :</p>
                    <ul className="tags">
                      <li>
                        <Link className="tag" to="/">
                          Desktop
                        </Link>
                      </li>
                      <li>
                        <Link className="tag" to="/">
                          Macbook
                        </Link>
                      </li>
                      <li>
                        <Link className="tag" to="/">
                          PC
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="social-links">
                    <Link to="/" className="social-icon">
                      {/* <!-- image: pinterest-icon.png --> */}
                    </Link>
                    <Link to="/" className="social-icon">
                      {/* <!-- image: linkedin-icon.png --> */}
                    </Link>
                    <Link to="/" className="social-icon">
                      {/* <!-- image: twitter-icon.png --> */}
                    </Link>
                    <Link to="/" className="social-icon">
                      {/* <!-- image: facebook-icon.png --> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar">
              <SearchForm />
              <LatestPost blogs={blogData} />
              <LatestProduct products={shopData} />

              <div className="category-box">
                <h2 className="sidebar-title">Popular Category</h2>
                <div className="category-list">
                  <button className="category-button">
                    Desktop <span className="badge">12</span>
                  </button>
                  <button className="category-button">
                    Laptop <span className="badge">25</span>
                  </button>
                  <button className="category-button">
                    Monitor <span className="badge">23</span>
                  </button>
                  <button className="category-button">
                    UPS <span className="badge">09</span>
                  </button>
                  <button className="category-button">
                    Phone <span className="badge">54</span>
                  </button>
                  <button className="category-button">
                    Tablet <span className="badge">21</span>
                  </button>
                  <button className="category-button">
                    Watch <span className="badge">17</span>
                  </button>
                  <button className="category-button">
                    Mouse <span className="badge">08</span>
                  </button>
                </div>
              </div>

              <div className="tags-box">
                <h2 className="sidebar-title">Tags</h2>
                <div className="tag-cloud">
                  <Link className="tag" to="/">
                    Desktop
                  </Link>
                  <Link className="tag" to="/">
                    Macbook
                  </Link>
                  <Link className="tag" to="/">
                    PC
                  </Link>
                  <Link className="tag" to="/">
                    Watch
                  </Link>
                  <Link className="tag" to="/">
                    USB Cable
                  </Link>
                  <Link className="tag" to="/">
                    Mouse
                  </Link>
                  <Link className="tag" to="/">
                    Windows PC
                  </Link>
                  <Link className="tag" to="/">
                    Monitor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsWithSidebar;
