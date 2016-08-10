/** @module myModule */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/AuctionActions';
import _ from 'lodash';


const _stateToProps = (state) => {
	return {
		auction: state.Auctions
	}
}

const _props = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

class RootComponent extends Component {
	render() {
		let { auction } = this.props;
		let { collection } = auction;
		let display = !_.isEmpty(collection) ? collection.map((auction, key) => (
				<li key={key}>
					<h2>{auction.title}</h2>
					<p>{auction.description}</p>
				</li>
		)) :
		<div>Is Loading</div>;
		return(
			<div className="page">
				<nav className="">Nav in the future</nav>
				<ul>
					{display}
				</ul>
				
				{this.props.children}
			</div>
		);
	}
	componentDidMount() {
		this.props.fetchAuction();
	}
}

const App = connect(_stateToProps, _props)(RootComponent);

export default App;