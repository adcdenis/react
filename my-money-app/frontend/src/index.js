import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { Provider } from 'react-redux'
import reducers from '../src/main/reducers'
import promise from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'

const store = applyMiddleware(promise)(createStore)(reducers)
//const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
