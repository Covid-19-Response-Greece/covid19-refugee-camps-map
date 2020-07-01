// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-covid-19-camps-js": () => import("./../src/pages/covid19camps.js" /* webpackChunkName: "component---src-pages-covid-19-camps-js" */),
  "component---src-pages-geolocate-js": () => import("./../src/pages/geolocate.js" /* webpackChunkName: "component---src-pages-geolocate-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

