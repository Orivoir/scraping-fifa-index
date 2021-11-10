/**
 * this file exists for solve order dependencies between test files
 * this file should be execute with > mocha ./test/index.test.js
 */
require('jsdom-global')();
require('./create-player-list.test');
require('./extract-player-list-item.test');