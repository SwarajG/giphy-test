import React from 'react';
import Icon from '../../HelperComponent/icons';
import s from './styles';

export default function GifController(props) {
  function playAllGifs() {
    const images = document.getElementsByClassName('gif-image');
    for(let i = 0; i < images.length; i++) {
      window.isPlaying = true;
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
      const image = new Image();
      image.src = images[i].getAttribute('data-stillimage');
      images[i].src = image.src;
      images[i].style = 'display: block;';
      // console.log(`src: ${images[i].src}, output: ${images[i].getAttribute('data-stillimage')}`);
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