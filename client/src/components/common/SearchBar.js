import React from "react";
import { searchIcon } from "../../utils/Lists";
import "../../styles/common/SearchBar.scss";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='search-container'>
      <input
        className='search-bar'
        placeholder='Search'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img src={searchIcon} alt='' />
    </div>
  );
};

export default SearchBar;
