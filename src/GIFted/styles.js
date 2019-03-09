import { css } from 'emotion';

const mainWrapper = css`
  max-width: 900px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 50px auto;
  position: relative;
`;

const inputWrapper = css`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  background-image: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 50%, rgb(153, 51, 255) 100%);
  position: sticky;
  top: 0px;
  z-index: 10;
`;

const searchIcon = css`
  transform: scaleX(-1);
  width: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const navWrapper = css`
  display: flex;
  justify-content: space-between;
`;

export default {
  mainWrapper,
  inputWrapper,
  searchIcon,
  navWrapper,
};