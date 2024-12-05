module.exports = {
	plugins: [
		'manifest',
		{
			name: 'typescript',
			options: {
				compilerType: 'babel'
			}
		},
		{
			modifyWebpackConfig: ({
				env: { target },
				webpackConfig,
				webpackObject,
				paths,
				options: {
					pluginOptions = {},
				},
			}) => {
				const configuration = require('./config/config');
				const baseDefinePluginOpts = {
					...Object.keys(configuration).reduce((acc, key) => {
						acc[`process.env.${key}`] = JSON.stringify(configuration[key]);
						return acc;
					}, {})
				};
				webpackConfig.plugins.push(new webpackObject.DefinePlugin(baseDefinePluginOpts));
				// Do some stuff...
				return webpackConfig;
			},
		}
  ],
};
