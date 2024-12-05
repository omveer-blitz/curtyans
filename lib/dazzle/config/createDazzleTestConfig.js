const webpack = require('webpack');
const createConfig = require('./createConfigAsync');
const loadDazzleConfig = require('./loadDazzleConfig');

module.exports = (
  target,
  env,
  dazzleConfig,
  clientOnly = false,
  packageJsonIn
) => {
  return new Promise(async resolve => {
    const {
      dazzle,
      dazzleOptions,
      webpackObject,
      plugins,
      paths,
    } = await loadDazzleConfig(webpack, dazzleConfig, packageJsonIn);
    createConfig(
      target,
      env,
      dazzle,
      webpackObject,
      clientOnly,
      paths,
      plugins,
      dazzleOptions
    ).then(config => resolve(config));
  });
};
