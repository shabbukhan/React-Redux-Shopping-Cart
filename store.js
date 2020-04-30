import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer';
import cartReducer from './reducers/cartReducer';
const middleware = [thunk];

const allReducers = combineReducers({
  list: postReducer,
  shoppingCart: cartReducer
})

const store = createStore(
  allReducers,
  compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  )

//console.log('store.getState ', store.getState())

//console.log(store.getState())

export default store;
