import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import style from './index.css'

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHide: true
    }

    this.hideHandle = ::this.hideHandle
  }

  hideHandle(isHide) {
    this.setState({
      isHide
    })
  }

  render() {

    const menuAreaClass = classNames({
      [style['menu-area']]: true,
      'hide': this.state.isHide
    })

    return (
      <div className={style['menu-wrap']}>
        <div className={style['btn-wrap']}>
          <span className={
            ['btn', style['btn-panel'], 'iconfont', 'icon-icon_workmore'].join(' ')
          } onClick={() => this.hideHandle(false)}></span>
        </div>
        <div className={menuAreaClass}>
          <ul className={style['menu-list']}>
            <li className={style['menu-item']}>
              <Link className={style['link']} to='/'>首页</Link>
            </li>
            <li className={style['menu-item']}>
              <Link className={style['link']} to='/tag'>标签</Link>
            </li>
            <li className={style['menu-item']}>
              <Link className={style['link']} to='/info'>博主简介</Link>
            </li>
          </ul>
          <div className={style['btn-wrap']}>
            <button className={['btn', style['btn-back']].join(' ')} onClick={() => this.hideHandle(true)}>返回</button>
          </div>
        </div>
      </div>
    )
  }
}