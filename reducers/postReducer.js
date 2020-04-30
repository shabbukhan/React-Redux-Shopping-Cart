import {FETCH_POSTS, SORTING_LIST, FILTER_BY_SIZE} from '../actions/types';

const initialState = {
    items: [],
    cloneItems: []    
  }

export default (state = initialState, action) => {
    switch (action.type){
        case FETCH_POSTS:
            return{
                ...state,
                items: action.payload,
                cloneItems: action.payload
            };

        case SORTING_LIST:
            return{
                ...state,
                items: action.payload
            };

    case FILTER_BY_SIZE:
            return{
                ...state,
                items: action.payload
            };

        default:
            return state
    }
}