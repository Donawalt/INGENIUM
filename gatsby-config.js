module.exports = {
  siteMetadata: {
    title: `INGENIUM`,
    description: ``,
    author: `Donaël WALTER`,
    owner: [`Benjamin`, `Charlie`, `Timothée`],
    siteUrl: "https://demo-ingenium-portfolio.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://demo-ingenium-portfolio.netlify.com/",
        sitemap: `https://demo-ingenium-portfolio.netlify.com/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: "" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ingenium Portfolio`,
        short_name: `ingenium`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-offline',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
