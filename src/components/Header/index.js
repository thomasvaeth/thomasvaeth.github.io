import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import './index.scss';

function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <Link className="header__title" to="/" data-scroll>Thomas Vaeth</Link>

        <nav>
          <ul className="header__list">
            <li>
              <a className="header__link" href="#projects" data-scroll>Projects</a>
            </li>
            <li>
              <a className="header__link" href="#articles" data-scroll>Articles</a>
            </li>
            <li>
              <Link className="header__link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <header className="header--mobile">
        <Link className="header__title" to="/" data-scroll>Thomas Vaeth</Link>

        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a className="header__link" href="#projects" data-scroll>Projects</a>
            </li>
            <li>
              <a className="header__link" href="#articles" data-scroll>Articles</a>
            </li>
            <li>
              <Link className="header__link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
