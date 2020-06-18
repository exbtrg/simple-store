import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'
import store from './store'
import SimpleStoreService from './services/simpleStoreService'
import { SimpleStoreServiceProvider } from './contexts/simpleStoreServiceContext'
import ErrorBoundry from './components/ErrorBoundry'
import App from './components/App'

const simpleStoreService = new SimpleStoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SimpleStoreServiceProvider value={simpleStoreService}>
        <Router>
          <App />
        </Router>
      </SimpleStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
