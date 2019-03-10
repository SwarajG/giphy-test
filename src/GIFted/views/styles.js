import { css } from 'emotion';

// TODO: Some of the styles are getting used across the classes, That why kept in one place.
// Can refactor it

const inputClass = theme => css`
  background-color: ${theme.inputBackground};
  border-radius: 0;
  font-weight: 400;
  width: 100%;
  border: 0;
  margin: 0;
  height: 52px;
  letter-spacing: 1px;
  font-size: 18px;
  padding: 0 17px;
  outline: none;
`;

const imageBackground = (color, height) => css`
  background-color: ${color};
  height: ${height}px;
  width: 200px;
  position: relative;

  &:hover .heart {
    display: block;
  }
`;

const controllerWrapper = css`
  display: flex;
  color: #FFF;
  margin-bottom: 20px;
  justify-content: flex-end;
  background: #212121;
  top: 0;
  right: 0;
  text-align: center;
  width: 48px;
`;

const iconClass = css`
  z-index: 2;
  position: inherit;
`;

const controlIconWrapper = css`
  height: 24px;
  width: 24px;
  line-height: 24px;
  position: relative;
  cursor: pointer;
`;

const topColor = isPlaying => css`
  display: inline-block;
  min-height: 24px;
  min-width: 24px;
  position: absolute;
  ${!isPlaying && `
    right: 0;
    background-color: rgb(255, 102, 102);
  `}
  ${isPlaying && `
    right: 24px;
    background-color: rgb(0, 255, 153);
  `}
  transition: all .2s ease-in-out .2s;
`;

const topColorForTabs = tab => css`
  display: inline-block;
  min-height: 24px;
  min-width: 100px;
  position: absolute;
  ${!tab && `
    right: 0;
    background-color: rgb(255, 102, 102);
  `}
  ${tab && `
    right: 100px;
    background-color: rgb(0, 255, 153);
  `}
  transition: all .2s ease-in-out .2s;
`;

const wrapper = css`
  position: relative;
  display: flex;
`;

const loader = css`
  color: #FFF;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  left: 0;
  right: 0;
`;

const gridWrapper = css`
  margin-top: 70px;
`;

const heartIcon = isBookmarked => css`
  display: ${isBookmarked ? 'block' : 'none'};
  position: absolute;
  right: 7px;
  top: 7px;
  cursor: pointer;
  z-index: 2;
`;

const noResults = url => css`
  background: url(${url}) center center no-repeat;
  width: auto;
  min-height: 300px;
  margin-top: 70px;
`;

const offlineMode = theme => css`
  color: ${theme.primaryContrast};
  font-size: 24px;
  text-align: center;
`;

const offlineWrapper = css`
  padding-top: 80px;
`;

const tabsWrapper = css`
  left: 0;
  width: 200px;
`;

const tabs = isActive => css`
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  z-index: 2;
  line-height: 14px;
  font-size: 12px;
  transition: all .2s ease-in-out .2s;
  color: ${isActive ? '#000' : '#FFF'};
  font-weight: 600;
`;

const imageClass = height => css`
  min-height: ${height}px;
  min-width: 200px;
`;

const sortWrapper = css`
  display: flex;
  align-items: center;
  height: 24px;
  margin-right: 30px;
`;

const sortOptions = (isActive, theme) => css`
  padding-left: 5px;
  padding-right: 5px;
  color: ${isActive ? theme.primaryContrast : '#b2b2b2'};
  font-size: 14px;
  cursor: pointer;
  font-weight: ${isActive ? 600 : 300};

  &:hover {
    color: #FFF;
  }
`;

export default {
  inputClass,
  imageBackground,
  controllerWrapper,
  controlIconWrapper,
  topColor,
  iconClass,
  loader,
  wrapper,
  gridWrapper,
  heartIcon,
  noResults,
  tabs,
  tabsWrapper,
  topColorForTabs,
  offlineMode,
  offlineWrapper,
  imageClass,
  sortOptions,
  sortWrapper
};