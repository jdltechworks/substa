import React, { Component } from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './stores';
import App from '../components';
import Test from '../components/test';

export default class Root extends Component {
	render() {
		return(
			<Provider store={store}>
				<Router history={history}>
					<Route path="/" component={App}></Route>
					<Route path="/test" component={Test}></Route>
				</Router>
			</Provider>
		);
	}
}