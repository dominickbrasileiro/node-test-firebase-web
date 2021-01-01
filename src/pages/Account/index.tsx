import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import ReactLoading from 'react-loading';

import api from '../../services/api';

import { Container, ShareButton, ShareLinkContainer } from './styles';
import { useToast } from '../../hooks/toast';

interface RouteParams {
  account_name: string;
}

interface Account {
  _id: string;
  name: string;
}

const Account: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<Account>({} as Account);
  const [shareLink, setShareLink] = useState('');

  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    api
      .get<Account>(`accounts/${params.account_name}`)
      .then(response => {
        setAccount(response.data);

        setLoading(false);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);

        history.push('/');
      });
  }, [params.account_name, history]);

  const handleShare = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.post(`accounts/${account._id}/share`);

      const { link } = response.data;

      setShareLink(link);

      addToast({
        type: 'success',
        description: 'Share link created!',
      });
    } catch (error) {
      addToast({
        type: 'error',
        description: 'An unexpected error ocurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  }, [account, addToast]);

  const handleCopyShareLink = useCallback(() => {
    const textareaElement = document.createElement('textarea');

    textareaElement.value = shareLink;

    // Accessibility purposes
    textareaElement.setAttribute('readonly', '');
    textareaElement.style.position = 'absolute';
    textareaElement.style.left = '-9999px';

    document.body.appendChild(textareaElement);
    textareaElement.select();

    document.execCommand('copy');
    document.body.removeChild(textareaElement);

    addToast({
      type: 'success',
      description: 'Link copied to clipboard!',
    });
  }, [shareLink, addToast]);

  return (
    <Container>
      {loading ? (
        <ReactLoading color="#444" type="bubbles" />
      ) : (
        <>
          <h1>Account Page</h1>

          <p>This page is for:</p>
          <p>
            <strong>{account.name}</strong>
          </p>

          <ShareButton type="button" onClick={handleShare}>
            Share
          </ShareButton>

          {shareLink && (
            <ShareLinkContainer onClick={handleCopyShareLink}>
              <p>
                <strong>Share Link:</strong>
              </p>

              <p>{shareLink}</p>
            </ShareLinkContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default Account;
