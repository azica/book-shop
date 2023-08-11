import { useMemo, useState } from "react"

export function useSort (sortArray, sort) {
	if(sortArray == []) return null
	const sortedArray = useMemo(()=>{
		switch (sort) {
			case "a-b": {
				return [...sortArray].sort((a,b)=>a.title.toLowerCase() < b.title.toLowerCase()&& -1)	
			}
			case "b-a": {
				return [...sortArray].sort((a,b)=>a.title.toLowerCase() > b.title.toLowerCase()&& -1)
			}
			default: return sortArray
			
		}
	
	}, [sortArray, sort])
	return sortedArray
}