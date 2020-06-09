import React from 'react';

import { Container, } from '../styles/shared';
import { Route, Switch, } from 'react-router-dom';

import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import NotFound from './shared/NotFound';
import Home from './root/Home';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
