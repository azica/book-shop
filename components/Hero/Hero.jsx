import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Image from "next/image";
import {Button} from "../utils/Button";
import book from "../../assets/images/book.png";
import book1 from "../../assets/images/books1.png";
import book2 from "../../assets/images/books2.png";


const Hero = () => {
  return (
    <div className="hero__section hero">
      <div className="hero__container">
        <div className="hero__inner">
          <aside className="hero__aside">
            <h1 className="hero__title">New Releases This Week</h1>
            <p className="hero__text">
			It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
            </p>
            <Button text="Subscribe" />
          </aside>
         <div className="hero__slider">
		 <Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				pagination={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				  }}
				coverflowEffect={{
				  rotate: 50,
				  stretch: 0,
				  depth: 100,
				  modifier: 1,
				  slideShadows: true,
				}}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				className="mySwiper"
			>
				  <SwiperSlide><Image className="hero__image" src={book} alt="hero image" /></SwiperSlide>
				  <SwiperSlide><Image className="hero__image" src={book1} alt="hero image"  /></SwiperSlide>
				  <SwiperSlide><Image className="hero__image" src={book2} alt="hero image"  /></SwiperSlide>
				  <SwiperSlide><Image className="hero__image" src={book} alt="hero image" /></SwiperSlide>
				  <SwiperSlide><Image className="hero__image" src={book1} alt="hero image"  /></SwiperSlide>
				  <SwiperSlide><Image className="hero__image" src={book2} alt="hero image"  /></SwiperSlide>
			</Swiper>
			
		 </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
