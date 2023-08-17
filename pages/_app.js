import {store} from '../store/store'
import { Provider } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import 'normalize.css'
import '../assets/css/main.scss'

export default function App({ Component, pageProps }) {
	return <Provider store={store}>
		<div className='wrapper'>
			<Header/>
			<main><Component {...pageProps} /></main>
			<Footer/>
		</div>
	</Provider>
}