/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "React Challenges",
    greeting: "Have you read the React documentation or watched some tutorials and want to start coding but don't know what to build? You've come to the right place. Here you will find half a dozen progressively more difficult coding challenges to practice what you've learnt",
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
