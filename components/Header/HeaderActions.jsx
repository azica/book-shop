import { useSelector } from 'react-redux';
import User from '../../assets/images/icons/user.svg'
import Whishlist from '../../assets/images/icons/whishlist.svg'
import {HeaderButtonWithCart} from '../utils/Button';
import CartIcon from '../../assets/images/icons/cart.svg';

const HeaderActions = ({setShowCart}) => {
	const {cart} = useSelector(state=>state?.cart)
	const totalQuantity = cart?.reduce((arr, el)=>{
		return arr += el.quantity
	},0)
	return (
		<ul className='header__actions actions'>
			<li className="actions__item"><User/></li>
			<li className="actions__item"><Whishlist/></li>
			<li className="actions__item">
				<CartIcon 
				onClick={()=>setShowCart(prev=>!prev)} 
				totalQuantity={totalQuantity >  0 && totalQuantity} className="mobile"/>
				<HeaderButtonWithCart text="Basket" 
				onClick={()=>setShowCart(prev=>!prev)} 
				totalQuantity={totalQuantity > 0 && totalQuantity}/>
			</li>
		</ul>
	);
}

export default HeaderActions;
