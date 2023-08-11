import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = ({sliderTitle, sliderList }) => {
	return (
		<section className='slider__section slider'>
			<div className="slider__container">
				<h2 className="slider__title">{sliderTitle}</h2>
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
							  slidesPerView: 1.5,
							  spaceBetween: 40,
							},
							1024: {
							  slidesPerView: 2.5,
							  spaceBetween: 50,
							},
						  }}
					>
						{sliderList.map((slide, idx)=><SwiperSlide key={idx}>{slide}</SwiperSlide>)}
						
					</Swiper>
			</div>
		</section>
	);
}

export default Slider;
