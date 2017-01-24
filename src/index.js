import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

import rootReducer from './reducers'
import Intro from './pages/intro/intro'

import './css/index.css'

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  /*eslint import/no-extraneous-dependencies:0*/
  middlewares.push(require('redux-immutable-state-invariant')()); //eslint-disable-line global-require
  middlewares.push(thunk);
  middlewares.push(require('redux-logger')()); //eslint-disable-line global-require
} else {
  middlewares.push(thunk);
}

/* eslint-disable no-underscore-dangle */
const store = applyMiddleware(...middlewares)(createStore)(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* eslint-enable */

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default //eslint-disable-line global-require
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <IndexRedirect to="/intro" />
        <Route path="/intro" component={Intro} />
        <Route path="*" component={Intro} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
