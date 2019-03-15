import { css } from 'emotion';

const imageBackground = (color, height) => css`
  background-color: ${color};
  height: ${height}px;
  width: 200px;
  position: relative;

  &:hover .heart {
    display: block;
  }
`;

const heartIcon = isBookmarked => css`
  display: ${isBookmarked ? 'block' : 'none'};
  position: absolute;
  right: 7px;
  top: 7px;
  cursor: pointer;
  z-index: 2;
`;

const imageClass = height => css`
  min-height: ${height}px;
  min-width: 200px;
`;

export default {
  imageClass,
  imageBackground,
  heartIcon
};