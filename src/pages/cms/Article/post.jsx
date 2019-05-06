import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/cms'
import Main from '../../../components/Main/index'
import Search from '../../../components/Search/index'
import Menu from '../../../components/Menu/index'
import ArticleItem from '../../../components/Item/Article/index'

import style from './index.css'

export default class ArticlePost extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={[style['page'], style['page--article-post']].join(' ')}>
        <Header extraStyle={{ 'justifyContent': 'space-between' }} />
        <Main>
          <form action="" className={style['form']}>
            <div className={style['form-item']}>
              <span className={style['name']}>标题</span>
              <input type="text" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>标签</span>
              <select className={style['inp-select']} name="" id="">
                <option value="python">python</option>
              </select>
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>摘要</span>
              <textarea className={[style['textarea'], style['textarea-desc']].join(' ')} name="" id="" cols="10" rows="10"></textarea>
            </div>
            <div className={style['form-item']}>
              <textarea className={[style['textarea'], style['textarea-content']].join(' ')} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={style['form-item']}>
              <p className={style['tips']}></p>
              <button className={[style['btn'], style['btn-reset']].join(' ')} type='reset'>重置</button>
              <button className={[style['btn'], style['btn-submit']].join(' ')} type='button'>发表</button>
            </div>
          </form>
        </Main>
      </div>
    )
  }
}