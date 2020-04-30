import {FETCH_POSTS, SORTING_LIST, FILTER_BY_SIZE, ADD_TO_CART, REMOVE_FROM_CART} from './types';
//import axios from "axios";

export const fetchPosts = () => dispatch =>{  
        
        fetch("./json/listing.json")
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));

        
        if (localStorage) {  

        dispatch({
            type: ADD_TO_CART,
            payload: JSON.parse(localStorage.getItem("cartItems"))
        })
      }
}

export const sortProducts = (items, event) => (dispatch) => {
    //console.log(event)
    //console.log('sortProducts called', items);
    if (event === "lowest") {
        let sortedProductsAsc = items.slice().sort((a, b) => {
          return a.price - b.price;
        }); 
        
        //console.log(sortedProductsAsc)
        dispatch({
            type: SORTING_LIST,
            payload: sortedProductsAsc
          });
      } 
      
      else if (event === "highest") {
        let sortedProductsDec = items.slice().sort((a, b) => {
          return b.price - a.price;
        });
        //console.log(sortedProductsDec)
        dispatch({
            type: SORTING_LIST,
            payload: sortedProductsDec
            
          });
      } 

      else{
        let defaultOrder = items.slice().sort((a, b) => {
            return a.id - b.id;
          });
          //console.log(sortedProductsDec)
          dispatch({
              type: SORTING_LIST,
              payload: defaultOrder
              
            });
      }



}

export const filterBySize = (preState, newState) => (dispatch) => {
    console.log('items', newState)

    var selectedSize = [];

    const size = document.getElementsByName("size");
    console.log(size)
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
    
}

export const closeCart = ()  => (dispatch) => {
    document.getElementById("cartContent").classList.add("hide");
    document.getElementById("close").classList.add("hide");
}

export const cartItems = () => (dispatch) => {
    console.log('clicked!')
    document.getElementById("cartContent").classList.remove("hide");
    document.getElementById("close").classList.remove("hide");
}

export const handleAddToCart = (cartItems, listItem) => (dispatch) => {
    cartItems =  cartItems.slice();

      let productAlreadyInCart = false;

      if (cartItems.length) {
        cartItems.forEach(cartI => {
          console.log("forEach", cartI);
          if (cartI.id === listItem.id) {
            cartI.count += 1;
            productAlreadyInCart = true;
          }
        });
      }

      if (!productAlreadyInCart) {
        cartItems.push({ ...listItem, count: 1 });
        console.log('listItem', cartItems, cartItems.length);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        dispatch({
            type: ADD_TO_CART,
            payload: cartItems
            
          }); 
      }
  };

  export const removeFromCart = (cartItems, product) =>  (dispatch) =>{    
    
    cartItems = cartItems.slice().filter(a => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
      dispatch({ 
          type: REMOVE_FROM_CART, 
          payload: cartItems 
        });
    
  };