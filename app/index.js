import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory } from 'react-router'

import Main from './pages/main'
import Details from './pages/details'
import reducers from './reducers/'
import async from './async'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(async)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/issue/:id" component={Details} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
