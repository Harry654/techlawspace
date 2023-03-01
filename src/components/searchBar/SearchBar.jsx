import React from "react";
import "./SearchBar.css";
import categories from "../../utils/categories.json";

const SearchBar = ({ search, filterSearch, articleCategory, filterCategory }) => {
  return (
    <div className="search-container transition">
      <div className="box transition">
        <input
          type="text"
          className="input"
          name="txt"
          placeholder="search..."
          value={search}
          onChange={filterSearch}
        />
        <i className="fa fa-search"></i>
      </div>

      <div className="suggestions transition">
          <p
            style={"" === articleCategory ? {
              borderLeft: "3px solid rgb(80, 80, 250)",
              backgroundColor: "#ffffff",
            } : {}}
            onClick={() => { filterCategory("") }}
          >
            {"all"}
          </p>
        {categories.map((category, index) => (
          <p
            key={index}
            style={category === articleCategory ? {
              borderLeft: "3px solid rgb(80, 80, 250)",
              backgroundColor: "#ffffff",
            } : {}}
            onClick={() => { filterCategory(category) }}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
