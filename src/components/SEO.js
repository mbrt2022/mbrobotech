import React from 'react';
import Head from 'next/head';
import { string, array } from 'prop-types';

export default function SEO({
  description = 'MB Robo-Tech company website',
  author = 'Kamil Szerląg',
  meta,
  title = 'MB Robo-Tech',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
};

SEO.propTypes = {
  description: string,
  author: string,
  meta: array,
  title: string,
};
