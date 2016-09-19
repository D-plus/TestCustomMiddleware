import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { configureStore } from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { routes } from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render (
  <Provider store={store} history>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
