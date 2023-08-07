import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
	const {cart} = useSelector(state=>state?.cart)
	return (
		<div className="checkout__container">
			<div className="checkout">
			<h2>Your Cart</h2>
			<ul className="cart__list">
				{cart.map(item=><li key={item.id} className="cart__item">
					<div className="cart__image">
						<img src={item.imgUrl} alt={item.title}/>
					</div>
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
			</div>
		</div>
	);
}

export default Checkout;
