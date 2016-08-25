import React, { Component } from 'react';
import Navbar from '../components/navbar';

/** @todo  user authentication check per role */
class App extends Component {
	render() {
		return(
			<div class="page">
				<Navbar />
				<div className="page-inner">
					<div className="container">
						{this.props.children}
					</div>
			</div>
			</div>
		);
	}
}

export default App;
