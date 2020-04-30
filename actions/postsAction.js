import {
  FETCH_POSTS,
  SORTING_LIST,
  FILTER_BY_SIZE,
  ADD_TO_CART
} from "./types";
//import axios from "axios";

export const fetchPosts = () => dispatch => {
  fetch("./json/listing.json")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );

  if (localStorage) {
    dispatch({
      type: ADD_TO_CART,
      payload: JSON.parse(localStorage.getItem("cartItems"))
    });
  }
};

export const sortProducts = (items, event) => dispatch => {
  if (event === "lowest") {
    let sortedProductsAsc = items.slice().sort((a, b) => {
      return a.price - b.price;
    });

    dispatch({
      type: SORTING_LIST,
      payload: sortedProductsAsc
    });
  } else if (event === "highest") {
    let sortedProductsDec = items.slice().sort((a, b) => {
      return b.price - a.price;
    });
    //console.log(sortedProductsDec)
    dispatch({
      type: SORTING_LIST,
      payload: sortedProductsDec
    });
  } else {
    let defaultOrder = items.slice().sort((a, b) => {
      return a.id - b.id;
    });
    //console.log(sortedProductsDec)
    dispatch({
      type: SORTING_LIST,
      payload: defaultOrder
    });
  }
};

export const filterBySize = (preState, newState) => dispatch => {
  //console.log('items', newState)
  var selectedSize = [];
  const size = document.getElementsByName("size");
  Array.from(size).filter(item => {
    if (item.checked === true) {
      selectedSize.push(item.value);
    }
    return selectedSize;
  });
  console.log("selectedSize ", selectedSize);

  if (selectedSize.length) {
    const availableSize = newState.filter(fItem => {
      if (selectedSize.indexOf(fItem.size) !== -1) {
        return fItem;
      } else return null;
    });
    console.log("availableSize ", availableSize);
    dispatch({
      type: FILTER_BY_SIZE,
      payload: availableSize
    });
  } else {
    console.log("preState ", preState);
    dispatch({
      type: FILTER_BY_SIZE,
      payload: preState
    });
  }
};
