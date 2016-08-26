import _ from 'lodash';

const Images = (state = {
	isUploading: false,
	isCompleted: false,
	payload: []
	}, action) => {
	let { payload } = action;
	let reduced = {
		'IS_UPLOADING': {
			...state,
			isUploading: true,
			isCompleted: false,
			payload
		},
		'IS_UPLOADED': {
			...state,
			isUploading: false,
			isCompleted: true,
			payload
		},
		'UPLOAD_ERROR': {
			...state,
			isUploading: false,
			isCompleted: false,
			payload
		}
	}

	return _.isUndefined(reduced[action.type]) ? state : reduced[action.type];
};

export default Images;