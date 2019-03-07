import { css } from 'emotion';

const mainWrapper = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 1040px;
  align-items: center;
  margin: 0 auto;
`;

const inputWrapper = css`
  width: 100%;
  margin-bottom: 20px;
`;

const loader = css`
  color: #FFF;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export default {
  mainWrapper,
  inputWrapper,
  loader
};