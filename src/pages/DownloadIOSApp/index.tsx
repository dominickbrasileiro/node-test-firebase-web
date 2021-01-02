import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import ReactLoading from 'react-loading';

import api from '../../services/api';

import { Container, DownloadButton } from './styles';

interface RouteParams {
  account_name: string;
}

interface Account {
  _id: string;
  name: string;
}

const DownloadIOSApp: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<Account>({} as Account);

  const history = useHistory();

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

  return (
    <Container>
      {loading ? (
        <ReactLoading color="#444" type="bubbles" />
      ) : (
        <>
          <h1>Download App</h1>

          <p>This page is for:</p>
          <p>
            <strong>{account.name}</strong>
          </p>

          <DownloadButton
            href={process.env.REACT_APP_IOS_DOWNLOAD_LINK}
            download
          >
            Download iOS App
          </DownloadButton>
        </>
      )}
    </Container>
  );
};

export default DownloadIOSApp;
