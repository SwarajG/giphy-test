import React, { Component } from 'react';
import s from './styles';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const text = event.target.value;
    this.props.onChange(text);
  }

  render() {
    return (
      <input className={s.inputClass} onChange={this.onChange} type="text" placeholder="Search gif here..." />
    );
  }
}