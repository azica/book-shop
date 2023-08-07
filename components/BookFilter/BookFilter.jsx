import React, { useState } from 'react';
import { memo } from 'react';

const BookFilter = () => {
	const [isActive, setIsActive] = useState(false)
	const clickHandler = () => {
		setIsActive(prev=>!prev)
	}
	return (
		<div className="bookFilter ">
			<div className="filter filter__select" onClick={clickHandler}>
				<h6 className="filter__title">Selected <span>Clear</span></h6>
				<div className="filter__select-list">
					<span></span>
				</div>
			</div>
			<div className="filter filter__type" onClick={clickHandler}>
				<h6 className="filter__title">Product Types <span>Reset</span></h6>
				<div className={`filter__list ${isActive? "active": ""}`}>
					<label forhtml="books">
						<input type="checkbox" value="Books" name="books" id="books"/>
							Books
					</label>
					<label forhtml="Music" >
						<input type="checkbox" value="Music" name="Music" id="Music"/>
						Music
					</label>
					<label forhtml="Gifts" >
						<input type="checkbox" value="Gifts" name="Gifts" id="Gifts"/>
						Gifts
					</label>
				</div>
			</div>
			<div className="filter filter__genres" onClick={clickHandler}>
				<h6 className="filter__title">Genres <span>Reset</span></h6>
				<div className={`filter__list ${isActive? "active": ""}`}>
					<label forhtml="Fiction">
						<input type="checkbox" value="Fiction" name="Fiction" id="Fiction"/>
							Fiction
					</label>
					<label forhtml="History" >
						<input type="checkbox" value="History" name="History" id="History"/>
						History
					</label>
					<label forhtml="Romance" >
						<input type="checkbox" value="Romance" name="Romance" id="Romance"/>
						Romance
					</label>
				</div>
			</div>
			<div className="filter filter__price" onClick={clickHandler}>
				<h6 className="filter__title">Price <span>Reset</span></h6>
				<div className={`filter__list ${isActive? "active": ""}`}>
					
				</div>
			</div>
		</div>
	);
}

export default memo(BookFilter);
