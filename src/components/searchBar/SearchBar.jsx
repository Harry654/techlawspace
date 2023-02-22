import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="box transition">
      <input type="text" className="input" name="txt" />
      <i className="fa fa-search"></i>
    </div>
  );
};

export default SearchBar;
