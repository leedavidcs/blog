const { addWebpackAlias } = require("customize-cra");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	stories: [
		"../src/**/*.stories.@(tsx|mdx)",
		"../src/**/stories/index.@(tsx|mdx)",
		"../src/**/stories/*.story.@(tsx|mdx)"
	],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-essentials",
		"@storybook/addon-knobs",
		"@storybook/addon-storysource"
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		}
	},
	webpackFinal: (config) => {
		/**
		 * !HACK
		 * @description next/image doesn't work with storybook, so we are stubbing it with a mock
		 *     for storybook
		 * @author David Lee
		 * @date December 16, 2020
		 */
		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/^next\/image$/,
				path.resolve(__dirname, "./mocks/next/image.js")
			)
		);

		config.module.rules.unshift({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						memo: true,
						ref: true,
						svgoConfig: {
							plugins: {
								removeViewBox: false
							}
						}
					}
				},
				"url-loader"
			]
		});

		return addWebpackAlias({ "@": path.resolve(__dirname, "../src") })(config);
	}
};
