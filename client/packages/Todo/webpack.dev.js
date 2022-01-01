const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('./package.json').dependencies
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')

const devConfig = {
  entry: './src/index.ts',
  mode: 'development',
  // output: {
  //   publicPath: "http://localhost:3002/",
  // },
  devServer: {
    // allowedHosts: "auto",
    // host: "0.0.0.0",
    port: 3001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
    // client: {
    //   webSocketURL: "auto://0.0.0.0:0/ws",
    // },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    // new ModuleFederationPlugin({
    //   name: "todo",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./Button": "./src/Button.tsx",
    //     "./Todo": "./src/bootstrap",
    //   },
    //   shared: {
    //     ...deps,
    //     react: { singleton: true, eager: true, requiredVersion: deps.react },
    //     "react-dom": {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: deps["react-dom"],
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/]
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ]
}
module.exports = merge(commonConfig, devConfig)
