import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { LOGIN } from '../fields/login';
import { END_POINT, renderField } from '../helpers';
import React, { Component, PropTypes } from 'react';


const validate = (values) => {
  const errors = {};
  _.each(LOGIN, (type, field) => {
    if(!values[field]) {
      errors[field] = `${field} is blank`; 
    }
  });

  return errors;
}

@reduxForm({
  form:'login',
  validate
})


export default class Login extends Component {
  submitLogin(props) {
    console.log(props);
  }
  render() {
    let { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit((props) => {this.submitLogin(props)})}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>Login:</h2>
          </div>
          <div className="panel-body">
          {_.map(LOGIN,renderField.bind(this))}
          <button className="btn btn-info btn-block">Submit</button>
          </div>
        </div>
      </form>
      )
  }
}