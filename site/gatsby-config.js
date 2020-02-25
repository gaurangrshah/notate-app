const path = require('path');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Jammers Starter`,
    logo: `https://dummyimage.com/48x48/ff4c70/fff&text=J`,
    description: `Starter Generator For Web`,
    author: `@jammers`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-boostrap-sass`,
    `gatsby-theme-styleguide`,
    `gatsby-theme-json-data`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/assets/images`)
      }
    }
  ],
  pathPrefix: "/notate-app",
}
