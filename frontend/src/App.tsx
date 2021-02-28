import React from 'react';
import './App.css';

import Routes from './routes';

import PageWrapper from './components/PageWrapper';

function App() {
  return (   
    <PageWrapper>
      <Routes />
    </PageWrapper>
  );
}

export default App;
