import Hero from "../components/Hero/Hero";
import BookCategories from "../components/BookCategories /BookCategories";
import TopSellers from "../components/TopSellers";
import RecommendedSlider from "../components/RecommendedSlider";
import News from "../components/News/News";
import Head from "next/head";

const Index = () => {
	
	return (
		<>
		<Head>
			<title>Book Shop</title>
		</Head>
			<BookCategories/>
			<Hero/>
			<TopSellers/>
			<RecommendedSlider/>
			<News/>
		</>
	);
}

export default Index;
