import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './index.css'

export default class ArticleItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style['article-item']}>
        <div className={style['item-head']} data-id={''}>
          <Link className={['link', style['link-article']].join(' ')} to={'/article'}>
            <h3 className={style['item-title']}>标题一</h3>
          </Link>
          <span className={style['item-text']}>1000 人阅读</span>
          <span className={style['item-time']}>2019-02-99</span>
        </div>
        <div className={style['item-body']}>
          <p className={style['item-desc']}>附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟</p>
          <img src="" alt="" className={style['item-cover']}/>
        </div>
      </div>
    )
  }
}