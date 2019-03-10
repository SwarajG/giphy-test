import React from 'react';
import { tabs } from '../../utils/const';
import s from './styles';

export default function Tabs(props) {
  function onchange(value) {
    props.onTabChange(value);
  }
  return (
    <div className={s.wrapper}>
      <div className={`${s.controllerWrapper} ${s.tabsWrapper}`}>
        <p onClick={() => onchange(tabs.GIFS)} className={`${s.controlIconWrapper} ${s.tabs}`}>
          GIFS
        </p>
        <p onClick={() => onchange(tabs.FAVOURITE)} className={`${s.controlIconWrapper} ${s.tabs}`}>
          Favourites
        </p>
        <span className={`${s.topColorForTabs(tabs.GIFS === props.tab)}`}></span>
      </div>
    </div>
  )
}