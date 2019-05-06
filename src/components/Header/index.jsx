import React, { Component } from 'react'

import style from './index.css'

export default class Header extends Component {
  render() {
    return (
      <header className={style['header-area']} style={this.props.extraStyle}>
        {this.props.children}
      </header>
    )
  }
}