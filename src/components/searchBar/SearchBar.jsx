import React from "react";
import "./SearchBar.css";

const SearchBar = ({ search, filterSearch }) => {
  return (
    <div className="search-container transition">
      <div className="box transition">
        <input type="text" className="input" name="txt" placeholder="search..." value={search} onChange={filterSearch} />
        <i className="fa fa-search"></i>
      </div>

      <div className="suggestions transition">
        <p style={{ borderLeft: "3px solid rgb(80, 80, 250)", backgroundColor: "#ffffff" }}>hey</p>
        <p>hii</p>
        <p>hi2</p>
        <p>hi4</p>
        <p>hi10</p>
      </div>
    </div>
  );
};

export default SearchBar;
