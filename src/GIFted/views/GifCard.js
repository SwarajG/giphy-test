import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../utils/themeUtil';
import s from './styles';

const GifCard = React.memo(function GifCard(props) {
  const { images, id } = props.gif;
  const { height, index } = props;
  const [isPlayingStatus, setIsPlayingStatus] = useState(true);
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const theme = useContext(ThemeContext);

  function getCurrentVideoTag() {
    return document.getElementById(id); 
  }

  function playVideo() {
    const element = getCurrentVideoTag();
    element.play();
  }

  function pauseVideo() {
    const element = getCurrentVideoTag();
    element.pause();
  }

  function toggleVideoStatus() {
    if (isPlayingStatus) {
      pauseVideo();
      setIsPlayingStatus(false);
    } else {
      playVideo();
      setIsPlayingStatus(true);
    }
  }

  useEffect(() => {
    const element = getCurrentVideoTag();
    // element.onloadeddata = setIsVideoLoaded(true);
  }, []);

  const randomColor = theme.randomColors[index % 5];

  if (id === '45bsIFsNeDgtmeKSRt') {
    console.log('Hey');
  }

  // autoPlay={true}
  // loop="loop"
  // muted={true}
  const isVideoLoaded = true;
  return (
    <div onClick={toggleVideoStatus} className={s.videoBackground(isVideoLoaded, randomColor, height)}>
      <video preload={false} id={id}>
        <source src={images.fixed_width.mp4} type="video/mp4" />
      </video>
    </div>
  );
});

export default GifCard;