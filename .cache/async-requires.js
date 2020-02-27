// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-index-js": () => import("./../src/templates/Post/index.js" /* webpackChunkName: "component---src-templates-post-index-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

