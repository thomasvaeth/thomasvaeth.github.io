import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import slugify from '../utils/slugify';

import defaultImage from '../images/me.jpg';

function SEO({ title, description, image, pathname, article, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            twitterUsername
          }
        }
      }
    `
  );

  const { defaultTitle, defaultDescription, siteUrl, twitterUsername } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: title && slugify(title),
      }}
      title={title ? `${title} | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          itemProp: 'name',
          content: defaultTitle,
        },
        {
          itemProp: 'description',
          content: seo.description,
        },
        {
          itemProp: 'image',
          content: seo.image,
        },
        {
          property: 'og:url',
          content: seo.url,
        },
        {
          property: 'og:type',
          content: article ? 'article' : 'website',
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:site_name',
          content: defaultTitle,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        {
          name: 'twitter:url',
          content: seo.url,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:site',
          content: defaultTitle,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
        {
          name: 'twitter:creator',
          content: twitterUsername,
        },
        {
          name: 'twitter:image',
          content: seo.image,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
  meta: PropTypes.array,
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
};

export default SEO;
