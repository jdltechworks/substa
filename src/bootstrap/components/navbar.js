import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to="/auction">Auction</Link></li>
            <li><Link to="/auction/add">Add Auction</Link></li>
            <li><Link to="/profile/edit">Edit Profile</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;