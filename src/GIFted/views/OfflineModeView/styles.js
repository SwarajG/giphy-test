import { css } from 'emotion';

const offlineMode = theme => css`
  color: ${theme.primaryContrast};
  font-size: 24px;
  text-align: center;
`;

const offlineWrapper = css`
  padding-top: 80px;
`;

export default {
  offlineMode,
  offlineWrapper,
};