import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import Auctions from './Auctions';
import Comments from './Comments';

const mainReducer = combineReducers({ 
	Auctions, 
	Comments,
	form: formReducer,
	routing: routerReducer 
});

export default mainReducer;