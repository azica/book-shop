import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const CustomToasty = ({text}) => {
	if(!text) return null
	toast.error(text, {
        position: toast.POSITION.TOP_RIGHT
      });

  return (
	<ToastContainer
		position="top-right"
		autoClose={8000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		// theme="colored"
	/>
			
  )
}

export default CustomToasty