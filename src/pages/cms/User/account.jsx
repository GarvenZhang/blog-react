import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/cms'
import Main from '../../../components/Main/index'

import style from './index.css'

export default class Account extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={[style['page'], style['page--account']].join(' ')}>
        <Header extraStyle={{ 'justifyContent': 'space-between' }} />
        <Main>
          <form action="" className={style['form']}>
            <div className={style['form-item']}>
              <span className={style['name']}>账号</span>
              <input type="text" className={style['inp-text']} value='jf00258jf@hoamtil.com' readOnly />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>密码</span>
              <input type="password" className={style['inp-text']} />
            </div>
            <div className={style['form-item']}>
              <span className={style['name']}>确认密码</span>
              <input type="password" className={style['inp-text']} />
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