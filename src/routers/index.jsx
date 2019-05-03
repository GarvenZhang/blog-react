import { Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import {createHashHistory} from 'history'

import Home from '../pages/index/Home/index'

// 官网
const IndexRouteMap = () => (
  <Router history={createHashHistory()}>
    <div className={'root-router'}>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  </Router>
)

export { IndexRouteMap }
