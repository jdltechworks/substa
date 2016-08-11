/* @module Actions */

/**
 * test description option
 * @param  {object} payload [description]
 * @return {object}       [description]
 */


const END_POINT = () => {
	let api = ''
	if(_.eq(process.env.NODE_ENV, 'production')) {
		api = '//subasta-jdltechworks.rhcloud.com/api';
	} else {
		api = '//localhost:8000/api';
	}

	return api;
}

export const fetchAuction = () => {
	return (dispatch) => {

		fetch(`${END_POINT()}/auction`)
			.then((res) => {
				
				dispatch(isFetchingAuction());
				
				return res.json();
			
			}).then((json) => {
				
				dispatch(fetchedAuction(json));
			
			}).catch(err => dispatch(fetchingError(err)));
		
	};

};

export const isFetchingAuction = () => {
	return {
		type: 'IS_FETCHING',
		payload: {}
	}
};

export const fetchingError = (payload) => {
	return {
		type: 'FETCH_ERROR',
		payload: payload
	}
};

export const fetchedAuction = (payload) => {
	return {
		type: 'FETCH_COMPLETED',
		payload
	}
};

export const deleteAuction = (payload) => {
	return {
		type: 'DELETE_AUCTION',
		payload
	}
};

export const showAuctions = (payload) => {
	return {
		type: 'SHOW_ALL_AUCTIONS',
		payload
	}
};

export const showAuctionbyId = (payload) => {
	return {
		type: 'SHOW_AUCTION_BY_ID',
		payload
	}
};