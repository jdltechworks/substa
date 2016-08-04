import React, { Component } 			from 'react';
import { bindActionCreators } 		from 'redux';
import { connect } 								from 'react-redux';
import * as actionCreators 				from '../bootstrap/actions/AuctionActions';

const mapStateToProps = (state) => {
	return {
		auction: state.Auctions
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

class RootComponent extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return(
			<div className="page">
				{this.props.children}
			</div>
		);
	}
}

const Test = connect(mapStateToProps, mapDispatchToProps)(RootComponent);

export default Test;