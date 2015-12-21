module.exports = {
  entry: "./src/app.js",
  target: 'node',
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel"
    }
  ]
}
