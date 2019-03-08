import React, { Component } from 'react';
import { ThemeContext } from '../../utils/themeUtil';
import Icon from '../../HelperComponent/icons';
import {
  saveBookmark,
  removeBookmark,
  hasAlreadyBookmarked
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
    this.onIconClick = this.onIconClick.bind(this);
  }

  async componentDidMount() {
    const isBooked = await this.isAlreadyBookmarked(this.props.gif.id);
    if (isBooked) {
      this.setState({ isBookmarked: isBooked });
    }
  }

  getCurrentVideoTag() {
    return document.getElementById(this.props.gif.id); 
  }

  async isAlreadyBookmarked(id) {
    const isAlreadyBookedElement = await hasAlreadyBookmarked(id);
    console.log(isAlreadyBookedElement);
    return isAlreadyBookedElement.length === 1;
  }

  onIconClick(id, gif) {
    return async function () {
      if (this.isAlreadyBookmarked(id)) {
        removeBookmark(id);
      } else {
        const bookmarkedObject = gif;
        saveBookmark(bookmarkedObject);
      }
    }
  }

  render() {
    const { images, id } = this.props.gif;
    const { index } = this.props;
    const { isBookmarked } = this.state;
    const randomColor = this.context.randomColors[index % 5];
    return (
      <div className={s.videoBackground(randomColor, images.fixed_width.height)}>
        <div className={`${s.heartIcon} heart`} onClick={this.onIconClick(id, this.props.gif)}>
          <Icon type={isBookmarked ? 'heart-filled' : 'heart'} width={20} height={20} fill="#FFF" />
        </div>
        <video id={id} autoPlay={true} loop muted={true} preload="auto" className="gif-video">
          <source src={images.fixed_width.mp4} type="video/mp4" />
        </video>
      </div>
    );
  }
}

GifCard.contextType = ThemeContext;