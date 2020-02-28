import React from 'react';

import './index.scss';

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">&copy; {new Date().getFullYear()}</span>
      <ul className="footer__list">
        <li>
          <a
            className="footer__link"
            href="https://github.com/thomasvaeth"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="footer__link"
            href="http://codepen.io/thomasvaeth"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
        </li>
        <li>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/thomasvaeth"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
