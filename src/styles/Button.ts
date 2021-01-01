import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  border-radius: 4px;
  outline: 0;
  border: 0;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;

  background-color: #232323;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${lighten(0.05, '#232323')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${lighten(0.2, '#232323')};
  }
`;
