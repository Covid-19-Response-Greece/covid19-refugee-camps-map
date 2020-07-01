const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/macmini/Desktop/covid19-refugee-camps-map/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/macmini/Desktop/covid19-refugee-camps-map/src/pages/404.js"))),
  "component---src-pages-covid-19-camps-js": hot(preferDefault(require("/Users/macmini/Desktop/covid19-refugee-camps-map/src/pages/covid19camps.js"))),
  "component---src-pages-geolocate-js": hot(preferDefault(require("/Users/macmini/Desktop/covid19-refugee-camps-map/src/pages/geolocate.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/macmini/Desktop/covid19-refugee-camps-map/src/pages/index.js")))
}

