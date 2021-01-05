import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import PageNotFound from './components/routes/PageNotFound';
import './App.css';
import 'normalize.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/not-found" component={PageNotFound} />
        <Route path="*">
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
