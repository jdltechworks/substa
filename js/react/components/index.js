import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../bootstrap/actions/AuctionActions';
import * as commentActions from '../bootstrap/actions/CommentActions';

const mapStateToProps = (state) => {
	return {
		comments: state.Comments
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(commentActions, dispatch);
}

class RootComponent extends Component {
	componentDidMount() {
		this.props.fetchComments({ id: 123, test: 'someshit'});
	}
	render() {
		console.log(this.props);
		return(
			<div className="page">
				{this.props.children}
			</div>
		);
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(RootComponent);

export default App;