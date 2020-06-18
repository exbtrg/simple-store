import React, { Component } from 'react'
import ErrorIndicator from '../ErrorIndicator'

export default class ErrorBoundry extends Component {

  state = {
    error: null
  }

  componentDidCatch(err) {
    this.setState({ error: err })
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />
    }

    return (
      this.props.children
    )
  }
}