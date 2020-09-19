const webpack= require('webpack');
const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');

module.exports = {
     entry: [
            path.join(__dirname, 'src/index.jsx'),
            path.join(__dirname, 'src/sass/main.scss'),
          ],
     output:{
          path: path.join(__dirname,'dist'),
          filename: 'bundle.js'
     },

     resolve:{
          extensions: [".js",".jsx",".scss"]
     },

     plugins :[ 
          new HtmlWebpackPlugin({
                filename:'index.html',
                template:path.join(__dirname, 'src/index.html')
              }),
          new ExtractTextPlugin('style.css'),
         // new UglifyJSPlugin()    
     ],

     module:{
          rules:[
              {
                   test:/.jsx?$/,
                   exclude:/node_modules/,
                   include:path.join(__dirname, 'src'),
                   use:[
                        {
                             loader:'babel-loader',
                             options:{
                                  presets:['es2015']
                              }
                         }
                    ]
               },
               {
                  test:/\.(jpe?g|ico|png|gif|svg)$/i,
                  loader:'file-loader?name=img/[name].[ext]'
               },

               {
                    test: /\.scss$/,
                    use: [
                        {
                           loader: 'file-loader',
                            options: {
                             name: 'css/style.css',
                          }
                        },
                        {
                         loader: 'sass-loader'
                        }
                    ],     
                }
          ]
     },

     devServer:{
          publicPath: "/",
          contentBase: "./dist"
     },


};