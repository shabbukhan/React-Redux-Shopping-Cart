import {FETCH_POSTS, SORTING_LIST, FILTER_BY_SIZE, ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types';

const initialState = {
    items: [],
    cloneItems: [],
    cartItems: []
}

export default function(state = initialState, action){
  // console.log('action.payload', action.payload);
    switch (action.type){
        case FETCH_POSTS:
            return{
                ...state,
                items: action.payload,
                cloneItems: action.payload
            };
    case SORTING_LIST:
    //    console.log('red sorting', action.payload)

    return{
        ...state,
        items: action.payload
    };

    case FILTER_BY_SIZE:
            return{
                ...state,
                items: action.payload
            };

     case ADD_TO_CART:
            return{
            ...state,
            cartItems: action.payload
            };
    case REMOVE_FROM_CART:
            return{
            ...state,
            cartItems: action.payload
            };

        default:
            return state
    }

}