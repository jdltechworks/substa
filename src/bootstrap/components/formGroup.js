import React, { Component } from 'react';
import { Link } from 'react-router';

class formGroup extends Component {
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

export default formGroup;