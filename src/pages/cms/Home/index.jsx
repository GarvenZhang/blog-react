import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'

import style from './index.css'

@withRouter
class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.changeHandle = ::this.changeHandle
    this.submitHandle = ::this.submitHandle
  }

  changeHandle(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  submitHandle() {
    const {email, password} = this.state
    if (
      email === 'test' &&
      password === 'test'
    ) {
      this.props.history.push('/cms/article/check')
    }
  }

  render() {
    return (
      <div className={[style['form-wrap'], style['form--login']].join(' ')}>
        <p className={style['title']}>个人博客</p>
        <p className={style['title']}>后台信息管理系统</p>
        <form action="" className={style['form']}>
          <div className={style['form-item']}>
            <input type="text" className={style['inp-text']} placeholder='请输入邮箱' onChange={(e) => this.changeHandle('email', e)}/>
          </div>
          <div className={style['form-item']}>
            <input type="text" className={style['inp-text']} placeholder='请输入密码' onChange={(e) => this.changeHandle('password', e)}/>
          </div>
          <div className={[style['form-item'], style['btn-wrap']].join(' ')}>
            <button type="button" className={[style['btn'], style['btn-submit']].join(' ')} onClick={this.submitHandle}>登录</button>
          </div>
          <div className={[style['form-item'], style['tips-wrap']].join(' ')}>
            <p className={style['tips']}></p>
          </div>
        </form>
      </div>
    )
  }
}

class Register extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className={[style['form-wrap'], style['form--register']].join(' ')}>
        <form action="" className={style['form']}>
          <div className={style['form-item']}>
            <input type="text" className={style['inp-text']} placeholder='请输入邮箱' />
          </div>
          <div className={style['form-item']}>
            <input type="text" className={style['inp-text']} placeholder='请输入密码' />
          </div>
          <div className={style['form-item']}>
            <input type="text" className={style['inp-text']} placeholder='请确认密码' />
          </div>
          <div className={style['form-item']}>
            <input type="text" className={style['inp-text']} placeholder='请填写昵称' />
          </div>
          <div className={[style['form-item'], style['btn-wrap']].join(' ')}>
            <button type="button" className={[style['btn'], style['btn-submit']].join(' ')}>注册</button>
          </div>
          <div className={[style['form-item'], style['tips-wrap']].join(' ')}>
            <p className={style['tips']}></p>
          </div>
        </form>
      </div>
    )
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: 0 // 0 - 登录 1 - 注册
    }

    this.tabHandle = ::this.tabHandle
  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  tabHandle(type) {
    this.setState({
      type
    })
  }

  activeHandle(type) {
    return classnames({
      [style['tab-item']]: true,
      [style['active']]: this.state.type === type
    })
  }

  render() {
    return (
      <div className={style['home-page']}>
        <div className={style['popup-wrap']}>
          <div className={style['head']}>
            <div className={style['tab-list']}>
              <div className={this.activeHandle(0)} onClick={() => this.tabHandle(0)}>
                登录
              </div>
              <div className={this.activeHandle(1)} onClick={() => this.tabHandle(1)}>
                注册
              </div>
            </div>
          </div>
          <div className={style['body']}>
            {
              this.state.type === 0 ?
                <Login /> :
                <Register />
            }
          </div>
        </div>
      </div>
    )
  }
}