import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './components/productList';
import * as serviceWorker from './serviceWorker';
import Cart from './components/cart';
import Login from './components/login';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer } from './store/reducer';
import Login2 from './components/login2';
import Logi from './components/login';
import { authMiddleware, authReducer as auth } from 'redux-implicit-oauth2'


// Create Store with our reducer function.
const initialState = {counter: 0 };
const store = createStore(reducer,0);
const configureStore = (initialState) =>
  createStore(
    combineReducers({
      // other reducers
      auth
    }),
    initialState,
    applyMiddleware(
      // other middleware
      authMiddleware
    )
  )

export default configureStore
//ReactDOM.render(<Shop />, document.getElementById('root'));
ReactDOM.render(<Cart myStore={store}/>, document.getElementById('cart'));
ReactDOM.render(<Login2 store={configureStore()}/>, document.getElementById('login2'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<ProductList myStore={store}/>, document.getElementById('product'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
