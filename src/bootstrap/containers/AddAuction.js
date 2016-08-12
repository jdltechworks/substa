import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const FIELDS = {
	title: {
		id: 0,
		type: 'text',
		label: 'Title of the auction',
		component: 'input'
	},
	endDate: {
		id: 1,
		type: 'text',
		label: 'end date',
		component: 'input'
	},
	minBid: {
		id: 2,
		type: 'text',
		label: 'minimum bid',
		component: 'input'
	},
	images: {
		id: 3,
		type: 'text',
		label: 'images',
		component: 'input'
	},
	startDate: {
		id: 4,
		type: 'text',
		label: 'Start date',
		component: 'input'
	},
	'description': {
		id: 5,
		type: 'textarea',
		label: 'test',
		component: 'textarea'
	}
};

const validate = (values) => {
	const errors = {};
	_.each(FIELDS, (type, field) => {
		if(!values[field]) {
			errors[field] = `${field} is blank`;
		}
	});
	console.log(errors);
	return errors;
}

@reduxForm({
	form: 'new-auction',
	fields: _.keys(FIELDS),
	validate
})

export default class AddAuction extends Component {
	submitAuction(props) {
		console.log(props);
	}
	renderField(fieldConfig, field) {


		return <Field key={fieldConfig.id} type={fieldConfig.type} name={field} component={fieldConfig.component} />
	}
	render() {
		let { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit((props) => this.submitAuction(props))}>
				{_.map(FIELDS, this.renderField.bind(this))}
				<button>SUbmit</button>
			</form>
		);
	}
}

