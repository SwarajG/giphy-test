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


export default class GifCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false,
      imageUrl: null
    };
    this.updateImageUrl = this.updateImageUrl.bind(this);
  }

  async componentDidMount() {
    const image = new Image();
    const imageId = `${this.props.gif.id}_${this.props.tab}`;
    const card = document.getElementById(imageId);
    const bookedCard = await isAlreadyBookmarked(this.props.gif.id);
    const { id, images } = this.props.gif;
    const { tab, isPlaying } = this.props;
    const isBookmarkedTab = tab === tabs.FAVOURITE;
    if (bookedCard) {
      this.setState({ isBookmarked: true });
    }
    if (isBookmarkedTab) {
      const response = await getMediaById(id);
      if (response) {
        const url = URL.createObjectURL(response.objectUrl);
        image.onload = () => {
          card.src = image.src;
          this.setState({ imageUrl: url });
        };
        image.src = url;
      }
    } else {
      const url = isPlaying && window.isPlaying ? images.fixed_width.webp : images.fixed_width_still.url;
      image.onload = () => {
        card.src = image.src;
        // To Check if before load window.isPlaying hasn't changed
        this.setState({ imageUrl: isPlaying && window.isPlaying ? images.fixed_width.webp : images.fixed_width_still.url });
      };
      image.src = url;
    }
  }

  updateImageUrl(value) {
    this.setState({ imageUrl: value });
  }

  onIconClick = (id, gif) => async () => {
    const response = await isAlreadyBookmarked(id);
    if (response) {
      removeBookmark(id);
      this.setState({ isBookmarked: false });
    } else {
      const bookmarkedObject = gif;
      saveBookmark(id, bookmarkedObject, gif.images.fixed_width.webp);
      this.setState({ isBookmarked: true });
    }
  }

  render() {
    const { images, id } = this.props.gif;
    const { index, tab } = this.props;
    const { isBookmarked, imageUrl } = this.state;
    const randomColor = this.context.randomColors[index % 5];
    const isBookmarkedTab = tab === tabs.FAVOURITE;
    return (
      <div className={s.imageBackground(randomColor, images.fixed_width.height)}>
        {!isBookmarkedTab && (
          <div className={`${s.heartIcon(isBookmarked)} heart`} onClick={this.onIconClick(id, this.props.gif)}>
            <Icon type={isBookmarked ? 'heart-fill' : 'heart'} width={20} height={20} fill={isBookmarked ? '#FF6666' : '#FFF'} />
          </div>
        )}
        <div className={s.imageClass(images.fixed_width.height)}>
          <img
            src={imageUrl}
            alt="giphy"
            style={{ display: imageUrl ? 'block' : 'none' }}
            id={`${id}_${tab}`}
            className="gif-image"
            data-stillimage={images.fixed_width_still.url}
            data-gifimage={images.fixed_width.webp}
          />
        </div>
      </div>
    );
  }
}

GifCard.contextType = ThemeContext;