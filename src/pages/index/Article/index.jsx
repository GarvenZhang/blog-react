import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../../components/Header/index'
import Menu from '../../../components/Menu/index'
import CommentItem from '../../../components/Item/Comment/index'

import style from './index.css'

export default class Article extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={style['article-page']}>
        <Header>
          <button className={['btn', style['btn-back']].join(' ')} onClick={this.props.history.goBack}>&lt; 后退</button>
        </Header>
        <article className={style['article']}>
          <h1 className={style['title']}>Web Component</h1>
          <aside className={'aside'}>
            <p>
              <span>作者: garven</span>
              <span>评论数: 22</span>
            </p>
            <p>
              <span>总字数: 2888</span>
              <span>浏览数: 88</span>
            </p>
            <p>写作时间: 2019-03-22</p>
          </aside>
          <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.            
          </section>
        </article>
        <div className={style['comment-area']}>
          <p className={style['title']}>评论区</p>
          <div className={style['comment-list']}>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
          </div>
        </div>
      </div>
    )
  }
}