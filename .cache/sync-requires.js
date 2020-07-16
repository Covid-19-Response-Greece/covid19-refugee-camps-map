const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macmini/covid19-refugee-camps-map/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/macmini/covid19-refugee-camps-map/src/pages/404.js"))),
  "component---src-pages-covid-19-camps-js": hot(preferDefault(require("/Users/macmini/covid19-refugee-camps-map/src/pages/covid19camps.js"))),
  "component---src-pages-geolocate-js": hot(preferDefault(require("/Users/macmini/covid19-refugee-camps-map/src/pages/geolocate.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/macmini/covid19-refugee-camps-map/src/pages/index.js"))),
  "component---src-pages-info-js": hot(preferDefault(require("/Users/macmini/covid19-refugee-camps-map/src/pages/info.js")))
}

