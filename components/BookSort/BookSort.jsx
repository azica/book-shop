import React, { useEffect, memo } from 'react';
import GridThree from '../../assets/images/icons/gridThree.svg';
import GridList from '../../assets/images/icons/gridList.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setColumnView, setCurrentItemsPerPage } from '../../store/bookSort/bookSortSlice';
import { useState } from 'react';
import {useSort} from '../../hooks/useSort'
import { setSortedBooks } from '../../store/books/bookSlice';

const BookSort = () => {
	const [sort, setSort] = useState('')
	const dispatch = useDispatch()
	const {columnView, numberOfItems, currentItemsPerPage} = useSelector(state=>state?.bookSort)
	const {books} = useSelector(state=>state?.books)

	const clickHandler =() => {
		dispatch(setColumnView(!columnView))
	}
	const setItemsNumberHandler = (e) => {
		dispatch(setCurrentItemsPerPage(e.target.value))
	}
	const sortedBooks = useSort(books, sort)
	
	const sortHandler = (e) => {
		setSort(e.target.value)
	}
	useEffect(()=>{
		dispatch(setSortedBooks(sortedBooks))
	}, [sort ])
	
	return (
		<div className="bookSort">
			<div className="bookSort__row">
				<div className="bookSort__result">
					1 - 30 of 1 195 287 results
				</div>
				<div className="bookSort__sort">
					<div className="sort">
						<label className="sort__label" htmlFor="books">Sort By:</label>
						<select name="books" onChange={sortHandler} id="books" className="sort__select">
							<option value="a-b">Title (A to Z)</option>
							<option value="b-a">Title (Z to A)</option>
							<option value="newest">Publication Date (newest)</option>
							<option value="oldest">Publication Date (oldest)</option>
						</select>
					</div>
					<div className="sort">
						<label className="sort__label" htmlFor="booksQuantity">Items per page:</label>
						<select 
							onChange={setItemsNumberHandler}
							name="booksQuantity" 
							id="booksQuantity"
							defaultValue={currentItemsPerPage} 
							className="sort__select">
							{numberOfItems.map(number=>{
								return <option key={number}
								value={number}>{number}</option>
							})}
						</select>
					</div>
					<div className="bookSort__grid">
						<GridThree 
							className={columnView?"": 'active'}
							onClick={clickHandler}/>
						<GridList 
							className={columnView?"active": ''}
							onClick={clickHandler}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default memo(BookSort);
