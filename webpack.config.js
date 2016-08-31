module.exports = {
  entry: {
    'build/bundle': ["./scripts/global.js", "./scripts/app.js"]
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'jshint-loader'
       }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
