import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
	render() {
		return(
			<header>
				<nav>
					<Link to="/auction">Auction</Link>
					<Link to="/auction/add">Auction</Link>
				</nav>
			</header>
		);
	}
}

export default Navbar;