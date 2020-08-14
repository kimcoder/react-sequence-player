const path = require('path');
const urlLoaderSizeLimit = 8 * 1024;

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../"),
        use: [
          require.resolve("babel-loader")
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: urlLoaderSizeLimit
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [
    ]
  }
};
