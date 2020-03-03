import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link';
import { TimelineMax, Power3 } from 'gsap';

const contextValue = {
  link({ transitionElement, className, to, children }) {
    const verticalAnimation = ({ length }) => {
      return new TimelineMax()
        .set(transitionElement, { y: '100%' })
        .to(transitionElement, length, {
          y: '0%',
          ease: Power3.easeOut,
        })
        .to(transitionElement, length, {
          y: '-100%',
          ease: Power3.easeIn,
        });
    };

    return (
      <TransitionLink
        className={className}
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
  }
};

const { Provider, Consumer } = React.createContext(contextValue);

function ContextProvider({ children }) {
  const [value, setValue] = useState({ ...contextValue, transitionElement: null });
  const transitionRef = useRef(null);

  useEffect(() => {
    setValue({ ...contextValue, transitionElement: transitionRef.current });
  }, []);

  return (
    <Provider value={value}>
      {children}
      <TransitionPortal>
        <div
          ref={transitionRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            height: '100%',
            width: '100%',
            backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--black'),
            transform: 'translateY(100%)',
          }}
        />
      </TransitionPortal>
    </Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export { Consumer as default, ContextProvider };
