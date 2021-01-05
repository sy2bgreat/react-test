import React, { FC, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ReactComponent as Icon } from '@assets/icons/hamburger_icon.svg';

interface HeaderState {
  navState: boolean;
  setNavState: any;
}

const enhancer = (BaseComponent: FC<HeaderState>) => (props: any) => {
  const [navState, setNavState] = useState(false);

  return <BaseComponent {...props} navState={navState} setNavState={setNavState} />;
};

const HeaderView = ({ navState, setNavState }: HeaderState) => {
  const match = useRouteMatch('/not-found');

  return (
    <header className={`app-header ${match ? 'hide' : ''}`}>
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
  );
};

export default enhancer(HeaderView);
