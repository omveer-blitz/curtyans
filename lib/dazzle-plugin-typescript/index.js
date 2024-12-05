'use strict';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { babelLoaderFinder } = require('./helpers');

const defaultOptions = {
  compilerType: 'tsloader',  // 'babel'
  tsLoader: {
    transpileOnly: true,
    experimentalWatchApi: true,
  },
  forkTsChecker: {},
};

module.exports = {
  modifyWebpackConfig(opts) {
    const config = Object.assign({}, opts.webpackConfig);

    const options = Object.assign(
      {},
      defaultOptions,
      opts.options.pluginOptions
    );

    // Check which compiler to use
    const useBabel = options.compilerType === 'babel';
    const useTsLoader = !useBabel;

    config.resolve.extensions = [...config.resolve.extensions, '.ts', '.tsx'];

    // Safely locate Babel-Loader in Dazzle's webpack internals
    const babelLoader = config.module.rules.find(babelLoaderFinder);
    if (!babelLoader) {
      throw new Error(
        `'babel-loader' was erased from config, we need it to define 'include' option for 'ts-loader'`
      );
    }

    // don't allow babel-loader to transpile typescript if ts-loader is to be used
    if (useTsLoader) {
      babelLoader.exclude = [/\.ts$/, /\.tsx$/];
    }

    // Get the correct `include` option, since that hasn't changed.
    // This tells Razzle which directories to transform.
    const { include } = babelLoader;

    // Configure ts-loader if compiler type chosen is tsLoader
    if (useTsLoader) {
      const tsLoader = {
        include,
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: Object.assign({}, defaultOptions.tsLoader, options.tsLoader),
          },
        ],
      };
      tsLoader.use = [...babelLoader.use, ...tsLoader.use];
      config.module.rules = config.module.rules.filter(
        rule => !babelLoaderFinder(rule)
      );
      config.module.rules.push(tsLoader);
    } else {
      // do nothing!
    }

    // Do typechecking in a separate process,
    // We can run it only in client builds.
    if (opts.env.target === 'web') {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin(
          Object.assign({}, defaultOptions.forkTsChecker, options.forkTsChecker)
        )
      );
      if (opts.env.dev) {
        // As suggested by Microsoft's Outlook team, these optimizations
        // crank up Webpack x TypeScript perf.
        // @see https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15
        config.output.pathinfo = false;
        config.optimization = {
          removeAvailableModules: false,
          removeEmptyChunks: false,
          splitChunks: false,
        };
      }
    }

    return config;
  },
};
