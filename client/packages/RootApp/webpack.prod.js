const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('./package.json').dependencies

const prodConfig = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
    // publicPath: '/root-app/latest/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'root-app',
    //   // remotes: {
    //   //   // experience: 'experience@http://localhost:3002/remoteEntry.js'
    //   // },
    //   shared: {
    //     ...deps,
    //     react: { singleton: true, eager: true, requiredVersion: deps.react },
    //     'react-dom': {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: deps['react-dom']
    //     }
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
