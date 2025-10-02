/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Inoviso`,
    description: `Inoviso - Votre spécialiste de l'isolation thermique par l'extérieur. Améliorez le confort de votre habitat et réduisez vos factures d'énergie avec nos solutions d'isolation performantes.`,
    author: `Inoviso`,
    siteUrl: `https://www.inoviso.fr/`,
    keywords: `isolation thermique extérieur, ITE, rénovation énergétique, isolation façade, économies énergie, confort thermique, Nantes, Loire-Atlantique`,
    image: `src/images/inoviso-icon.png`, // You'll need to add this image
    phone: `02 40 13 83 22`,
    email: `contact@inoviso.fr`,
    address: `5 rue des Frères Lumière, 44119 Treillières`,
    social: {
      linkedin: `https://www.linkedin.com/company/inoviso`,
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inoviso - Isolation Thermique par l'Extérieur`,
        short_name: `Inoviso`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2563eb`,
        display: `minimal-ui`,
        icon: `src/images/inoviso-icon.png`, // You'll need to add this
      },
    },
  ],
}
