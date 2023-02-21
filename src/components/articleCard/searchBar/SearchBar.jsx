import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div class="box">
      <form name="search">
        <input
          type="text"
          class="input"
          name="txt"
        //   onmouseout="this.value = ''; this.blur();"
        />
      </form>
      <i className="fa fa-search"></i>

    </div>
  );
};

export default SearchBar;
