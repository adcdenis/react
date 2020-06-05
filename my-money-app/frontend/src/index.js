import React from 'react'
import ReactDOM from 'react-dom'
//import App from './main/app'
import { Provider } from 'react-redux'
import reducers from '../src/main/reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { applyMiddleware, createStore } from 'redux'
import AuthOrApp from '../src/main/authOrApp'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devTools)
//const store = applyMiddleware(promise)(createStore)(reducers)
//const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>,
  document.getElementById('app')
)
