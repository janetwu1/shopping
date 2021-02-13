import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer'

// {products: []}
export default combineReducers({
  products: productReducer,
  carts: cartReducer
})