import React from "react";
import Search from "../../assets/images/icons/search.svg";

const HeaderSearch = () => {
  return (
    <form className="header__search-form search-form">
		<button className="search-form__button">
        <Search />
      </button>
		<input className="search-form__input" 
		type="search" placeholder="Search Books..." />
    </form>
  );
};

export default HeaderSearch;
