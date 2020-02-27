module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/thomasvaeth/thomasvaeth.github.io/src/templates/Default.js"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":2000,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"thomas-vaeth","short_name":"tv","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"minimal-ui","icon":"src/images/favicon.ico"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
