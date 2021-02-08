const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
		mode: 'development',
		devServer: {
				// historyApiFallback: true,
				contentBase: './dist',
				open: true,
				// compress: false,
				// hot: true,
				// port: 8080
		},
		entry: './src/js/index.js',
		output: {
				filename: '[name].js',
				path: path.resolve(__dirname, 'dist')
		},
		optimization: {
				runtimeChunk: 'single',
				splitChunks: {
						chunks: 'all',
						maxInitialRequests: Infinity,
						minSize: 0,
						cacheGroups: {
								vendor: {
										test: /[\\/]node_modules[\\/]/,
										name(module) {
												const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
												return `npm.${packageName.replace('@', '')}`;
										},
								},
						},
				},
		},
		module: {
				rules: [{
								test: /\.m?js$/,
								exclude: /(node_modules|bower_components)/,
								use: {
										loader: 'babel-loader',
										options: {
												presets: ['@babel/preset-env']
										}
								}
						},
						// PostCSS, Sass
						{
								test: /\.(scss)$/,
								use: [{
												loader: 'style-loader',
										},
										{
												loader: 'css-loader'
										},
										{
												loader: 'postcss-loader'
										},
										{
												loader: 'sass-loader'
										}
								],
						},
						// Css
						{
								test: /\.(css)$/,
								use: [{
												loader: 'style-loader',
										},
										{
												loader: 'css-loader'
										},
										{
												loader: 'postcss-loader'
										},
								],
						},

				]
		},
		plugins: [
				new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
				new HtmlWebpackPlugin({
						title: 'Rocket BoilerPlate',
						template: path.resolve(__dirname, './src/index.html'),
						filename: 'index.html'
				}),
				new CopyPlugin({
						patterns: [
								{ from: "./src/img", to: "./img" },
						],
				}),
				new webpack.HotModuleReplacementPlugin(),
				new webpack.ProvidePlugin({
						$: 'jquery',
						jQuery: 'jquery'
				})
		]
}
