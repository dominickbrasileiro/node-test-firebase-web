import styled, { css } from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18.5px 14px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.54);

  ${props =>
    props.isFocused &&
    css`
      color: rgba(0, 0, 0, 0.87);
      border-color: rgba(0, 0, 0, 0.87);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: rgba(0, 0, 0, 0.87);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: inherit;
  }

  svg {
    margin-right: 16px;
    font-size: 20px;
    opacity: 0.6;
  }
`;
