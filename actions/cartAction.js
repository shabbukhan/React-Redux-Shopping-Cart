import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const closeBasket = () => dispatch => {
  document.getElementById("cartContent").classList.add("hide");
  document.getElementById("close").classList.add("hide");
};

export const openBasket = () => dispatch => {
  document.getElementById("cartContent").classList.remove("hide");
  document.getElementById("close").classList.remove("hide");
};

export const handleAddToCart = (cartItems, listItem) => dispatch => {
  cartItems = cartItems.slice();

  let productAlreadyInCart = false;

  if (cartItems.length) {
    cartItems.forEach(cartI => {
      //var quantity=1;
      console.log("AlreadyInCart", cartI);
      if (cartI.id === listItem.id) {
        productAlreadyInCart = true;
        return cartI.count++;
      }
    });
  }

  if (!productAlreadyInCart) {
    cartItems.push({ ...listItem, count: 1 });
    console.log("AddToCart", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
      type: ADD_TO_CART,
      payload: cartItems
    });
  }
};

export const removeFromCart = (cartItems, product) => dispatch => {
  cartItems = cartItems.slice().filter(a => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItems
  });
};
