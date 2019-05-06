import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './index.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div className={style['sidebar-area']}>
        <div className={style['nav-list']}>
          <p className={style['title']}>文章管理</p>
          <div className={style['nav-item']}>
            <div className={style['link-wrap']}>
              <Link to={'/cms/article/check'}>查看</Link>
            </div>
            <div className={style['link-wrap']}>
              <Link to={'/cms/article/post'}>发表</Link>
            </div>
          </div>
        </div>
        <div className={style['nav-list']}>
          <p className={style['title']}>标签管理</p>
          <div className={style['nav-item']}>
            <div className={style['link-wrap']}>
              <Link to={'/cms/tag/check'}>查看</Link>
            </div>
          </div>
        </div>
        <div className={style['nav-list']}>
          <p className={style['title']}>评论管理</p>
          <div className={style['nav-item']}>
            <div className={style['link-wrap']}>
              <Link to={'/cms/comment/check'}>查看</Link>
            </div>
          </div>
        </div>
        <div className={style['nav-list']}>
          <p className={style['title']}>用户管理</p>
          <div className={style['nav-item']}>
            <div className={style['link-wrap']}>
              <Link to={'/cms/user/info'}>个人信息</Link>
            </div>
            <div className={style['link-wrap']}>
              <Link to={'/cms/user/account'}>账密修改</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}