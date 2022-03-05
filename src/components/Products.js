import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Products = () => {
	return (
		<div className="container">
			<input type="search" placeholder="search products" />

			<nav className="secondary-navbar">
				<NavLink to="featured">Featured</NavLink>
				<NavLink to="new">New</NavLink>
			</nav>

			<Outlet />
		</div>
	);
};
