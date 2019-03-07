import React, { Component } from 'react';

export default function theme (WrappedComponent) {
  return class Theme extends Component {
    render() {
      return <WrappedComponent {...this.props} />;;
    }
  }
}