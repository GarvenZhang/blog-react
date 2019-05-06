import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/cms'
import Sidebar from '../../../components/Sidebar/index'
import Main from '../../../components/Main/index'
import Menu from '../../../components/Menu/index'
import ArticleItem from '../../../components/Item/Article/index'

import style from './index.css'

export default class ArticleCheck extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={[style['page'], style['page--article-check']].join(' ')}>
        <Header extraStyle={{ 'justifyContent': 'space-between' }} />
        <Main>
          <table className={style['table']}>
            <thead>
              <tr>
                <td>文章标题</td>
                <td>浏览数</td>
                <td>评论数</td>
                <td>发表时间</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              {
                '100000000'.split('').map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>文章111</td>
                      <td>10</td>
                      <td>20</td>
                      <td>2019-04-21 19:22:11</td>
                      <td>
                        <button className={[style['btn'], style['btn-modify']].join(' ')}>修改</button>
                        <button className={[style['btn'], style['btn-delete']].join(' ')}>删除</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Main>
      </div>
    )
  }
}