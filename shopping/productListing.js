import React, { Component } from "react";
import util from "../util";
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsAction';
import {handleAddToCart} from '../actions/cartAction';

class ProductListing extends Component {
  
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    //console.log('this.props.listings', this.props.listings);
    return (
      <div id="grid-container">
        {this.props.listings.map(item => (
          
          <div className="grid-item" key={item.id}>
            <img alt={item.title} width="150px" src={item.image} />
            <p className="title"> {item.title} </p>
            <p className="size"> Size: {item.size} </p>
            <p className="price"> Price: {util.formatCurrency(item.price)} </p>
            <button
              className="button"
              onClick={e => this.props.handleAddToCart(this.props.cartItems, item)}> Add to Cart </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  //console.log('product Listing ', state.list.items)
  return {
    listings: state.list.items,
    cartItems: state.shoppingCart.cartItems
  }
}

export default connect(mapStateToProps, {fetchPosts, handleAddToCart})(ProductListing);
