import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [message.id, removeToast]);

  const handleRedirect = useCallback(() => {
    const route = message.redirect_route;

    if (route) {
      history.push(route);
    } else {
      removeToast(message.id);
    }
  }, [history, message.id, message.redirect_route, removeToast]);

  return (
    <Container type={message.type} style={style} onClick={handleRedirect}>
      <span>{message.description}</span>
    </Container>
  );
};

export default Toast;
