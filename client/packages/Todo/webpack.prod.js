const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('./package.json').dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const prodConfig = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new ModuleFederationPlugin({
      name: 'todo',
      filename: 'remoteEntry.js',
      exposes: {
        './Todo': './src/bootstrap'
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
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

module.exports = merge(commonConfig, prodConfig)
