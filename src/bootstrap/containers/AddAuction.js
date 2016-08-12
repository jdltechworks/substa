import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const FIELDS = {
	title: {
		id: 0,
		type: 'input',
		label: 'Title of the auction'
	},
	endDate: {
		id: 1,
		type: 'input',
		label: 'end date',
	},
	minBid: {
		id: 2,
		type: 'input',
		label: 'minimum bid',
	},
	images: {
		id: 3,
		type: 'input',
		label: 'images',
	},
	startDate: {
		id: 4,
		type: 'input',
		label: 'Start date',
	},
	'description': {
		id: 5,
		type: 'textarea',
		label: 'test'
	}
};

const validate = (values) => {
	const errors = {};
	_.each(FIELDS, (type, field) => {
		if(!values[field]) {
			errors[field] = `${field} is blank`;
		}
	});

	return errors;
}

const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  asyncValidating,
  error,
  ...domProps }) => domProps;

const renderField = (props) => {
	console.log(props);
	return (<div>
		<props.type type={props.type} {...domOnlyProps(props)}/>
		<div>{props.touched ? props.error : ''}</div>
	</div>);
};

@reduxForm({
	form: 'new-auction',
	fields: _.keys(FIELDS),
	validate
})

export default class AddAuction extends Component {
	submitAuction(props) {
		console.log(props);
	}
	render() {
		let { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit((props) => this.submitAuction(props))}>
				{_.map(FIELDS, this.outputField.bind(this))}
				<button>SUbmit</button>
			</form>
		);
	}
	outputField(fieldConfig, field) {
		return <Field key={fieldConfig.id} name={field} type={fieldConfig.type} component={renderField}/>
	}
}

