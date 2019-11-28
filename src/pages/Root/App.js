/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/Loadable';
//import ResumePage from 'pages/ResumePage/Loadable';
//import PortfolioPage from 'pages/PortfolioPage/Loadable'
//import ContactPage from 'pages/ContactPage/Loadable'
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/resume" component={HomePage} />
      <Route path="/portfolio" component={HomePage} />
      <Route path="/contact" component={HomePage} />
      <Route path="" component={HomePage} />
    </Switch>
    <Footer/>
  </div>
);

export default App;
