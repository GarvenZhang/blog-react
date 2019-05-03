import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './index.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

  }

  static defaultProps = {

  }

  componentWillMount() {

  }

  render() {
    return <h1>App</h1>
  }
}