import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from './index'

import style from './index.css'

export default class CMSHeader extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <Header extraStyle={{ 'justifyContent': 'space-between' }}>
        <h1 className={style['title']}>个人博客 - cms系统</h1>
        <div className={style['status-area']}>
          <span className={style['username']}>张益铭</span>
          <Link className={style['link']} to='/cms'>退出</Link>
        </div>
      </Header>
    )
  }
}