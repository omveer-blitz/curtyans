#! /usr/bin/env node
'use strict';

const devServer = require('webpack-dev-server');
const devServerMajorVersion = require('dazzle-dev-utils/devServerMajor');

class dazzleDevServer extends devServer {
  constructor(compiler, options = {}, _log) {
    const verbose = options.verbose || false;
    delete options['verbose'];
    // Migration guide: https://github.com/webpack/webpack-dev-server/blob/master/migration-v5.md
    if(devServerMajorVersion === 5) {
      super(options, compiler, _log);
    } else {
      super(compiler, options, _log);
    }
    this.verbose = verbose;
  }

  showStatus() {
    if (this.verbose) {
      super.showStatus();
    }
  }
}

module.exports = dazzleDevServer;
