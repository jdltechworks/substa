/** @module Reducers */
import _ from 'lodash';

/**
 * [description]
 * @param  {Object} state  current state of an auction
 * @param  {[type]} action object to dispatch to our Auction reducer 
 * @return {object}        current or next state
 */
const Auctions = (state = {
	fetching: false,
	collection: {}
}, action) => {
	
	let reduced = {
		IS_FETCHING: {
			...state,
			fetching: true,
			collection: action.payload
		},
		FETCH_COMPLETED: {
			...state,
			fetching: false,
			collection: action.payload
		},
		FETCH_ERROR: {
			...state,
			fetching: false,
			collection: action.payload
		}
	}
	
	return _.isUndefined(reduced[action.type]) ? state: reduced[action.type];
}

export default Auctions;
