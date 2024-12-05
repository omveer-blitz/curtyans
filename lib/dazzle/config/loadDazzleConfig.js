const fs = require('fs-extra');
const merge = require('deepmerge');
const clearConsole = require('react-dev-utils/clearConsole');
const logger = require('dazzle-dev-utils/logger');

const defaultPaths = require('./paths');
const defaultDazzleOptions = require('./defaultOptions');
const setupEnvironment = require('./env').setupEnvironment;
const loadPlugins = require('./loadPlugins');

const getModuleFormat = packageJson => {
  // See https://nodejs.org/api/packages.html#type for more info on "type"
  return packageJson.type || "commonjs";
};

module.exports = (webpackObject, dazzleConfig, packageJsonIn) => {
  return new Promise(async resolve => {
    let dazzle = dazzleConfig || {};
    let packageJson = packageJsonIn || {};
    let paths = Object.assign({}, defaultPaths);

    if (fs.existsSync(paths.appPackageJson)) {
      try {
        packageJson = require(paths.appPackageJson);
      } catch (e) {
        clearConsole();
        logger.error('Invalid package.json.', e);
        process.exit(1);
      }
    }

    // Check for dazzle.config.js file
    if (fs.existsSync(paths.appDazzleConfig)) {
      try {
        if (getModuleFormat(packageJson) === 'module') {
          dazzle = await import(paths.appDazzleConfig);
        }
        else {
          dazzle = require(paths.appDazzleConfig);
        }
      } catch (e) {
        clearConsole();
        logger.error('Invalid dazzle.config.js file.', e);
        process.exit(1);
      }
    }

    setupEnvironment(paths);

    let dazzleOptions = merge(defaultDazzleOptions, dazzle.options || {});

    if (packageJson.browserslist) {
      dazzleOptions.browserslist =
        dazzleOptions.browserslist || packageJson.browserslist;
    }

    const plugins = Array.isArray(dazzle.plugins)
      ? loadPlugins(dazzle.plugins, paths)
      : [];

    for (const [plugin, pluginOptions] of plugins) {
      // Check if plugin.modifyOptions is a function.
      // If it is, call it on the configs we created.
      if (plugin.modifyOptions) {
        dazzleOptions = await plugin.modifyOptions({
          options: {
            dazzleOptions,
            pluginOptions,
          },
          paths,
        });
      }
    }
    if (dazzle.modifyOptions) {
      // Check if dazzle.modifyOptions is a function.
      // If it is, call it on the configs we created.
      dazzleOptions = await dazzle.modifyOptions({
        options: {
          dazzleOptions,
        },
        paths,
      });
    }
    for (const [plugin, pluginOptions] of plugins) {
      // Check if plugin.modifyPaths is a function.
      // If it is, call it on the paths we created.
      if (plugin.modifyPaths) {
        paths = await plugin.modifyPaths({
          options: {
            dazzleOptions,
            pluginOptions,
          },
          paths,
        });
      }
    }
    if (dazzle.modifyPaths) {
      // Check if dazzle.modifyPaths is a function.
      // If it is, call it on the paths we created.
      paths = await dazzle.modifyPaths({
        options: {
          dazzleOptions,
        },
        paths,
      });
    }

    resolve({
      dazzle,
      dazzleOptions,
      webpackObject,
      plugins,
      paths,
      packageJson,
    });
  });
};
