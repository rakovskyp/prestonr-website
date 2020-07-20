/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const SEO = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || [
          "Preston Rakovsky",
          "Preston",
          "Rakovsky",
          "Personal Website"
        ]
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:image`,
                content: `https://prestonr.xyz/icons/icon-384x384.png?v=6169ddc33599dc420ddda80d2986cc2b`,
              },
              {
                property: `og:description`,
                content: metaDescription,
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
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        url
      }
    }
  }
`

// function SEO({ description, keywords, lang, meta, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             url
//             image
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description
//   const metaKeywords = keywords || ['Preston Rakovsky'
//   || 'Preston' || 'Rakovsky' || 'Personal Website']
//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
// meta={[
//   {
//     name: `description`,
//     content: metaDescription,
//   },
//   {
//     property: `og:title`,
//     content: title,
//   },
//   {
//     property: `og:description`,
//     content: metaDescription,
//   },
//   {
//     property: `og:type`,
//     content: `website`,
//   },
//   {
//     name: `twitter:card`,
//     content: `summary`,
//   },
//   {
//     name: `twitter:creator`,
//     content: site.siteMetadata.author,
//   },
//   {
//     name: `twitter:title`,
//     content: title,
//   },
//   {
//     name: `twitter:description`,
//     content: metaDescription,
//   },
// ].concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

export default SEO
