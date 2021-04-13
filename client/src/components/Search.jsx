import React from "react";
import "../assets/Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="Search Products"
        type="text"
        autoFocus
      />
      <button type="submit" className="fa fa-search"></button>
    </form>
  );
};

export default Search;