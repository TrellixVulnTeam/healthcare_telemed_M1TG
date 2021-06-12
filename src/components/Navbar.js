import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './img/logo-horizontal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
	return (
		<div>
			<nav>
				<img src={logo} className='logoTop' alt='logo'></img>
				<div className='navTop'>
					<a href='tel:18002355656' className='button1'>
						<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />1 800-235-5656
					</a>
					{navTopLinks.map((data, index) => {
						return (
							<NavLink to={data.link} className='button1' key={index.link}>
								<FontAwesomeIcon icon={data.icon} className='faIcon' key={index.icon} />
								{data.menu} {index.menu}
							</NavLink>
						);
					})}
					<a href='https://healthcaretelemed.letstalk.video/' className='button1'>
						<FontAwesomeIcon icon={faShieldAlt} className='faIcon' />
						LOGIN
					</a>
				</div>
				<div className='navBottom'>
					<span>Solutions for</span>
					<div>
						{navBottomLinks.map((data, index) => {
							return (
								<NavLink to={data.link} className='button2' key={index.link}>
									{data.menu} {index.menu}
								</NavLink>
							);
						})}
					</div>
				</div>
			</nav>
		</div>
	);
}

const navTopLinks = [
	{
		menu: 'HOME',
		link: '/',
		icon: faHome,
	},
	{
		menu: 'CONTACT US',
		link: '/contact',
		icon: faPhoneAlt,
	},
];

const navBottomLinks = [
	{
		menu: 'DME',
		link: '/dmePhaLabBus',
	},
	{
		menu: 'Pharmacies',
		link: '/dmePhaLabBus',
	},
	{
		menu: 'Labs',
		link: '/dmePhaLabBus',
	},
	{
		menu: 'Providers',
		link: '/providers',
	},
];

export default NavBar;

/* <NavLink to='/dmePhaLabBus' className='button2'>
DME
</NavLink>
<NavLink to='/dmePhaLabBus' className='button2'>
Pharmarcies
</NavLink>
<NavLink to='/dmePhaLabBus' className='button2'>
Labs
</NavLink>
<NavLink to='/dmePhaLabBus' className='button2'>
Businesses
</NavLink>
<NavLink to='/providers' className='button2'>
Providers
</NavLink> */

/* <a href='tel:18002355656' className='button1'>
<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />1 800-235-5656
</a>
<NavLink to='/' className='button1'>
<FontAwesomeIcon icon={faHome} className='faIcon' />
HOME
</NavLink>
<NavLink to='/contact' className='button1 buttonRight'>
<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />
CONTACT US
</NavLink>
<a href='https://healthcaretelemed.letstalk.video/' className='button1'>
<FontAwesomeIcon icon={faShieldAlt} className='faIcon' />
LOGIN
</a>
<NavLink to='/applyNow' className='button1'>
<FontAwesomeIcon icon={faUser} className='faIcon' />
APPLY NOW
</NavLink> */
