const path = require("path")

module.exports = {
  entry: path.join(__dirname, "app", "Index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public", "build"),
    publicPath: "/build"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
}