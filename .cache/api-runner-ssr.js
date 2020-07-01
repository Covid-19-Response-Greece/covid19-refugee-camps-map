var plugins = [{
      plugin: require('/Users/macmini/Desktop/covid19-refugee-camps-map/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/macmini/Desktop/covid19-refugee-camps-map/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/macmini/Desktop/covid19-refugee-camps-map/node_modules/gatsby-plugin-react-leaflet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/macmini/Desktop/covid19-refugee-camps-map/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/macmini/Desktop/covid19-refugee-camps-map/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-159939803-4","head":true,"anonymize":true,"respectDNT":true,"pageTransitionDelay":0},
    },{
      plugin: require('/Users/macmini/Desktop/covid19-refugee-camps-map/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"COVID-19 in Greek Refugee Camps","short_name":"Refugee Camps Greece","start_url":"/","background_color":"#330066","theme_color":"#330066","display":"standalone","cache_busting_mode":"none","icon":"src/images/icon.png","icons":[{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
