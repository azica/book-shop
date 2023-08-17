import React, { useState } from "react";
import { Button } from "../utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../store/auth/authAction";
import { useValidate } from "../../hooks/useValidation";

const Registration = () => {
	const dispatch = useDispatch()
  	const [user, setUser] = useState({name:'',email:'',password:''});
	const {isAuth} = useSelector(state=>state.auth)
	const [isError, setIsError] = useState(false)
	const errors = useValidate(user)
	const getToken = (key) => {
		if(typeof window !== 'undefined'){
			return window.localStorage.getItem(key)
		}
	}
	
	const changeHandler = (e) => {
		const {value, name } = e.target
		setUser({...user,[name]:value})
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if(Object.values(errors).every(error=>error=='')) {
			setIsError(false)
			if(!isError) {
				if(getToken('newToken')){
					dispatch(login(user))
				} else {
					dispatch(register(user))
				}
			}
		} else {
			setIsError(true)
		}
	};

  return (
    <div className="registration">
		<h2>{ getToken('newToken') ? "Login" : "Registration"}</h2>
      <form className="registration__form form">
        <div className="form__group">
          <input
            id="name"
            className="form__input"
            type="text"
            onChange={changeHandler}
            value={user.name}
            name="name"
			required
          />
		   <label htmlFor="name" className="form__label">
            Your Name:
          </label>
		  {isError && errors.name && <span className="form__error">{errors.name}</span>}
        </div>
        <div className="form__group">
          <input
            id="email"
            className="form__input"
            type="email"
            onChange={changeHandler}
            value={user.email || ''}
            name="email"
			required
          />
		   <label htmlFor="email" className="form__label">
            Your Email:
          </label>
		  {isError && errors.email && <span className="form__error">{errors.email}</span>}
        </div>
        <div className="form__group">
          <input
            id="password"
            className="form__input"
            type="password"
            onChange={changeHandler}
            value={user.password}
            name="password"
			required
          />
		   <label htmlFor="password" className="form__label">
            Your Password:
          </label>
		  {isError && errors.password && <span className="form__error">{errors.password}</span>}
        </div>
		<Button text="Submit" onClick={submitHandler}/>
      </form>
    </div>
  );
};

export default Registration;
