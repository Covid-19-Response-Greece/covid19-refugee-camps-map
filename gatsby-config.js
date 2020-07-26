module.exports = {
  siteMetadata: {
    siteUrl: 'https://camps.covid19response.gr',
      title: 'Χάρτης COVID19',
      description: 'Χάρτης COVID-19 κρουσμάτων στα camps μεταναστών',
      author: 'Covid19 Response Greece'
  },
  
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-offline',
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `COVID-19 in Greek Refugee Camps`,
        short_name: `Refugee Camps Greece`,
        start_url: `/`,
        background_color: `#330066`,
        theme_color: `#330066`,
        display: `standalone`,
        cache_busting_mode: `none`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ]
};