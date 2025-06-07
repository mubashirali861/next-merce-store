import { useEffect, useState } from "react";
import "./NewArrivals.css";
import { CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductItem from "../../common/ProductItem";
const NewArrivals = () => {
  let [productData, setProductData] = useState([]);
  let port = import.meta.env.VITE_PORT;

  useEffect(() => {
    let getProducts = async () => {
      try {
        let res = await axios.get(`${port}/products`);
        setProductData(res.data);
      } catch (error) {
        console.log("Failed to load products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <section className="custom-section-1">
      <div className="custom-container-1">
        {/*  <!-- section title -->  */}
        <div className="mb-custom">
          <div>
            <span className="custom-flex-row-1">
              <CgShoppingBag className="icon-style" />
              This Week’s
            </span>
            <h2 className="custom-heading-1">New Arrivals</h2>
          </div>

          <Link to="/shop-with-sidebar" className="custom-button-1">
            {" "}
            View All
          </Link>
        </div>

        <div className="custom-grid-1">
          {/* NEw Arrivals ITem */}
          {productData.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
