import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSellers } from '../store/topSelllers/topSellersAction';
import Slider from '../components/Slider/Slider';
import BookCard from '../components/BookCard/BookCard';
import Loader  from '../components/utils/Loader'
const TopSellers = () => {
	const dispatch = useDispatch()
	const { topSellers } = useSelector(state=>state?.topSellers)
	useEffect(()=>{
		dispatch(fetchTopSellers())
	},[])

	const bookArray = topSellers?.map(book=>{
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
			{ bookArray == undefined || bookArray.length < 0 ? <Loader/>
			:<Slider sliderTitle="Top Sellers" sliderList={[...bookArray]}/>
			}
		</>
	);
}

export default TopSellers;
