import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
	render() {
		return(
			<header>
				<nav className="navbar navbar-fixed-top navbar-inverse">
					<ul className="nav navbar-nav">
						<li><Link to="/auction">Auction</Link></li>
						<li><Link to="/auction/add">Add Auction</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;