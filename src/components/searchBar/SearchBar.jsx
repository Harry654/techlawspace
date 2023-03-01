import React from "react";
import "./SearchBar.css";
import categories from "../../utils/categories.json";
import { MdCancel } from "react-icons/md";

const SearchBar = ({
  search,
  filterSearch,
  articleCategory,
  filterCategory,
  tag,
  clearTags,
}) => {
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
        {tag && (
          <span className="tag">
            {tag}
            <MdCancel
              onClick={clearTags}
            />
          </span>
        )}
        <p
          style={
            "" === articleCategory
              ? {
                  borderLeft: "3px solid rgb(80, 80, 250)",
                  backgroundColor: "#ffffff",
                }
              : {}
          }
          onClick={() => {
            filterCategory("");
          }}
        >
          {"all"}
        </p>
        {categories.map((category, index) => (
          <p
            key={index}
            style={
              category === articleCategory
                ? {
                    borderLeft: "3px solid rgb(80, 80, 250)",
                    backgroundColor: "#ffffff",
                  }
                : {}
            }
            onClick={() => {
              filterCategory(category);
            }}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
