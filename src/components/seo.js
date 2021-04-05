/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, title, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const kwikTitle = 'Kwikswap'

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
    >
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={title}></meta>

      <meta property="og:title" content={kwikTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={site.siteMetadata.siteUrl + path} />
      <meta property="og:image" content={`${site.siteMetadata.siteUrl}${path ? path : '/images/'}Kwikswap-card.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@KwikswapProtocol"></meta>
      <meta name="twitter:site" content="@KwikswapProtocol" />
      <meta property="og:image" content={`${site.siteMetadata.siteUrl}${path ? path : '/images/'}Kwikswap-card.jpg`} />

      {/* <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      <link href="../css/bootstrap.min.css" rel="stylesheet" />
      <link href="../css/style.css" rel="stylesheet" />
      <link href="../css/responsive.css" rel="stylesheet" />
      <link href="../css/font-awesome.min.css" rel="stylesheet" /> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      /> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      /> */}
      {/* <link rel="icon" href="../image/fav-icon.png" /> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
