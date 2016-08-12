import React, { Component } from 'react';
import Navbar from '../components/navbar';

/** @todo  user authentication check per role */
class App extends Component {
	render() {
		return(
			<div class="page">
				<div className="page-inner">
					<Navbar />
					{this.props.children}
			</div>
			</div>
		);
	}
}

export default App;