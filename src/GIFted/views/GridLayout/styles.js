import { css } from 'emotion';

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

const noResults = url => css`
  background: url(${url}) center center no-repeat;
  width: auto;
  min-height: 300px;
  margin-top: 70px;
`;

export default {
  loader,
  gridWrapper,
  noResults,
};