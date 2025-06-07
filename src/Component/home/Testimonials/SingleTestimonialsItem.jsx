import React from "react";
import "./SingleTestimonialsItem.css";
import { Link } from "react-router-dom";
const SingleTestimonialsItem = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        <img
          src="/images/icons/icon-star.svg"
          alt="star icon"
          width={15}
          height={15}
        />
        <img
          src="/images/icons/icon-star.svg"
          alt="star icon"
          width={15}
          height={15}
        />
        <img
          src="/images/icons/icon-star.svg"
          alt="star icon"
          width={15}
          height={15}
        />
        <img
          src="/images/icons/icon-star.svg"
          alt="star icon"
          width={15}
          height={15}
        />
        <img
          src="/images/icons/icon-star.svg"
          alt="star icon"
          width={15}
          height={15}
        />
      </div>

      <p className="testimonial-review">{testimonial.review}</p>

      <Link to="/" className="testimonial-author">
        <div className="testimonial-author-image">
          <img
            src={testimonial.authorImg}
            alt="author"
            className="author-img"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h3 className="author-name">{testimonial.authorName}</h3>
          <p className="author-role">{testimonial.authorRole}</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleTestimonialsItem;
