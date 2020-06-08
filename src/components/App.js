import React from 'react';

import { Route, Switch, } from 'react-router-dom';

import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';
import Home from './root/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;