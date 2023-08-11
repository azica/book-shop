import React, {useState} from 'react';
import { memo } from 'react';

const BookFilter = ({filter, setFilter}) => {
	const [isActive, setIsActive] = useState('')
	
	const clickHandler = (str) => {
		setIsActive(str)
	}
	const changeHandler = (e) => {
		setFilter([...filter, e.target.value])
	}

	const filterClearHandler = (e) => {
		let inputs = e.target.offsetParent.querySelectorAll('input')
	
		const filteredArray = inputs.map(input=>{
			input.checked = false;
			return filter.filter(el=>el==input.value)
		})
		setFilter(filteredArray)
		// setFilter([])
	}
	return (
		<div className="bookFilter ">
			<div className={`filter__select filter ${isActive == "select" ? "active": ""}`} 
			onClick={()=>clickHandler("select")}>
				<h6 className="filter__title">Selected <span onClick={filterClearHandler}>Clear</span></h6>
				<div className="filter__select-list">
					<span></span>
				</div>
			</div>
			<div 
			className={`filter__type filter ${isActive == "type" ? "active": ""}`} 
				onClick={()=>clickHandler("type")}>
				<h6 className="filter__title">Product Types <span onClick={filterClearHandler}>Reset</span></h6>
				<div className="filter__list">
					<label forhtml="books">
						<input type="checkbox" value="books" name="books" id="books" onChange={changeHandler}/>
							Books
					</label>
					<label forhtml="music" >
						<input type="checkbox" value="music" name="music" id="music" onChange={changeHandler}/>
						Music
					</label>
					<label forhtml="gifts" >
						<input type="checkbox" value="gifts" name="gifts" id="gifts" onChange={changeHandler}/>
						Gifts
					</label>
				</div>
			</div>
			<div className={`filter__genres filter ${isActive == "genres"? "active": ""}`} 
				onClick={()=>clickHandler("genres")}>
				<h6 className="filter__title">Genres <span onClick={filterClearHandler}>Reset</span></h6>
				<div className="filter__list">
					<label forhtml="fiction">
						<input type="checkbox" value="fiction" name="fiction" id="fiction" onChange={changeHandler}/>
							Fiction
					</label>
					<label forhtml="history" >
						<input type="checkbox" value="history" name="history" id="history" onChange={changeHandler}/>
						History
					</label>
					<label forhtml="romance" >
						<input type="checkbox" value="romance" name="romance" id="romance" onChange={changeHandler}/>
						Romance
					</label>
				</div>
			</div>
			<div className={`filter__price filter ${isActive=="price"? "active": ""}`} 
				onClick={()=>clickHandler("price")}>
				<h6 className="filter__title">Price <span onClick={filterClearHandler}>Reset</span></h6>
				<div className="filter__list">
					
				</div>
			</div>
		</div>
	);
}

export default memo(BookFilter);
