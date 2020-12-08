import React, { useState } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './routes/About';
import Contact from './routes/Contact';
import { ReactComponent as Icon } from '@assets/icons/hamburger_icon.svg';

const Header = () => {
  const [navState, setNavState] = useState(false);
  return (
    <BrowserRouter>
      <header className="app-header">
        <Icon
          className={`burger ${navState ? 'expanded' : null}`}
          onClick={() => {
            setNavState(!navState);
          }}
        ></Icon>
        <nav className={`main-nav ${navState ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
};

export default Header;
