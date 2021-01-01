import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type: 'success' | 'error';
}

const toastTypeVariations = {
  success: css`
    background: #4caf50;
  `,

  error: css`
    background: #d32f2f;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  display: flex;
  align-items: center;

  cursor: pointer;

  width: 360px;

  padding: 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  color: #fff;
  line-height: 20px;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type]}
`;
