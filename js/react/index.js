import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './bootstrap';


/**
 * This is a description
 * @param  {int} a number one
 * @param  {int} b number two
 * @return {int}   [SUM]
 */
function test(a, b) {
	return a + b;
}

render(<Root />, document.getElementById('app'));