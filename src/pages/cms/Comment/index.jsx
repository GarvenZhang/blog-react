import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/cms'
import Main from '../../../components/Main/index'
import Popup from '../../../components/Popup/index'
import Menu from '../../../components/Menu/index'
import ArticleItem from '../../../components/Item/Article/index'

import style from './index.css'

export default class Info extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHide: true
    }

    this.hideHandle = ::this.hideHandle
  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  hideHandle(isHide) {
    this.setState({
      isHide
    })
  }

  render() {
    return (
      <div className={[style['page'], style['page--info']].join(' ')}>
        <Header extraStyle={{ 'justifyContent': 'space-between' }} />
        <Main>
          <div className={style['main-inner']}>
            <div className={style['sidebar-area']}>
              <ul className={style['article-list']}>
                <li className={style['article-item']}>文章1</li>
                <li className={style['article-item']}>文章1</li>
              </ul>
            </div>
            <div className={style['comment-area']}>
              <ul className={style['comment-list']}>
                <li className={style['comment-item']}>
                  <div className={style['item-hd']}>
                    <span className={style['text']}>昵称: 游客1</span>
                    <span className={style['text']}><a href="mailto:931923959@qq.com" className={style['link']}>931923959@qq.com</a></span>
                    <div className={style['btn-wrap']}>
                      <button className={[style['btn'], style['btn-del']].join(' ')}>删除</button>
                      <button className={[style['btn'], style['btn-reply']].join(' ')} onClick={() => this.hideHandle(false)}>回复</button>
                    </div>
                  </div>
                  <div className={style['item-bd']}>
                    为见覅偶文件覅我积分哦挖飞机爱位iof金额挖放我飞机佛我发觉我
                  </div>
                </li>
                <li className={style['comment-item']}>
                  <div className={style['item-hd']}>
                    <span className={style['text']}>昵称: 游客1</span>
                    <span className={style['text']}><a href="mailto:931923959@qq.com" className={style['link']}>931923959@qq.com</a></span>
                    <div className={style['btn-wrap']}>
                      <button className={[style['btn'], style['btn-del']].join(' ')}>删除</button>
                      <button className={[style['btn'], style['btn-reply']].join(' ')} onClick={() => this.hideHandle(false)}>回复</button>
                    </div>
                  </div>
                  <div className={style['item-bd']}>
                    为见覅偶文件覅我积分哦挖飞机爱位iof金额挖放我飞机佛我发觉我
                  </div>
                </li>
                <li className={style['comment-item']}>
                  <div className={style['item-hd']}>
                    <span className={style['text']}>昵称: 游客1</span>
                    <span className={style['text']}><a href="mailto:931923959@qq.com" className={style['link']}>931923959@qq.com</a></span>
                    <div className={style['btn-wrap']}>
                      <button className={[style['btn'], style['btn-del']].join(' ')}>删除</button>
                      <button className={[style['btn'], style['btn-reply']].join(' ')} onClick={() => this.hideHandle(false)}>回复</button>
                    </div>
                  </div>
                  <div className={style['item-bd']}>
                    为见覅偶文件覅我积分哦挖飞机爱位iof金额挖放我飞机佛我发觉我
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Popup isHide={this.state.isHide} hideHandle={this.hideHandle}/>
        </Main>
      </div>
    )
  }
}