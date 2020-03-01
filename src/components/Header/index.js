import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import './index.scss';

function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [hamburgerMenu, setHamburgerMenu] = useState(null);
  const headerRef = useRef(null);
  const scrollRef = useRef(null);

  scrollRef.current = 0;

  const headerDirection = () => {
    const scrollTop = window.pageYOffset;

    if (Math.abs(scrollRef.current - scrollTop) <= 15) {
      return;
    }

    const headerHeight = headerRef.current.offsetHeight;

    if (scrollTop <= headerRef.current.getBoundingClientRect().top + headerHeight) {
      setScrollDirection(null);
    } else if (scrollTop > scrollRef.current && scrollTop > headerHeight) {
      if (scrollDirection === 'header--scrolling-up') {
        setScrollDirection('header--scrolling-down');
      }
    } else if (scrollTop + window.innerHeight < document.body.clientHeight) {
      setScrollDirection('header--scrolling-up');
    }

    scrollRef.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', headerDirection);
    window.addEventListener('resize', headerDirection);

    return () => {
      window.removeEventListener('scroll', headerDirection);
      window.removeEventListener('resize', headerDirection);
    };
  });

  const onClick = () => {
    setHamburgerMenu(!hamburgerMenu ? 'hamburger--open' : null);
  };

  const desktopClasses = classNames('header', scrollDirection, hamburgerMenu);
  const mobileClasses = classNames('header--mobile', hamburgerMenu);

  return (
    <Fragment>
      <header className={desktopClasses} ref={headerRef}>
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

      <header className={mobileClasses}>
        <Link className="header__title" to="/">Thomas Vaeth</Link>

        <div className="hamburger" 
          onClick={onClick}
          onKeyPress={onClick}
          role="button"
          tabIndex="0"
        >
          <div />
          <div />
          <div />
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
