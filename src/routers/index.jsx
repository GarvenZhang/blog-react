import { Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import {createHashHistory} from 'history'

import IndexHome from '../pages/index/Home/index'
import Tag from '../pages/index/Tag/index'
import Article from '../pages/index/Article/index'
import IndexInfo from '../pages/index/Info/index'
import CMSHome from '../pages/cms/Home/index'
import ArticleCheck from '../pages/cms/Article/check'
import ArticlePost from '../pages/cms/Article/post'
import TagCheck from '../pages/cms/Tag/check'
import CommentCheck from '../pages/cms/Comment/index'
import CMSInfo from '../pages/cms/User/info'
import Account from '../pages/cms/User/account'

// 官网
const IndexRouteMap = () => (
  <Router history={createHashHistory()}>
    <div className={'root'}>
      <Switch>
        <Route exact path='/' component={IndexHome}/>
        <Route path='/tag' component={Tag}/>
        <Route path='/article' component={Article}/>
        <Route path='/info' component={IndexInfo}/>
        <Route exact path='/cms' component={CMSHome}/>
        <Route exact path='/cms/article/check' component={ArticleCheck}/>
        <Route exact path='/cms/article/post' component={ArticlePost}/>
        <Route exact path='/cms/tag/check' component={TagCheck}/>
        <Route exact path='/cms/comment/check' component={CommentCheck}/>
        <Route exact path='/cms/user/info' component={CMSInfo}/>
        <Route exact path='/cms/user/account' component={Account}/>
      </Switch>
    </div>
  </Router>
)

export { IndexRouteMap }
