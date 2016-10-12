import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return(
      <div className="main-menu panel panel-default">
        <div className="main-menu-inner">
          <ul className="nav">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
          </ul>
          <div className="copy-right text-center" style={ {} }>
            <p>&copy; Subasta 2016 All righs reserved</p>
            <p><a href="#">Terms and conditions</a></p>
          </div>
        </div>
      </div>
    );
  }
}