import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/index'
import Search from '../../../components/Search/index'
import Menu from '../../../components/Menu/index'
import ArticleItem from '../../../components/Item/Article/index'

import style from './index.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={style['home-page']}>
        <Header>
          <Search/>
          <Menu/>
        </Header>
        <div className={style['main']}>
          <ul className={style['article-list']}>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
          </ul>
        </div>
      </div>
    )
  }
}