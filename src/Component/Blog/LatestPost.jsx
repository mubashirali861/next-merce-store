import React from "react";
import "./LatestPost.css";
import { Link } from "react-router-dom";
const LatestPost = ({ blogs }) => {
  return (
    <div className="recent-posts-card">
      <div className="recent-posts-header">
        <h2 className="recent-posts-title">Recent Posts</h2>
      </div>

      <div className="recent-posts-body">
        <div className="recent-posts-list">
          {blogs.slice(0, 3).map((blog, key) => (
            <div className="recent-post-item" key={key}>
              <Link
                to="/blogs/blog-details-with-sidebar"
                className="recent-post-thumbnail"
              >
                <img
                  src={blog.img}
                  alt="blog"
                  className="recent-post-image"
                  width={110}
                  height={80}
                />
              </Link>

              <div>
                <h3 className="recent-post-title">
                  <Link
                    to="/blogs/blog-details-with-sidebar"
                    className="blog-title"
                  >
                    {blog.title}
                  </Link>
                </h3>

                <span className="recent-post-meta">
                  <Link to="/" className="recent-post-date">
                    {blog.date}
                  </Link>

                  <span className="recent-post-divider"></span>

                  <Link to="/" className="recent-post-views">
                    {blog.views}k Views
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
