const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './src/index.js',  // start here as the first file to look at, look for all script files and join everything together
 output: {
   path: path.join(__dirname, '/dist'), //put the output in this directory
   filename: 'index_bundle.js' //bundle every file into this one file
 },
 module: {
   rules: [
     {
       test: /\.js$/, // look for only .js files
       exclude: /node_modules/, // don't look in the node_modules folder
       use: {
         loader: 'babel-loader' //for each .js file, run it through the babel tool to convert es6 and jsx to normal js
       }
     }
   ]
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: './src/index.html' // create this html file for me, insert the script tag with index_bundle.js in it for me
   })
 ]
};
