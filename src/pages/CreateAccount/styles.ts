import styled, { keyframes } from 'styled-components';
import Button from '../../styles/Button';

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
  }

  form {
    margin-top: 24px;
    width: 100%;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
  padding: 16px 32px;
`;
