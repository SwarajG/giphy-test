import React from 'react';
import { tabs } from '../../utils/const';
import s from './styles';

export default function Tabs(props) {
  function onchange(value) {
    props.onTabChange(value);
  }
  const isGifsTab = tabs.GIFS === props.tab;
  const isFavTab = tabs.FAVOURITE === props.tab;
  return (
    <div className={s.wrapper}>
      <div className={`${s.controllerWrapper} ${s.tabsWrapper}`}>
        <p
          onClick={() => onchange(tabs.GIFS)}
          className={`${s.controlIconWrapper} ${s.tabs(isGifsTab)}`}
        >
          GIFs
        </p>
        <p
          onClick={() => onchange(tabs.FAVOURITE)}
          className={`${s.controlIconWrapper} ${s.tabs(isFavTab)}`}
        >
          Favourites
        </p>
        <span className={`${s.topColorForTabs(isGifsTab)}`}></span>
      </div>
    </div>
  )
}