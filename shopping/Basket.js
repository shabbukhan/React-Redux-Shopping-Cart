import React, { Component } from "react";
import { openBasket } from "../actions/cartAction";
import { closeBasket } from "../actions/cartAction";
import { connect } from "react-redux";
import CartListing from "./CartListing";

class Basket extends Component {
  render() {
    //console.log('Basket props ', this.props.cart);
    //console.log('Basket cartItems ', this.props.cartItems);

    const cartItems = this.props.cart;
    //console.log('Des cartItems ', cartItems);

    return (
      <React.Fragment>
        <section id="cartContainer">
          <i
            id="close"
            className="fa fa-times-circle fa-3x hide"
            aria-hidden="true"
            onClick={e => {
              this.props.closeBasket();
            }}
          ></i>
          <div
            className="fa fa-shopping-cart fa-3x"
            aria-hidden="true"
            onClick={e => {
              this.props.openBasket();
            }}
          >
            <span className="cartItem">
              {cartItems.length === 0 ? 0 : cartItems.length}
            </span>
          </div>
          <CartListing />
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log('basket', state.shoppingCart.cartItems)
  return {
    cart: state.shoppingCart.cartItems
  };
};

export default connect(mapStateToProps, { openBasket, closeBasket })(Basket);
