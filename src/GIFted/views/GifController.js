import React from 'react';
import Icon from '../../HelperComponent/icons';
import s from './styles';

export default function GifController(props) {
  function playAllGifs() {
    const videos = document.getElementsByClassName('gif-video');
    for(var i = 0; i < videos.length; i++) {
      videos[i].play();
    }
    props.onStatusChange(true);
  }

  function pauseAllGifs() {
    const videos = document.getElementsByClassName('gif-video');
    for(var i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
    props.onStatusChange(false);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.controllerWrapper}>
        <p onClick={playAllGifs} className={s.controlIconWrapper}>
          <Icon type="play" fill="#FFF" className={s.iconClass} />
        </p>
        <p onClick={pauseAllGifs} className={s.controlIconWrapper}>
          <Icon type="pause" fill="#FFF" className={s.iconClass} />
        </p>
        <span className={s.topColor(props.isPlaying)}></span>
      </div>
    </div>
  )
}