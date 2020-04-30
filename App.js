import React, { Component } from "react";
import ProductListing from "./shopping/productListing";
import Basket from "./shopping/Basket";
import Sorting from "./shopping/Sorting";
import Size from "./shopping/Size";
//import axios from "axios";
//import {connect} from 'react-redux';
import {Provider} from 'react-redux';
//import {fetchPosts} from './actions/postsAction'

import  store from './store'


class App extends Component {

  render() {
    //console.log(this.state.items);
    return (
      <Provider store={store}>
        <Sorting />
        <Size />
        <ProductListing />
        <Basket />
      </Provider>
    );
  }
}



export default App;
