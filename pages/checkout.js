import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Button} from '../components/utils/Button';
import CartItem from '../components/Cart/CartItem';
const Checkout = () => {
	const {cart} = useSelector(state=>state?.cart)
	const [totalSum, setTotalSum] = useState(0)
	const [totalItems, setTotalItems]= useState(0)
	const clickHandler = (e)=> {
		e.preventDefault()
	}
	useEffect(()=>{
		if(cart.length !== 0) {
			const total = cart.reduce((acc,item)=>{
				return acc +  (item.quantity*item.price)
			},0)
			setTotalSum(total)

			const itemsTotal = cart.reduce((acc, item)=>{
				return acc + item.quantity
			},0)
			setTotalItems(itemsTotal)
		}
	}, [cart, totalSum, totalItems])
	return (
		<div className="checkout__container">
			<div className="checkout">
			<h2>Your Cart { cart.length == 0 && 'is empty'}</h2>
				{
					cart.length !== 0 &&
					<div className="checkout__inner">
					<ul className="checkout__list">
						{cart.map(item=><CartItem key={item.id} item={item}/>)}
					</ul>
					<ul className="checkout__order">
						<li><h4>Your Order</h4></li>
						<li>Items <span>{totalItems} pcs</span></li>
						<li>Sub total <span>{totalSum.toFixed(2)}$</span></li>
						<li>Total to pay <span>{totalSum.toFixed(2)}$</span></li>
						<Button text="Checkout" onClick={clickHandler}/>
					</ul>
				</div>
				}
			</div>
		</div>
	);
}

export default Checkout;
