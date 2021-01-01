import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>

    <GlobalStyles />
  </>
);

export default App;
