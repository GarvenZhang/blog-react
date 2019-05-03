import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { IndexRouteMap } from './routers/index'
import store from './redux/store'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <IndexRouteMap/>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)