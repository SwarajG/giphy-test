import React, { useContext } from 'react';
import Icon from '../../HelperComponent/icons';
import { ThemeContext } from '../../utils/themeUtil';
import { sorting } from '../../utils/const';
import s from './styles';

export default function GifController(props) {
  const theme = useContext(ThemeContext);
  function playAllGifs() {
    const images = document.getElementsByClassName('gif-image');
    for(let i = 0; i < images.length; i++) {
      window.isPlaying = true;
      images[i].style = 'display: none;';
      const image = new Image();
      image.src = images[i].getAttribute('data-gifimage');
      images[i].src = image.src;
      images[i].style = 'display: block;';
    }
    props.onStatusChange(true);
  }

  function pauseAllGifs() {
    const images = document.getElementsByClassName('gif-image');
    for(let i = 0; i < images.length; i++) {
      window.isPlaying = false;
      images[i].style = 'display: none;';
      const image = new Image();
      image.src = images[i].getAttribute('data-stillimage');
      images[i].src = image.src;
      images[i].style = 'display: block;';
    }
    props.onStatusChange(false);
  }

  const isReleventActive = props.activeSorting === sorting.RELEVENT;
  const isNewestActive = props.activeSorting === sorting.NEWEST;

  function updateSorting(value) {
    props.onSortingChanges(value);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.sortWrapper}>
        <p className={s.sortOptions()}>Sort:</p>
        <p
          className={s.sortOptions(isReleventActive, theme)}
          onClick={() => updateSorting(sorting.RELEVENT)}
        >
          Relevant
        </p>
        <p
          className={s.sortOptions(isNewestActive, theme)}
          onClick={() => updateSorting(sorting.NEWEST)}
        >
          Newest
        </p>
      </div>
      <div className={s.controllerWrapper}>
        <p onClick={playAllGifs} className={s.controlIconWrapper}>
          <Icon type="play" fill="#FFF" className={s.iconClass} height={10} width={10} />
        </p>
        <p onClick={pauseAllGifs} className={s.controlIconWrapper}>
          <Icon type="pause" fill="#FFF" className={s.iconClass} height={10} width={10} />
        </p>
        <span className={s.topColor(props.isPlaying)}></span>
      </div>
    </div>
  )
}