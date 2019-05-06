import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/cms'
import Main from '../../../components/Main/index'
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
      <div className={[style['page'], style['page--info']].join(' ')}>
        <Header extraStyle={{ 'justifyContent': 'space-between' }} />
        <Main>
          <form action="" className={style['form']}>
            <div className={style['form-item']}>
              <span className={style['name']}>账号</span>
              <input type="text" className={style['inp-text']} value='jf00258jf@hotmail.com' readOnly />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>昵称</span>
              <input type="text" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>性别</span>
              <div className={style['radio-wrap']}>
                <input type="radio" name="sex" id="male" /><label htmlFor="male">男</label>
                <input type="radio" name='sex' id='female' /><label htmlFor="female">女</label>
              </div>
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>年龄</span>
              <input type="number" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>微信</span>
              <input type="text" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>github</span>
              <input type="text" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>resume</span>
              <input type="text" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>简介</span>
              <textarea className={[style['textarea'], style['textarea-desc']].join(' ')} name="" id="" cols="10" rows="10"></textarea>
            </div>
            <div className={style['form-item']}>
              <input type="file" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <p className={style['tips']}></p>
              <button className={[style['btn'], style['btn-reset']].join(' ')} type='reset'>重置</button>
              <button className={[style['btn'], style['btn-update']].join(' ')} type='button'>修改</button>
            </div>
          </form>
        </Main>
      </div>
    )
  }
}