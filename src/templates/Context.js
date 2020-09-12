import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link';
import { gsap, CSSPlugin, TimelineMax, Power3 } from 'gsap';

const contextValue = {
  link({ transitionElement, className, to, onClick, onKeyPress, children }) {
    gsap.registerPlugin(CSSPlugin);

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
        onClick={() => onClick && setTimeout(() => onClick(), 600)}
        onKeyPress={() => onKeyPress && setTimeout(() => onKeyPress(), 600)}
      >
        {children}
      </TransitionLink>
    );
  },
  transitionElement: null,
};

const TransitionContext = React.createContext(contextValue);

function ContextProvider({ children }) {
  const [value, setValue] = useState({ ...contextValue });
  const transitionRef = useRef(null);

  useEffect(() => {
    setValue({ ...contextValue, transitionElement: transitionRef.current });
  }, []);

  return (
    <TransitionContext.Provider value={value}>
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
            backgroundColor: '#000000',
            transform: 'translateY(100%)',
          }}
        />
      </TransitionPortal>
    </TransitionContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export { TransitionContext as default, ContextProvider };
