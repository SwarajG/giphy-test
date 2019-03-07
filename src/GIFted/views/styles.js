import { css } from 'emotion';

const inputClass = css`
  background-color: #fff;
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

const videoBackground = (isVideoLoaded, color, height) => css`
  ${!isVideoLoaded && `background-color: ${color};`};
  min-height: ${height}px;
`;

export default {
  inputClass,
  videoBackground
};