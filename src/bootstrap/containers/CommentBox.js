import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

@reduxForm()

export default class CommentBox extends Component {
  addMessage(e) {
    let { props } = this;
    let { handleSubmit } = props;
    if(e.keyCode == 13 && e.shiftKey == false) {
      handleSubmit();
    }
  }
  render() {
    let { props, addMessage } = this;
    let { handleSubmit, onSubmit, submitSucceeded, pristine } = props;
    return(
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Field name="comment" placeholder="Write a comment" disabled={submitSucceeded} onKeyDown={addMessage.bind(this)} className="form-control" component="textarea"/>
        </div>
        </form>
      </div>
    );
  }
}