module.exports = {
  siteMetadata: {
    title: `Preston Rakovsky`,
    description: `Preston Rakovsky's personal website. Made with React and Gatsby.`,
    author: `Preston Rakovsky`,
    url: 'https://prestonr.xyz',
    image: './src/images/preston-icon.png',
    siteUrl: 'https://prestonr.xyz'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      
        exclude: [`/search`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site}) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            if(node.path.startsWith('/code/')) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.9,
              }
            } else if (node.path.startsWith('/about/')){
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `yearly`,
                priority: 0.7,
              }
            } else if (node.path.startsWith('/books/')) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `weekly`,
                priority: 0.5,
              }
            } else if (node.path.startsWith('/contact/')) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `never`,
                priority: 0.7,
              }
            }
            else {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `yearly`,
                priority: 1.0,
              }
            }
          })
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/preston-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-148761840-1'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
