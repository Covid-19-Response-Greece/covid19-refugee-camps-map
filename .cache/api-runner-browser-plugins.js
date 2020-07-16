module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-159939803-4","head":true,"anonymize":true,"respectDNT":true,"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"COVID-19 in Greek Refugee Camps","short_name":"Refugee Camps Greece","start_url":"/","background_color":"#330066","theme_color":"#330066","display":"standalone","cache_busting_mode":"none","icon":"src/images/icon.png","icons":[{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    }]
