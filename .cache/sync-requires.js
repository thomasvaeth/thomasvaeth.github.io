const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-index-js": hot(preferDefault(require("/Users/thomasvaeth/thomasvaeth.github.io/src/templates/Post/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thomasvaeth/thomasvaeth.github.io/.cache/dev-404-page.js")))
}

