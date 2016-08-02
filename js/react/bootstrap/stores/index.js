import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import mainReducer from '../reducers';


const store = createStore(mainReducer, applyMiddleware(thunk));


export const history = syncHistoryWithStore(browserHistory, store);

export default store;