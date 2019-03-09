import { css } from 'emotion';

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
`;

const videoBackground = (color, height) => css`
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
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
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
  display: block;
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

const tabsWrapper = css`
  left: 0;
  width: 200px;
`;

const tabs = css`
  font-family: helvetica;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  z-index: 2;
  line-height: 14px;
  font-size: 14px;
`;

export default {
  inputClass,
  videoBackground,
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
  topColorForTabs
};