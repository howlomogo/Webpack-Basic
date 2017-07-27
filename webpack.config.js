const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		// Webpack needs an absolute path to work properly. We can accomplish this by using resolve
		path: path.resolve(__dirname, './public'),
		filename: 'output.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/, // files ending in .js
				exclude: /node_modules/, //exclude the node_modules directory
				loader: "babel-loader" // use this (babel-core) loader
			},
			{
				test: /\.scss$/, // files ending in .scss
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'sass-loader'], // use these loaders
					fallback: 'style-loader' // fallback for any CSS not extracted
				})
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constrctor and name the css file
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'), // A directory or URL where to serve the html from
		historyApiFallback: true, // fallback to /index.html for single page applications.
		inline: true, // Inline mode (set to false to disable including client scripts like livereload)
		open: true // open default browser while launching
	},
	devtool: 'eval-source-map' // enable devtool for better debug experience
}

module.exports = config;