/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Elena Stransky`,
    author: "Elena Stransky",
    description: "Elena Stransky's Portfolio Website",
    siteUrl: `https://www.elenastransky.com`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-postcss", 
    "gatsby-plugin-sitemap", 
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "spaceId": "mem6wwtvk2ex",
      "accessToken": "q84d54z4Z9990tHL1MtIbMWVRQqY6ZE5PoOfm9US7tA",
    }
  }, 
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `neuton`,
      ],
      display: 'swap'
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};