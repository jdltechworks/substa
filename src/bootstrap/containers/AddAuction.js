
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { END_POINT, renderField, domOnlyProps } from '../helpers';
import { reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';
import formGroup from '../components/formGroup';

const FIELDS = {
  title: {
    tag: 'input',
    type: 'text',
    label: 'Title of the auction'
  },
  image: {
    tag: 'input',
    type:'file',
    label: 'Image upload'
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

/*
export default class AddAuction extends Component {
  state = {
    files: []
  };
  submitAuction(props) {
    let body = new FormData();
    let { files } = this.state;
    let _props = _.omit(props, 'image');
    let _data = _.keys(_props);
    let headers = new Headers();
    headers.set("Content-Type", "multipart/form-data");
    for(var key in props.image) {
      body.append('image', files[key]);
    }

    _.each(_data, ( key ) => {
      body.append(key, _props[key]);
    });
    

    fetch(`${END_POINT()}/auction`, {
      method: 'POST',
      body,
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
    console.log(this.state.files);
    return(
      <form onSubmit={handleSubmit((props) => this.submitAuction(props))}>
      <div className="panel panel-default">
      <div class="panel-heading"><h3>Add Auction</h3></div>
      <div class="panel-body">
        {_.map(FIELDS, renderField.bind(this))}
        <button>SUbmit</button>
      </div>
      </div>
      </form>
    );
  }
} */

export default class AddAuction extends Component {
	render() {
		return 
			<div className="block block-form add-auction">
				<h1>Post Auction</h1>
				<form>
					<formGroupText label="title" placeholder="enter title" id="fld-title" />
					<formGroup label="title" placeholder="enter title" id="fld-title" />
				</form>
			</div>;
	}
}

class formGroupText extends Component { 
	render() {
		return(
			<div className="form-group">
				hello
				<label>{this.props.label}</label>
				<input type="email" placeholder="{this.props.placeholder}" id="{this.props.id}" className="form-control" />
			</div>
		);
	}
}