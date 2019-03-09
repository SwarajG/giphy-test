import React, { Component } from 'react';
import { ThemeContext } from '../../utils/themeUtil';
import Icon from '../../HelperComponent/icons';
import {
  saveBookmark,
  removeBookmark,
  isAlreadyBookmarked
} from '../../DataService/requestHandling';
import s from './styles';

// TODO: This is for manual control
// function playVideo() {
//   const element = getCurrentVideoTag();
//   element.play();
// }

// function pauseVideo() {
//   const element = getCurrentVideoTag();
//   element.pause();
// }

// function toggleVideoStatus() {
//   if (isPlayingStatus) {
//     pauseVideo();
//     setIsPlayingStatus(false);
//   } else {
//     playVideo();
//     setIsPlayingStatus(true);
//   }
// }

export default class GifCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false
    };
  }

  async componentDidMount() {
    const bookedCard = await isAlreadyBookmarked(this.props.gif.id);
    if (bookedCard) {
      this.setState({ isBookmarked: true });
    }
  }

  getCurrentVideoTag() {
    return document.getElementById(this.props.gif.id); 
  }

  onIconClick = (id, gif) => async () => {
    const response = await isAlreadyBookmarked(id);
    if (response) {
      removeBookmark(id);
      this.setState({ isBookmarked: false });
    } else {
      const bookmarkedObject = gif;
      saveBookmark(id, bookmarkedObject, gif.images.fixed_width.mp4);
      this.setState({ isBookmarked: true });
    }
  }

  render() {
    const { images, id } = this.props.gif;
    const { index } = this.props;
    const { isBookmarked } = this.state;
    const randomColor = this.context.randomColors[index % 5];
    return (
      <div className={s.videoBackground(randomColor, images.fixed_width.height)}>
        <div className={`${s.heartIcon(isBookmarked)} heart`} onClick={this.onIconClick(id, this.props.gif)}>
          <Icon type="heart-fill" width={20} height={20} fill={isBookmarked ? '#FF6666' : '#FFF'} />
        </div>
        <video id={id} autoPlay={true} loop muted={true} preload="auto" className="gif-video">
          <source src={images.fixed_width.mp4} type="video/mp4" />
        </video>
      </div>
    );
  }
}

GifCard.contextType = ThemeContext;