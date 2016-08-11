import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Auctions from './Auctions';
import Comments from './Comments';

const mainReducer = combineReducers({ 
	Auctions, 
	Comments, 
	routing: routerReducer 
});

export default mainReducer;