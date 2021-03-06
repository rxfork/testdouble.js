require('mocha-given/browser/mocha-given')
mocha.setup('mocha-given')
global.NODE_JS = false

global.td = require('../src/testdouble')
require('./general-helper')

// Require all the tests so they're included in the browserify build:
require('./src/**/*.js', {mode: 'expand'})
require('./src/**/*.coffee', {mode: 'expand'})
