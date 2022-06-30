import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scrollTo from 'gatsby-plugin-smoothscroll';
import TransitionContext from '../../templates/Context';

import './index.scss';

function Header({ pathname }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [hamburgerMenu, setHamburgerMenu] = useState(null);
  const { link, transitionElement } = useContext(TransitionContext);
  const headerRef = useRef(null);
  const scrollRef = useRef(null);
  const locationRef = useRef(null);

  scrollRef.current = 0;

  if (locationRef.current && locationRef.current !== pathname) {
    setScrollDirection(null);
  }

  locationRef.current = pathname;

  // const headerDirection = () => {
  //   const scrollTop = window.pageYOffset;

  //   if (Math.abs(scrollRef.current - scrollTop) <= 15) {
  //     return;
  //   }

  //   const headerHeight = headerRef.current.offsetHeight;

  //   if (scrollTop <= headerRef.current.getBoundingClientRect().top + headerHeight) {
  //     setScrollDirection(null);
  //   } else if (scrollTop > scrollRef.current && scrollTop > headerHeight) {
  //     if (scrollDirection === 'header--scrolling-up') {
  //       setScrollDirection('header--scrolling-down');
  //     }
  //   } else if (scrollTop + window.innerHeight < document.body.clientHeight) {
  //     setScrollDirection('header--scrolling-up');
  //   }

  //   scrollRef.current = scrollTop;
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', headerDirection);
  //   window.addEventListener('resize', headerDirection);

  //   return () => {
  //     window.removeEventListener('scroll', headerDirection);
  //     window.removeEventListener('resize', headerDirection);
  //   };
  // });

  const onClick = () => {
    setHamburgerMenu(!hamburgerMenu ? 'hamburger--open' : null);
  };

  const onTransition = () => {
    setHamburgerMenu(null);
  };

  const TransitionLink = link;

  const desktopClasses = classNames('header', scrollDirection, hamburgerMenu);
  const mobileClasses = classNames('header--mobile', hamburgerMenu);

  return (
    <Fragment>
      <header className={desktopClasses} ref={headerRef}>
        <TransitionLink
          className="header__title"
          to="/"
          transitionElement={transitionElement}
        >
          Thomas Vaeth
        </TransitionLink>

        <nav>
          <ul className="header__list">
            <li>
              {pathname === '/' ? (
                <span
                  className="header__link"
                  onClick={() => scrollTo('#projects')}
                  onKeyPress={() => scrollTo('#projects')}
                  role="button"
                  tabIndex="0"
                >
                  Projects
                </span>
              ) : (
                <TransitionLink
                  className="header__link"
                  to="/#projects"
                  transitionElement={transitionElement}
                >
                  Projects
                </TransitionLink>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <span
                  className="header__link"
                  onClick={() => scrollTo('#articles')}
                  onKeyPress={() => scrollTo('#articles')}
                  role="button"
                  tabIndex="0"
                >
                  Articles
                </span>
              ) : (
                <TransitionLink
                  className="header__link"
                  to="/#articles"
                  transitionElement={transitionElement}
                >
                  Articles
                </TransitionLink>
              )}
            </li>
            <li>
              <TransitionLink
                className="header__link"
                to="/contact"
                transitionElement={transitionElement}
              >
                Contact
              </TransitionLink>
            </li>
          </ul>
        </nav>
      </header>

      <header className={mobileClasses}>
        <TransitionLink
          className="header__title"
          to="/"
          transitionElement={transitionElement}
        >
          Thomas Vaeth
        </TransitionLink>

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
              {pathname === '/' ? (
                <span
                  className="header__link"
                  onClick={() => scrollTo('#projects')}
                  onKeyPress={() => scrollTo('#projects')}
                  role="button"
                  tabIndex="0"
                >
                  Projects
                </span>
              ) : (
                <TransitionLink
                  className="header__link"
                  to="/#projects"
                  transitionElement={transitionElement}
                  onClick={onTransition}
                  onKeyPress={onTransition}
                >
                  Projects
                </TransitionLink>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <span
                  className="header__link"
                  onClick={() => scrollTo('#articles')}
                  onKeyPress={() => scrollTo('#articles')}
                  role="button"
                  tabIndex="0"
                >
                  Articles
                </span>
              ) : (
                <TransitionLink
                  className="header__link"
                  to="/#projects"
                  transitionElement={transitionElement}
                  onClick={onTransition}
                  onKeyPress={onTransition}
                >
                  Articles
                </TransitionLink>
              )}
            </li>
            <li>
              <TransitionLink
                className="header__link"
                to="/contact"
                transitionElement={transitionElement}
                onClick={onTransition}
                onKeyPress={onTransition}
              >
                Contact
              </TransitionLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
