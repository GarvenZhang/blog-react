import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './index.css'

export default class CommentItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style['comment-item']}>
        <p className={style['info']}>
          小明 于 2019-02-10 10:20:23 发表评论:
        </p>
        <p className={style['content']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum
        </p>
      </div>
    )
  }
}