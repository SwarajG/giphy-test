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
  outline: none;
`;

export default {
  inputClass
};