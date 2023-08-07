import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../utils/Button';
import CartIcon from '../../assets/images/icons/cart.svg';
import { useRouter } from 'next/router';
import useClickOutside from '../../hooks/useClickOutside';


const Cart = ({setShowCart}) => {
	const cartRef = useRef()
	 useClickOutside(cartRef, setShowCart)
	const router = useRouter()
	const {cart} = useSelector(state=>state?.cart)
	const changeHandler = (e) =>{
		setQuantity(e.target.value)
	}
	const totalQuantity = cart.reduce((arr, el)=>{
		return arr += el.quantity
	},0)

	const setTotalPrice = cart.reduce((arr, el)=>{
		return arr = arr + (el.quantity * el.price)
	}, 0)
	const clickHandler = ()=> {
		router.push('/checkout')
		setShowCart(false)
	}
	return (
		<div className="cart" ref={cartRef}>
			<h4>Shopping Cart <CartIcon/><span>{totalQuantity}</span></h4>
			{cart.length === 0? <p>There are currently no items in your shopping cart.</p>
			:  
			<>
			<ul className="cart__list">
				{cart.map(item=><li key={item.id} className="cart__item">
					<div className="cart__image"><img src={item.imgUrl} alt={cart.title}/></div>
					<div className="cart__body">
						<h5>{item.title}</h5>
						<h6>by <span>{item.author}</span></h6>
						<div className="cart__actions">
							<span>{item.quantity}</span>
							<span>X</span>
							<span className="cart__price">{item.price}$</span>
						</div>
					</div>
				</li>)}
			</ul>
			<h4>Subtotal:  <strong>{setTotalPrice}$</strong></h4>
				<Button onClick={clickHandler} text="Continue To Checkout"/>
			</>
			}
		</div>
	);
}

export default Cart;
