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

const controlIconWrapper = css`
  height: 24px;
  width: 24px;
  line-height: 24px;
  position: relative;
  cursor: pointer;
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

export default {
  controllerWrapper,
  controlIconWrapper,
  wrapper,
  tabs,
  tabsWrapper,
  topColorForTabs,
};