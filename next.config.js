const bundleAnalyzer = require("@next/bundle-analyzer");
const mdx = require("@next/mdx");
const withPlugins = require("next-compose-plugins");
const transpileModules = require("next-transpile-modules");
const TerserPlugin = require("terser-webpack-plugin");

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.BUNDLE_ANALYZE === "true" });
const withMDX = mdx({ extension: /\.(md|mdx)$/ });
const withTranspileModules = transpileModules([]);

const config = {
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US"
	},
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	target: "experimental-serverless-trace",
	env: {
		PROJECT_DIRNAME: __dirname,
	},
	webpack: (config, { dev, isServer, webpack }) => {
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

		if (!dev && !isServer) {
			const minimizer = config.optimization.minimizer || [];
			
			minimizer.push(new TerserPlugin());

			config.optimization.minimize = true;
			config.optimization.minimizer = minimizer;
		}

		return config;
	}
};

module.exports = withPlugins([
	withBundleAnalyzer,
	withMDX,
	withTranspileModules
], config);
