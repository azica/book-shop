import React, { useEffect } from "react";

export default function useClickOutside(ref, setClose) {
	if(ref === undefined) return false
	useEffect(() => {
		const handleClickOutside = (event) => {
		  if (!ref.current.contains(event.target)) {
			setClose(false)
		  }
		};
		document.addEventListener("mousedown", handleClickOutside);
	  }, [ref]);

  
}