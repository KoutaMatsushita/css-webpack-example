import webpack from "webpack"
import path from "path"
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: "./main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({ grid: true })
                ]
              }
            },
            {
              loader: "sass-loader",
            },
          ]
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=../dist/font/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true // jsファイルを分割する場合は必ずtrueにする
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      jQuery: "jquery",
    })
  ]
} as webpack.Configuration
