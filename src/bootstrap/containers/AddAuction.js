
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import { bindActionCreators } from 'redux';
import { END_POINT } from '../helpers';
import { reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';

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
  name,
  input,
  error,
  tag,
  ...domProps }) => domProps;

const FIELDS = {
	title: {
		tag: 'input',
		type: 'text',
		label: 'Title of the auction'
	},
	endDate: {
		tag: 'input',
		type: 'text',
		label: 'end date',
	},
	minBid: {
		tag: 'input',
		type: 'text',
		label: 'minimum bid',
	},
	startDate: {
		type: 'text',
		tag: 'input',
		label: 'Start date',
	},
	description: {
		tag: 'textarea',
		type: 'text',
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
		let { fields: { title, endDate, startDate, description, minBid },
		handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit((props) => this.submitAuction(props))}>
			<div className="panel panel-default">
			<div class="panel-heading"><h3>Add Auction</h3></div>
			<div class="panel-body">
				{_.map(FIELDS, this.renderField.bind(this))}
				<button>SUbmit</button>
			</div>
			</div>
			</form>
		);
	}

	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field];
		var i = 0;
		if(_.includes(['textarea', 'selectbox'], fieldConfig.tag)) {
			return ( <div key={field} className="form-group">
				<fieldConfig.tag name={field} className="form-control" {...domOnlyProps(fieldHelper)} />
				 { fieldHelper.touched && fieldHelper.error && <div>{fieldHelper.error}</div> }
				</div>
			);
		}
		return( <div key={field} className="form-group">
		<fieldConfig.tag type={fieldConfig.type} name={field} className="form-control" {...domOnlyProps(fieldHelper)} />
		 {fieldHelper.touched && fieldHelper.error && <div>{fieldHelper.error}</div>}
		</div> );
	}

}
