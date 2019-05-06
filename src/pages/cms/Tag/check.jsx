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

export default class TagCheck extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={style['check-page']}>
        <Header extraStyle={{ 'justifyContent': 'space-between' }} />
        <Main>
          <table className={style['table']}>
            <thead>
              <tr>
                <td>标签名</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              {
                '100000000'.split('').map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>python</td>
                      <td>
                        <button className={[style['btn'], style['btn-modify']].join(' ')}>修改</button>
                        <button className={[style['btn'], style['btn-delete']].join(' ')}>删除</button>
                        <button className={[style['btn'], style['btn-check']].join(' ')}>查看</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='2'>
                  <button className={[style['btn'], style['btn-add']].join(' ')}>新增</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </Main>
      </div>
    )
  }
}