import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/index'
import Menu from '../../../components/Menu/index'

import style from './index.css'

export default class Tag extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={style['tag-page']}>
        <Header extraStyle={{'justifyContent': 'flex-end'}}>
          <Menu/>
        </Header>
        <div className={style['main']}>
          <ul className={style['tag-list']}>
            <li className={style['tag-item']}>
              <Link className={style['link']} to={''}>html (20)</Link>
            </li>
            <li className={style['tag-item']}>
              <Link className={style['link']} to={''}>css (90)</Link>
            </li>
            <li className={style['tag-item']}>
              <Link className={style['link']} to={''}>javascript (33)</Link>
            </li>
            <li className={style['tag-item']}>
              <Link className={style['link']} to={''}>python (34)</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}