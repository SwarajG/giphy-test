import React, { Component } from 'react';
import { ThemeContext } from '../../utils/themeUtil';
import Icon from '../../HelperComponent/icons';
import { tabs } from '../../utils/const';
import {
  saveBookmark,
  removeBookmark,
  isAlreadyBookmarked,
  getMediaById
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
      isBookmarked: false,
      videoUrl: props.gif.images.fixed_width.mp4
    };
  }

  async componentDidMount() {
    const bookedCard = await isAlreadyBookmarked(this.props.gif.id);
    const { id } = this.props.gif;
    const { tab } = this.props;
    const isBookmarkedTab = tab === tabs.FAVOURITE;
    if (bookedCard) {
      this.setState({ isBookmarked: true });
    }
    if (isBookmarkedTab) {
      const response = await getMediaById(id);
      if (response) {
        const url = URL.createObjectURL(response.objectUrl);
        this.setState({ videoUrl: url });
      }
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
    const { index, tab } = this.props;
    const { isBookmarked, videoUrl } = this.state;
    const randomColor = this.context.randomColors[index % 5];
    const isBookmarkedTab = tab === tabs.FAVOURITE;
    return (
      <div className={s.videoBackground(randomColor, images.fixed_width.height)}>
        {!isBookmarkedTab && (
          <div className={`${s.heartIcon(isBookmarked)} heart`} onClick={this.onIconClick(id, this.props.gif)}>
            <Icon type="heart-fill" width={20} height={20} fill={isBookmarked ? '#FF6666' : '#FFF'} />
          </div>
        )}
        <video id={id} autoPlay={true} loop muted={true} preload="auto" className="gif-video">
          <source src={videoUrl} />
        </video>
      </div>
    );
  }
}

GifCard.contextType = ThemeContext;