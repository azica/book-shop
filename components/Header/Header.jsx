import { useRef, useState } from "react";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderActions from "./HeaderActions";
import Hamburger from '../../assets/images/icons/hamburger.svg';
import Logo from '../../assets/images/newLogo.svg'
import useClickOutside from '../../hooks/useClickOutside';
import Cart from "../Cart/Cart";

const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const [showCart, setShowCart] = useState(false)
	const navRef = useRef()

	useClickOutside(navRef, setIsActive)
	

  return (
    <header className="header">
        <div className="header__container">
			<div 
			className="header__menu-burger" 
			onClick={e=>setIsActive(prev=>!prev)}
			>
				<Hamburger/>
			</div>
		  <HeaderSearch />
		  <nav className={`menu ${isActive?'active':''}`} ref={navRef}>
				<Link href="/" className="logo" onClick={()=>setIsActive(false)}><Logo/>
				</Link>
				<Link className="menu__link" href="/"  onClick={()=>setIsActive(false)}>
				Home
				</Link>
				<Link className="menu__link" href="/book-list"  onClick={()=>setIsActive(false)}>
				Books
				</Link>
				<Link className="menu__link" href="/contact"  onClick={()=>setIsActive(false)}>
				Contact
				</Link>
			</nav>
		  <HeaderActions setShowCart={setShowCart}/>
		  {showCart&& <Cart setShowCart={setShowCart}/>}
        </div>
    </header>
  );
};

export default Header;
