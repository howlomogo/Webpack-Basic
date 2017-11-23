const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // "uglify" our output js code

const extractLess = new ExtractTextWebpackPlugin({
		filename: "css/styles.css"
});

let config = {
	entry: './src/index.js',
	output: {
		// Webpack needs an absolute path to work properly. We can accomplish this by using resolve
		path: path.resolve(__dirname, './_sites'),
		filename: 'output.js'
	},
	resolve: { // options change how modules are resolved
		extensions: ['.js', '.jsx', '.json', '.less', '.css', '.jpeg', '.jpg', '.gif', '.png'], //auto resolved certain extensions
		alias: { // create alias
			images: path.resolve(__dirname, 'src/assets/images') // src/assets/images alias
		}
	},
	module: {
		rules: [
			// {
			// 	// Loader for Bootstrap glyph files
			// 	test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			// 	loader: 'url-loader?limit=100000'
			// },
			{
				test: /\.js$/, // files ending in .js
				exclude: /node_modules/, //exclude the node_modules directory
				loader: "babel-loader" // use this (babel-core) loader
			},
			{
				test: /\.less$/,
				use: extractLess.extract({
					use: [{
						loader: "css-loader",
						options: {
				         minimize: true
				    }
					}, {
						loader: "less-loader"
					}],
					fallback: "style-loader"
				})
      },
			{
				test: /\.jsx$/, // all files ending in .jsx
				loader: 'babel-loader', // use the babel-loader for all .jsx files
				exclude: /node_modules/ // exclude node modules
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
					loader: 'image-webpack-loader',
					query: {
						mozjpeg: {
							progressive: true,
						},
						gifsicle: {
							interlaced: false,
						},
						optipng: {
							optimizationLevel: 4,
						},
						pngquant: {
							quality: '75-90',
							speed: 3,
						},
					},
				}],
				exclude: /node_modules/,
				include: __dirname,
			},
		]
	},
	plugins: [
		extractLess

		// new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constrctor and name the css file
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'), // A directory or URL where to serve the html from
		historyApiFallback: true, // fallback to /index.html for single page applications.
		inline: true, // Inline mode (set to false to disable including client scripts like livereload)
		open: true // open default browser while launching
	},
	devtool: 'eval-source-map' // enable devtool for better debug experience
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
    new OptimizeCSSAssets() // call the css optimizer (minification)
  );
}

module.exports = config;
