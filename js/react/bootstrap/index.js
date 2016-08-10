import App from './containers';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from './stores';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';


export default class Root extends Component {
	render() {
		return(
			<Provider store={store}>
				<Router history={history}>
					<Route path="/" component={App}></Route>
				</Router>
			</Provider>
		);
	}
}