const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: "./public/dist/",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [new WebpackPwaManifest {
    filename: 'Manifest.json', 
    inject: false
  }]
};

module.exports = config;
