import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import './index.scss';

function Header() {
  return (
    <Fragment>
      <header className="header">
        <Link className="header__title" to="/">Thomas Vaeth</Link>

        <nav>
          <ul className="header__list">
            <li>
              <Link className="header__link" to="/#projects">Projects</Link>
            </li>
            <li>
              <Link className="header__link" to="/#articles">Articles</Link>
            </li>
            <li>
              <Link className="header__link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <header className="header--mobile">
        <Link className="header__title" to="/">Thomas Vaeth</Link>

        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <Link className="header__link" to="/#projects">Projects</Link>
            </li>
            <li>
              <Link className="header__link" to="/#articles">Articles</Link>
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
