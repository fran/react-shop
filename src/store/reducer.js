import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authMiddleware, authReducer as auth } from 'redux-implicit-oauth2'
export function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}