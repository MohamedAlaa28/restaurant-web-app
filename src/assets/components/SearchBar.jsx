import React, { useState } from "react";
import "../css/_SearchBar.scss";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search functionality here
    console.log("Search submitted:", searchValue);
  };

  return (
    <form className="searchForm" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        placeholder="Search"
        className="searchInput"
      />
      <button
        type="submit"
        className={`searchButton ${inputFocused ? "focused" : ""}`}
      >
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
