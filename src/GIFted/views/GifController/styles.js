import { css } from 'emotion';

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

const wrapper = css`
  position: relative;
  display: flex;
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
  controllerWrapper,
  controlIconWrapper,
  topColor,
  iconClass,
  sortOptions,
  sortWrapper,
  wrapper,
};