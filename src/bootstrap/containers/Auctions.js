/** @module myModule */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/AuctionActions';
import _ from 'lodash';


const _props = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

/**
 * Connect reducer to Auction component
 * @param  {object} store / state
 * @return {object} reducer
 */
@connect((state) => {
	return {
		auction: state.Auctions
	};
}, _props)

export default class Auctions extends Component {
	render() {
		let { auction } = this.props;
		let { collection } = auction;
		let display = _.isEmpty(collection) ?
			<div>Is Loading</div>
			:
			collection.map((auction, key) => (
				<li key={key}>
					<img src={auction.image} />
					<h2>{auction.title}</h2>
					<p>{auction.description}</p>
				</li>
		));
		return(
			<section className="main">
				<ul>
					{display}
				</ul>
			</section>
		);
	}
	componentDidMount() {
		this.props.fetchAuction();
	}
	componentWillUnmount() {
		this.props.isFetchingAuction();
	}
}
