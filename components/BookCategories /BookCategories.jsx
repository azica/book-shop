import React from 'react';
import { useSelector } from 'react-redux';

const BookCategories = () => {
	const {categories} = useSelector(state=>state.books)
	return (
		<section className='bookCategories__sec bookCategories'>
			<div className="bookCategories__container">
				<ul className='bookCategories__list'>
					{categories.map(category=><li key={category} className='bookCategories__item'>{category}</li>)}
				</ul>
			</div>
		</section>
	);
}

export default BookCategories;
