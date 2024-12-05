
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./after.cjs.production.min.js')
} else {
  module.exports = require('./after.cjs.development.js')
}
