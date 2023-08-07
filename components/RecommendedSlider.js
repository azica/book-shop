import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSellers } from '../store/topSelllers/topSellersAction';
import Slider from '../components/Slider/Slider';
import BookCard from '../components/BookCard/BookCard';

const RecommendedSlider = () => {
	const dispatch = useDispatch()
	const { topSellers } = useSelector(state=>state.topSellers)
	useEffect(()=>{
		dispatch(fetchTopSellers())
	},[])

	const bookArray = topSellers.map(book=>{
		const bookObj = {
			id: book.key.split('/')[2],
			title: book.title,
			imgUrl: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
			author: book.author_name[0],
			link: `/books/${book.key.split('/')[2]}`
		}
		return <BookCard book ={bookObj}/>
	})
	return (
		<>
			<Slider sliderTitle="Recommended for you " sliderList={[...bookArray]}/>
		</>
	);
}

export default RecommendedSlider;
