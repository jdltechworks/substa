import React, { Component } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
	return(
		<nav>
			<Link to="/auction">Auction</Link>
		</nav>
	);
}

export default Navbar;