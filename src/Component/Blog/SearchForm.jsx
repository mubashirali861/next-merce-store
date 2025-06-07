import React from "react";
import "./SearchForm.css";
import { CiSearch } from "react-icons/ci";
const SearchForm = () => {
  return (
    <div className="search-box-container">
      <div className="search-box-header">
        <h2 className="search-box-title">Search</h2>
      </div>

      <div className="search-box-body">
        <form>
          <div className="search-box-input-wrapper">
            <input
              type="text"
              placeholder="Search here..."
              className="search-box-input"
            />
            <button className="search-box-button">
              {/* search-icon.svg */}
              <CiSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
