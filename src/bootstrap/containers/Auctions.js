/** @module myModule */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/AuctionActions';
import _ from 'lodash';
import CommentBox from './CommentBox';

const _props = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

/**
 * Connect reducer to Auction component
 * @param  {object} store / state
 * @return {object} reducer
 */
@connect((state) => {
  return {
    auction: state.Auctions
  };
}, _props)

export default class Auctions extends Component {
  render() {
    let { props } = this;
    let { auction } = props;
    let { collection } = auction;
    let display = _.isEmpty(collection) ?
      <div className="panel panel-default">
        <div className="panel-body">Is Loading
        </div>
      </div>
      :
      collection.map((auction, key) => (
      <div key={key} className="panel panel-default">
        <div className="panel-heading">
          <a href="#">Iron Corp</a><span> added </span><a href="#">Bakal</a>
          </div>
          <div className="panel-body">
          <h4>{auction.title}</h4>
          <a className="thumbnail">
            <img className="img-responsive" style={ {margin: '0 auto'} }src={`${auction.images[0].file}`} />
          </a>
          <p>{auction.description}</p>
          <p>{`Php ${auction.minBid}`}</p>  
        </div>
        <div className="panel-footer">
          <CommentBox onSubmit={(props) => {
            console.log(props);
          }} form={`comment-${auction.id}`} {...props} />
        </div>
        <div className="panel-footer">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="https://dummyimage.com/64x64/#f1f1f/fff" alt="..." />
              </a>
            </div>
            <div class="media-body">
              <h6 class="media-heading">From: ninja tech</h6>
              <p style={ { fontSize: '12px'} }>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <span>5 hours ago</span></p>
            </div>
          </div>
        </div>
      </div>
    ));
    return(
      <div className="row">
        <div className="col-md-8">
          {display}
        </div>
        <div className="col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>Sponsored</h4>
            </div>
            <div className="panel-body">
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            </div>
            <div className="panel-footer">
              <a href="#" className="btn btn-default btn-block">SHOW MORE</a>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>Ads</h4>
            </div>
            <div className="panel-body">
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            </div>
            <div className="panel-footer">
              <a href="#" className="btn btn-default btn-block">SHOW MORE</a>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>Feeds</h4>
            </div>
            <div className="panel-body">
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="https://dummyimage.com/185x125/#f1f1f/fff" alt="..." />
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p>Php 500.00</p>
              </div>
            </div>
            </div>
            <div className="panel-footer">
              <a href="#" className="btn btn-default btn-block">SHOW MORE</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchAuction();
  }
  componentWillUnmount() {
    this.props.isFetchingAuction();
  }
}