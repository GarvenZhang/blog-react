import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../Header/cms'
import Sidebar from '../Sidebar/index'

import style from './index.css'

export default class ArticleCheck extends Component {
  render() {
    return (
      <div className={style['body']}>
        <Sidebar />
        <div className={style['main']}>
          {this.props.children}
        </div>
      </div>
    )
  }
}