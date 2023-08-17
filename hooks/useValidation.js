import { useState } from "react"



export const useValidate = (values) =>{
	const errors ={
		name: '',
		email: '',
		password: ''
	}
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
	if(!values.name.toString().trim()){
		errors.name = "User Name required!"
	}
	if(!emailRegex.test(values.email.toString())){
		errors.email = "Email is not correct!"
	}
	if(!passwordRegex.test(values.password.toString())){
		errors.password = "Password is wrong!"
	}
	return errors
	
}