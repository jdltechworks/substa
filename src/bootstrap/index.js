import App from './containers';
import Auctions from './containers/Auctions'; 
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from './stores';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';


const Root = () => {
  return(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/auction" component={Auctions}></Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;