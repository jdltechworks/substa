export const addAuction = (entry) => {
	return {
		type: 'ADD_AUCTION',
		entry
	};
};

export const updateAuction = (entry) => {
	return {
		type: 'UPDATE_AUCTION',
		entry
	}
};

export const deleteAuction = (entry) => {
	return {
		type: 'DELETE_AUCTION',
		entry
	}
};

export const showAuctions = (entry) => {
	return {
		type: 'SHOW_ALL_AUCTIONS',
		entry
	}
};

export const showAuctionbyId = (entry) => {
	return {
		type: 'SHOW_AUCTION_BY_ID',
		entry
	}
};