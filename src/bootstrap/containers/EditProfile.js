import _ from 'lodash';
import { USERFIELDS } from '../fields';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { END_POINT, renderField } from '../helpers';
import React, { Component, PropTypes } from 'react';
import * as actionCreators from '../actions/ImageActions';

export default class EditProfile extends Component {
  render() {
    console.log(USERFIELDS);
    return(
      <form >
        <div className="panel panel-default">
          <div class="panel-heading"><h3>Edit Profile</h3></div>
          <div class="panel-body">
            {_.map(USERFIELDS, renderField.bind(this))}
            <button className="btn btn-info btn-block">Submit</button>
            <button type="button" className="btn btn-info btn-block" >Clear Values</button>
          </div>
        </div>
      </form>
      );
  }
}