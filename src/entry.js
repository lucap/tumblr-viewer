import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'
import App from './components/App'


const initialState = {};

let store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
