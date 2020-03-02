import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scrollTo from 'gatsby-plugin-smoothscroll';
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link';
import { TimelineMax, Power3 } from 'gsap';

import './index.scss';

function Header({ pathname }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [hamburgerMenu, setHamburgerMenu] = useState(null);
  const headerRef = useRef(null);
  const transitionRef = useRef(null);
  const scrollRef = useRef(null);
  const locationRef = useRef(null);

  scrollRef.current = 0;

  if (locationRef.current && locationRef.current !== pathname) {
    setScrollDirection(null);
  }

  locationRef.current = pathname;

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

  const verticalAnimation = ({ length }) => {
    return new TimelineMax()
      .set(transitionRef.current, { y: '100%' })
      .to(transitionRef.current, length, {
        y: '0%',
        ease: Power3.easeOut,
      })
      .to(transitionRef.current, length, {
        y: '-100%',
        ease: Power3.easeIn,
      });
  };

  const Link = ({ className, to, children }) => {
    return (
      <TransitionLink
        className={className || 'header__link'}
        to={to}
        exit={{
          length: 0.6,
          trigger: ({ exit }) => verticalAnimation(exit),
        }}
        entry={{
          delay: 0.6,
          length: 0.6,
        }}
      >
        {children}
      </TransitionLink>
    );
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
              ) : <Link to="/#projects">Projects</Link>}
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
              ) : <Link to="/#articles">Articles</Link>}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
              ) : <Link to="/#projects">Projects</Link>}
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
              ) : <Link to="/#projects">Articles</Link>}
            </li>
            <li>
              <Link className="header__link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <TransitionPortal>
        <div
          ref={transitionRef}
          className="transition"
          style={{
            transform: 'translateY(100%)',
          }}
        />
      </TransitionPortal>
    </Fragment>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
