import React, { Component } from 'react'

import style from './index.css'

export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style['search-wrap']}>
        <span className={['icon', style['icon-search'], 'iconfont', 'icon-icon_search'].join(' ')}></span>
        <input type="text" className={style['search-inp']} placeholder='请输入关键字~'/>
      </div>
    )
  }
}