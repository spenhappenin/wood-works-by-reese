import React, { lazy, Suspense, } from 'react';

import { Container, } from '../styles/shared';
import { Route, Switch, } from 'react-router-dom';

const Navbar = lazy(() => import('./shared/Navbar'));
const Footer = lazy(() => import('./shared/Footer'));
const NotFound = lazy(() => import('./shared/NotFound'));
const Home = lazy(() => import('./root/Home'));
const AboutPage = lazy(() => import('./about/AboutPage'));
const CustomWorkPage = lazy(() => import('./custom-work/CustomWorkPage'));
const CollectionPage = lazy(() => import('./collection/CollectionPage'));
const ContactPage = lazy(() => import('./contact/ContactPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/custom-work" component={CustomWorkPage} />
            <Route exact path="/collection" component={CollectionPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
