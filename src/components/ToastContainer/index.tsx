import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { transform: 'translate3d(0%,-120%,0)', opacity: 1 },
      enter: { transform: 'translate3d(0%, 0%, 0)', opacity: 1 },
      leave: { transform: 'translate3d(120%, 0%, 0)', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransition.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
