module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack'
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/[name].[contenthash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
