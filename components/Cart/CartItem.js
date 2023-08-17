import {useState, useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../store/cart/cartSlice';
import Link from 'next/link';

const CartItem = ({item}) => {
	const [quantity, setQuantity] = useState(item.quantity)
	const [itemTotalSum, setItemTotalSum] = useState(0)
	const dispatch = useDispatch()

	useEffect(()=>{
		const sum = quantity * item.price
		setItemTotalSum(sum)
	},[quantity])
	
  const decrementHandler =()=>{
	if(quantity > 1) {
		setQuantity(prev=>prev-=1)
		dispatch(decrementQuantity(item.id))
	} 
	if(quantity <= 1) {
		dispatch(removeItem(item.id))
	}
  }
  const incrementHandler =()=> {
	setQuantity(prev=>prev+=1)
	dispatch(incrementQuantity(item.id))
  }
	return <li key={item.id} className="checkout__item item">
	<div className="item__image">
		<img src={item.imgUrl} alt={item.title}/>
	</div>
	<div className="item__body">
		<div>
			<h4><Link href={item.link}>{item.title}</Link></h4>
			<h6>by <span>{item.author}</span></h6>
			<div className="item__price">
				<span className="item__price-old">{item.price}$</span>
				<span className="item__price-new">{item.price}$</span>
			</div>
		</div>
		<div className="item__actions">
			<div className="item__input-group">
				<button onClick={decrementHandler}>-</button>
				<input type="number" value={quantity} readOnly/>
				<button onClick={incrementHandler}>+</button>
			</div>
			
			<div className="item__total-price">{itemTotalSum.toFixed(2)}$</div>
		</div>
	</div>
	
</li>
}

export default CartItem