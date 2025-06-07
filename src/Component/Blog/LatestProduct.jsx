import React from "react";
import "./LatestProduct.css";
import { Link } from "react-router-dom";
const LatestProduct = ({ products }) => {
  return (
    <div className="latest-products-card">
      <div className="latest-products-header">
        <h2 className="latest-products-title">Latest Products</h2>
      </div>

      <div className="latest-products-body">
        <div className="latest-products-list">
          {products.slice(0, 3).map((product, key) => (
            <div className="latest-product-item" key={key}>
              <div className="latest-product-image-wrapper">
                <img
                  src={product.imgs?.thumbnails?.[0]}
                  alt="product"
                  width={74}
                  height={74}
                />
              </div>

              <div>
                <h3 className="latest-product-name">
                  <Link to="/shop-details" className="product-title">
                    {product.title}
                  </Link>
                </h3>
                <p className="latest-product-price">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
