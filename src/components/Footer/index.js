import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.scss';

function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            link
            title
          }
        }
      }
    }
  `);

  const links = site.siteMetadata.social.map(link => (
    <li key={link.title.toLowerCase()}>
      <a
        className="footer__link"
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.title}
      </a>
    </li>
  ));

  return (
    <footer className="footer">
      <span className="footer__copy">&copy; {new Date().getFullYear()}</span>
      <ul className="footer__list">
        {links}
      </ul>
    </footer>
  );
}

export default Footer;
