
import _ from 'lodash';
import { FIELDS } from '../fields';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { END_POINT, renderField } from '../helpers';
import React, { Component, PropTypes } from 'react';
import * as actionCreators from '../actions/ImageActions';


const validate = (values) => {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if(!values[field]) {
      errors[field] = `${field} is blank`;
    }
  });

  return errors;
}

@connect((state) => {
  return {
    images: state.Images
  };
}, dispatch => (bindActionCreators(actionCreators, dispatch)))

@reduxForm({
  form: 'new-auction',
  validate
})

export default class AddAuction extends Component {
  state = {
    files: [],
    uploadedFiles: []
  };
  submitAuction(props) {
    let body = new FormData();
    let { uploadedFiles } = this.state;
    _.each(props, (value, key) => {
      if(!_.eq(key, 'image')) {
        body.append(key, value);
      }
    });

    body.append('images', _.uniq(uploadedFiles));

    fetch(`${END_POINT()}/auction`, {
      method: 'POST',
      body,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(body => console.log(body))
      .catch(err => console.log(err));

  }
  componentDidUpdate() {
    let { uploadedFiles } = this.state;
    let { images: { payload } } = this.props;
    for(var i in payload) {
      uploadedFiles.push(payload[i]);
    }
    
    //uploadedFiles.push()
  }
  render() {
    let { handleSubmit, pristine, submitting, reset } = this.props;
    console.log(this.state.uploadedFiles);
    return(
      <form onSubmit={handleSubmit((props) => { this.submitAuction(props) } )}>
        <div className="panel panel-default">
          <div class="panel-heading"><h3>Add Auction</h3></div>
          <div class="panel-body">
            {_.map(FIELDS, renderField.bind(this))}
            <button className="btn btn-info btn-block">SUbmit</button>
            <button type="button" className="btn btn-info btn-block" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </div>
      </form>
    );
  }
}
