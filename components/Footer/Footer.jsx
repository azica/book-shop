import React from 'react';
import Logo from '../../assets/images/newLogo.svg'
import Link from 'next/link';
import Instagram from '../../assets/images/icons/instagram.svg';
import Google from '../../assets/images/icons/google.svg';
import Facebook from '../../assets/images/icons/facebook.svg';
const Footer = () => {
	return (
		<footer className='footer__section footer'>
				<div className="footer__container">
					<div className="footer__col">
						<Link href="/" className="footer__logo"><Logo/></Link>
						<ul className="footer__menu">
							<li className='footer__menu-item'><Link href="/about">About</Link></li>
							<li className='footer__menu-item'><Link href="/about">About</Link></li>
							<li className='footer__menu-item'><Link href="/about">About</Link></li>
						</ul>
					</div>
					<div className="footer__col">
						<p className='footer__subscribe'>Subscribe to stay tuned for new product and latest updates. Let’s do it!</p>
						<form action="" className="footer__subscribe-form">
							<input placeholder='Enter your email address' type='email'/>
							<button>subcribe</button>
						</form>
					</div>
				</div>
				<hr/>
				<div className="footer__container">
					<div className="footer__col">
						<ul className="footer__menu">
							<li>Privacy Policy</li>
							<li>Terms of Use</li>	
						</ul>
					</div>
					<div className="footer__col">
						<ul className="footer__socials">
							<li><Instagram/></li>
							<li><Google/></li>
							<li><Facebook/></li>
						</ul>
					</div>
				</div>
		</footer>
	);
}

export default Footer;
