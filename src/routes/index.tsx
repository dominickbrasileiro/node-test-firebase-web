import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateAccount from '../pages/CreateAccount';
import Account from '../pages/Account';
import DownloadMobileApp from '../pages/DownloadMobileApp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={CreateAccount} />
      <Route path="/:account_name" exact component={Account} />
      <Route path="/:account_name/download" component={DownloadMobileApp} />
    </Switch>
  );
};

export default Routes;
