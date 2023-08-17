import axios from "axios";


// const baseUrl = 'http://localhost:5000'

// const axiosInstance = axios.create({
// 	baseURL: baseUrl,
// 	timeout: 5000,
// 	headers: {
// 		Authorization: getToken('newToken')? 'JWT' + getToken('newToken'):
// 		null,
// 		'Content-Type': 'application/json',
// 		accept: 'application/json',
// 		'Cache-Control': 'no-cache',
// 		Prag
// 	}
// })





export const saveToken = (key, value)=> {
	if(typeof window !== 'undefined'){
		return window.localStorage.setItem(key, value)
	}
}
export const getToken = (key) => {
	if(typeof window !== 'undefined'){
		return window.localStorage.getItem(key)
	}
}