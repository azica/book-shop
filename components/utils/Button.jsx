import Cart from '../../assets/images/icons/cart.svg'
import Whishlist from '../../assets/images/icons/whishlist.svg'

export const ButtonWithCart = ({text, onClick}) => {
	return (
		<button className='btn cart__btn' onClick={onClick}> 
			<Cart/>
			{text}
		</button>
	);
}

export const ButtonWhishlist = ({text, onClick})=>{
	return (
		<button className='btn' onClick={onClick}> 
			<Whishlist/>
			{text}
		</button>
	);
}

export const Button = ({text, onClick}) => {
	return (
		<button className='btn' onClick={onClick}> 
			{text}
		</button>
	);
}
export const HeaderButtonWithCart = ({text, onClick, totalQuantity}) => {
	return (
		<button className='btn header__btn' onClick={onClick}> 
			<span>{totalQuantity}</span>
			<Cart/>
			{text}
		</button>
	);
}