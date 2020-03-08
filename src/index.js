import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './app'
// const createStoreWithApplyMiddleware=applyMiddleware(thunk)(createStore)
const middleware = [thunk];
const initialState = {};
const store = createStore(reducers, initialState, applyMiddleware(...middleware));
export default store;
ReactDOM.render
    (
        <Provider store={store}>
        <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));