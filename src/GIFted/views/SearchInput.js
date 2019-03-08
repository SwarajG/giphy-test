import React, { Component } from 'react';
import s from './styles';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(event) {
    const text = event.target.value;
    this.props.onChange(text);
  }

  onKeyDown(event) {
    const isEnterKeyPressed = event.keyCode === 13;
    if (isEnterKeyPressed) {
      this.props.onEnterPressed();
    }
  }

  render() {
    return (
      <input className={s.inputClass} onKeyDown={this.onKeyDown} onChange={this.onChange} type="text" placeholder="Search gif here..." />
    );
  }
}