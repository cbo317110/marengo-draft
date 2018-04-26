const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: {
		'script': './demo/script.js'
	},
	output: {
		publicPath: '/demo/dist/',
		path: path.join(__dirname, './demo/dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['css-loader', 'sass-loader']
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': [
							{ loader: 'vue-style-loader' },
							{ loader: 'css-loader' }
						]
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			'demo-component': path.resolve('./src')
		},
		extensions: ['*', '.js', '.vue', '.json', '.scss']
	},
	devServer: {
		contentBase: path.join(__dirname, "demo/"),
	}
}