import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateAccount from '../pages/CreateAccount';
import Account from '../pages/Account';
import DownloadAndroidApp from '../pages/DownloadAndroidApp';
import DownloadIOSApp from '../pages/DownloadIOSApp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={CreateAccount} />
      <Route path="/:account_name" exact component={Account} />
      <Route
        path="/:account_name/download-android"
        component={DownloadAndroidApp}
      />
      <Route path="/:account_name/download-ios" component={DownloadIOSApp} />
    </Switch>
  );
};

export default Routes;
