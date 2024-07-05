/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED`,
    description: `Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED Certification provides certification of manufacturers and suppliers of halal products. With our experience of many years, Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED Certification has a reputation for being a unique, professional,and expert organization in the Netherlands and Europe.`,
    author: `Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED`,
    siteUrl: `https://halalcorrect.de`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED`,
        short_name: `Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED`,
        start_url: `/`,
        description:
          "Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED provides certification of manufacturers and suppliers of halal products. With our experience of many years, Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED Certification has a reputation for being a unique, professional,and expert organization in the Netherlands and Europe.",
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo2.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
