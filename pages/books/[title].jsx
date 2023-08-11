import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router';
import Loader from '../../components/utils/Loader';
import Head from 'next/head';
import Star from '../../assets/images/icons/star.svg'
import {ButtonWithCart, ButtonWhishlist} from '../../components/utils/Button'
import { fetchOneBook } from '../../store/books/bookActions';
import { addToCart } from '../../store/cart/cartSlice';

const BookDetail = () => {
	const {query} = useRouter()
	const dispatch = useDispatch()
	const {book} = useSelector(state=>state?.books)
	const [number, setNumber] = useState(1)
	useEffect(()=>{
		dispatch(fetchOneBook(query.title))
	}, [query])
	const clickHandler = (book) => {
		dispatch(addToCart(book))
	}
	const changeHandler = ()=> {

	}
	return (
		<>
		<Head>
			<title>Book Shop {(!book && book == undefined )? '': book.title }</title>
		</Head>
		{
			(!book && book == undefined )? 
			<Loader/>
			:
			<div className="bookDetail">
			<div className="bookDetail__container">
				<div className="bookDetail__col">
					<div className="bookDetail__image">
						<img src={book?.imgUrl} alt="book title"/>
					</div>
				</div>
				<div className="bookDetail__col">
					<h2 className="bookDetail__title">{book?.title}</h2>
					<h5 className="bookDetail__author"><strong>By</strong>{book.author}</h5>
					<div className="bookDetail__ratings">
						<Star/><Star/><Star/><Star/><Star/>
					</div>
					<p className="">{book.description}</p> 
					<ul className="bookDetail__details">
						{/* <li>ISBN: <span>{book.isbn[0]}</span></li> */}
						<li>Publish date: <span>{book.datePublished}</span></li>
						<li> Subjects: 
						{book?.subjects?.map(sub=><span key={sub}>{sub}</span>)}
						</li>
					</ul>
					<div className="bookDetail__flex">
						<label className="bookDetail__quantity" htmlFor="quantity"> Quantity
						<input 
						onChange={changeHandler}
						id="quantity" 
						type="number" 
						value={number}/></label>
						<div className="price">45.45 $</div>
					</div>
					<div className="bookDetail__flex">
						<ButtonWithCart text="Add to cart" onClick={()=>clickHandler(book)}/>
						<ButtonWhishlist text="Add to whishlist"/>
					</div>
				</div>
			</div>
		</div>
		}
		</>
		
	);
}

export default BookDetail;
