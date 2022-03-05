import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		const navLinkStyle = ({ isActive }) => {
			return {
				fontWeight: isActive ? 'bold' : 'normal',
				textDecoration: isActive ? 'none' : 'underline',
			};
		};

		return (
			<div>
				<nav className="primary-navbar">
					<NavLink style={navLinkStyle} to="/">
						Home
					</NavLink>
					<NavLink style={navLinkStyle} to="/about">
						About
					</NavLink>
					<NavLink style={navLinkStyle} to="/products">
						Products
					</NavLink>
					<NavLink style={navLinkStyle} to="/users">
						User
					</NavLink>
				</nav>
			</div>
		);
	}
}
