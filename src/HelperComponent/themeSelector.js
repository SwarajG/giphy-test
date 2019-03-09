import React from 'react';
import { themes } from '../utils/const';
import s from './styles';

export default function ThemeSelector(props) {
  const { theme } = props;
  function onChange(event) {
    props.onChange(event.target.value);
  }
  return (
    <div className={s.themeSelector}>
      <select onChange={onChange} value={theme}>
        <option value={themes.DARK}>{themes.DARK}</option>
        <option value={themes.LIGHT}>{themes.LIGHT}</option>
      </select>
    </div>
  );
}