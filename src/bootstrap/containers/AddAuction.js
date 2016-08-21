
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import { bindActionCreators } from 'redux';
import { domOnlyProps, END_POINT, validate } from '../helpers';
import { Field, reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';

const FIELDS = {
	title: {
		id: 1,
		type: 'input',
		label: 'Title of the auction'
	},
	endDate: {
		id: 2,
		type: 'input',
		label: 'end date',
	},
	minBid: {
		id: 3,
		type: 'input',
		label: 'minimum bid',
	},
	startDate: {
		id: 4,
		type: 'input',
		label: 'Start date',
	},
	description: {
		id: 5,
		type: 'textarea',
		label: 'test'
	}
};



const renderField = (props) => {

	let noLabel = () => {
		let newProps = _.cloneDeep(props);

		delete newProps.label;

		return newProps;
	}

	let noType = null;

	if(_.eq(props.type, 'textarea')) {
		noType = _.omit(noLabel(), 'type');
		return (
			<div className="form-group">
				<props.type name={props.name} className="form-control" {...domOnlyProps(noType)} />
				<div>{props.touched ? props.error : ''}</div>
			</div>
		);
	}
	noType = _.omit(noLabel(), 'type');
	return (
			<div className="form-group">
			<props.type type={_.eq(props.type, 'input') ? 'text' : null } name={props.name} className="form-control" {...domOnlyProps(noType)} />
			<div>{props.touched ? props.error : ''}</div>
		</div>
	);

};

@reduxForm({
	form: 'new-auction',
	fields: _.keys(FIELDS),
	validate
})

export default class AddAuction extends Component {
	submitAuction(props) {
		//console.log(props);
		let body = new FormData();

		let _data = _.keys(props);
		_.each(_data, (key) => {
			body.append(key, props[key]);
		});
		fetch(`${END_POINT()}/auction`, {
			method: 'POST',
			body
		})
			.then((res) => {
				console.log(res);
				return res.json()
			})
			.then(body => console.log(body))
			.catch(err => console.log(err));

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
		return <Field key={field} name={field} component={renderField} {...fieldConfig} />
	}
}
