import React from 'react';
import NewsSlider from '../Slider/NewsSlider';

const News = () => {
	return (
		<section className="news">
			<div className="news__container">
				<h2>News</h2>
				<NewsSlider/>
			</div>
		</section>
	);
}

export default News;
