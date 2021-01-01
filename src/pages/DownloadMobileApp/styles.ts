import { lighten } from 'polished';
import styled, { keyframes } from 'styled-components';

const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  padding: 0 24px;
  margin: 0 auto;
  margin-top: 64px;
  animation: ${fadeInFromBottom} 0.68s;

  h1 {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const DownloadButton = styled.a`
  width: 100%;
  margin-top: 24px;
  padding: 16px 32px;
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
  text-decoration: none;

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
