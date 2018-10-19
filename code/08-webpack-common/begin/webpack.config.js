const path = require("path")
module.exports = (mode) => ({
  mode,
  devtool: "inline-sourcemaps",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
})
