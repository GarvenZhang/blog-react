import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import style from './index.css'

export default class Popup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '@garven: '
    }

    this.changeHandle = ::this.changeHandle
  }

  changeHandle(e) {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    return (
      <div className={[style['popup-wrap'], this.props.isHide ? 'hide' : ''].join(' ')}>
        <textarea name="" id="" cols="30" rows="10" value={this.state.content} onChange={this.changeHandle}></textarea>
        <div className={style['btn-wrap']}>
          <button className={[style['btn'], style['btn-cancel']].join(' ')} type='button' onClick={() => this.props.hideHandle(true)}>取消</button>
          <button className={[style['btn'], style['btn-submit']].join(' ')} type='button'>确定</button>
        </div>
      </div>
    )
  }
}