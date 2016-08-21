import _ from 'lodash';
import Dropzone from 'react-dropzone';
import { bindActionCreators } from 'redux';
import { domOnlyProps, END_POINT } from '../helpers';
import { Field, reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';

const FIELDS = {
	file: {
		type: 'Dropzone',
		label: 'upload label'
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

const renderField = (props) => {

	let noLabel = () => {
		let newProps = _.cloneDeep(props);

		delete newProps.label;

		return newProps;
	}


	let noType = _.omit(noLabel(), ['type', 'meta']);
	console.log(props);
	return (
			<div className="form-group">
			<label>{props.label}</label>
			<Dropzone onDrop={(data, e) => { props.input.onChange(data) }} {...domOnlyProps(noType)} />
			<div>{props.touched ? props.error : ''}</div>
		</div>
	);

};

@reduxForm({
	form: 'file-upload',
	fields: _.keys(FIELDS),
	validate
})

export default class Uploader extends Component {
	uploader(props) {
		console.log('upload data')
		console.log(props);
	}
	upload(a) {
		console.log(a);
	}
	render() {
		let { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit((props)=>{this.upload(props)})}>
				{_.map(FIELDS, this.outputField.bind(this))}
				<button className="btn btn-info">Uploader</button>
			</form>
		);
	}
	outputField(fieldConfig, field) {
		return <Field key={field} name={field} component={renderField} {...fieldConfig} />
	}
}