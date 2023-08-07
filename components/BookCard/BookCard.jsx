import React from 'react';
import {ButtonWithCart} from '../utils/Button';
import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cartSlice';
import WhislistIcon from '../../assets/images/icons/whishlist.svg';
import CartIcon from '../../assets/images/icons/cart.svg';


const BookCard = ({book}) => {
	const dispatch = useDispatch()

	const clickHandler = (book) => {
		dispatch(addToCart(book))
	}
	return (
		<div className='card'>
			<div className="card__image">
				<img src={book?.imgUrl} alt={book?.title}/>
			</div>
			<div className="card__content">
				<h6 className="card__title"><Link href={book?.link}>{book.title}</Link></h6>
				{/* <p className="card__descr">{book.first_sentence}...</p> */}
				<p className="card__author"><strong>by </strong>{book?.author}</p>
				<div className="card__prices">
					<span>$ 27.89</span>
					<span className='discount'>$ 30.99</span>
				</div>
				<div className="card__actions">
					<span><WhislistIcon/></span>
					<span><CartIcon onClick={()=>clickHandler(book)} className="mobile"/></span>
					<ButtonWithCart 
					onClick={()=>clickHandler(book)}
					book={book}
					text="Add to basket"/>
				</div>
			</div>
		</div>
	);
}

export default memo(BookCard);
