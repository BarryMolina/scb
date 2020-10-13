const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
//require('dotenv').config({
//  path: `./.env.${activeEnv}`,
//})
console.log(`Stripe Pub Key: '${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}'`)

module.exports = {
  //pathPrefix: `/scb`,
  siteMetadata: {
    title: 'St. Croix Ballet',
    author: 'Roerick Sweeney',
    description: 'Classical Training At Its Best',
  },

  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staff`,
        path: `${__dirname}/src/markdown/staff`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
