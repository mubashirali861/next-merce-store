import React from "react";
import "./BlogDetails.css";
import BreadCrumb from "./../common/BreadCrumb";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
const BlogDetails = () => {
  return (
    <>
      <BreadCrumb title={"Blog Details"} pages={["blog details"]} />
      <section className="blog-details-section">
        <div className="blog-details-container">
          <div className="blog-image-wrapper">
            <img
              className="blog-image"
              src="/images/blog/blog-details-01.jpg"
              alt="details"
              width={750}
              height={477}
            />
          </div>

          <div>
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

            <p className="blog-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <p className="blog-paragraph">
              Nunc faucibus libero sem, quis placerat nisl...
            </p>

            <p className="blog-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

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
              <p className="quote-text">
                ‘‘Lorem ipsum dolor sit amet, consectetur adipiscing elit...’’
              </p>
              <Link to="/" className="quote-author">
                <div className="quote-author-img">
                  <img
                    src="/images/users/user-04.jpg"
                    alt="user"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="author-name">Jhon Drineo</h4>
                  <p className="author-title">Entroprenor</p>
                </div>
              </Link>
            </div>

            <p className="blog-paragraph">
              consectetur adipiscing elit in voluptate velit esse...
            </p>

            <p className="blog-paragraph">
              Nunc faucibus libero sem, quis placerat nisl...
            </p>

            <p className="blog-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <p className="blog-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <div className="footer-section">
              <div className="tags-section">
                <p>Popular Tags :</p>
                <ul className="tags-list">
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

              <div className="social-icons">
                {/* Replace with LinkedIn image: linkedin-icon.png */}
                <Link to="/" className="social-icon linkedin-icon">
                  <FaLinkedinIn />
                </Link>
                {/* Replace with Twitter image: twitter-icon.png */}
                <Link to="/" className="social-icon twitter-icon">
                  <RiTwitterXLine />
                </Link>
                {/* Replace with Facebook image: facebook-icon.png */}
                <Link to="/" className="social-icon facebook-icon">
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
