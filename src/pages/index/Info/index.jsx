import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/index'
import Search from '../../../components/Search/index'
import Menu from '../../../components/Menu/index'
import ArticleItem from '../../../components/Item/Article/index'

import style from './index.css'

export default class Info extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={style['info-page']}>
        <Header>
          <button className={['btn', style['btn-back']].join(' ')} onClick={this.props.history.goBack}>&lt; 后退</button>
        </Header>
        <div className={style['main']}>
          <div className="avator-wrap">
            <img src="" alt="" className="avator"/>
          </div>
          <p>高度''</p>
          <p>广东工业大学</p>
          <p>电子商务</p>
          <p>本科</p>
          <p>
            <a href="mailto:jf00258jf@hotmail.com">jf00258jf@hotmail.com</a>
          </p>
          <p>
            <a href="">github</a>
          </p>
          <p>
            <a href="">resume</a>
          </p>
        </div>
      </div>
    )
  }
}