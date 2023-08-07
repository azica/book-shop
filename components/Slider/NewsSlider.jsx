import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import news from '../../assets/images/news.png'
import news1 from '../../assets/images/news1.png'
import Image from 'next/image';
const NewsSlider = () => {
	return (
		<div className="slider">
		<Swiper
				spaceBetween={40}
				modules={[Navigation]}
				navigation={true}
				className="slider__lsit"
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					}}
			>
				<SwiperSlide>
					<div className="news__card">
						<div className="news-card__body">
							<h6 className="news-card__title">The Books You Need to Read in 2023</h6>
							<p className="news-card__desc">his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills...</p>
						</div>
						<div className="news-card__image">
							<Image src={news} alt="news title"/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="news__card">
						<div className="news-card__body">
							<h6 className="news-card__title">February's Best Children's Books</h6>
							<p className="news-card__desc">Some of the finest children's authors currently writing have books publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet Muncaster. Across all areas and age ranges there are plenty of fantastic titles...</p>
						</div>
						<div className="news-card__image">
							<Image src={news1} alt="news title"/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="news__card">
						<div className="news-card__body">
							<h6 className="news-card__title">The Books You Need to Read in 2023</h6>
							<p className="news-card__desc">his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills...</p>
						</div>
						<div className="news-card__image">
							<Image src={news} alt="news title"/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default NewsSlider;
