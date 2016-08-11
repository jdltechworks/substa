import _ from 'lodash';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';

import mainReducer from '../reducers';

const middlewares = [thunk];

if(_.eq(process.env.NODE_ENV, 'development')) {
	middlewares.push(createLogger());
};

const store = createStore(mainReducer, applyMiddleware(...middlewares));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;