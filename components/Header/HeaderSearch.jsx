import React, {useState} from "react";
import Search from "../../assets/images/icons/search.svg";
import { useRouter } from "next/router";

const HeaderSearch = () => {
	const [searchText, setsearchText] = useState("");
	const router = useRouter()
	const ChangeHandler = (e) => {
		setsearchText(e.target.value)
	}
	const onKeyPresshandler = (e) => {
		if (e.key === "Enter") {
			router.push({
			  pathname: "/listSearch",
			  query: {
				searchQuery: searchText
			  }
			});
		  }
	}
  return (
    <div className="header__search-form search-form">
		<button className="search-form__button">
        <Search />
      </button>
		<input 
			onChange={ChangeHandler}
			onKeyDown={onKeyPresshandler}
			value={searchText}
			className="search-form__input" 
			type="search" 
			placeholder="Search Books..." />
    </div>
  );
};

export default HeaderSearch;
