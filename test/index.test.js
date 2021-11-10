/**
 * this file exists for solve order dependencies between test files
 * this file should be execute with > mocha ./test/index.test.js
 */
require('jsdom-global')();

require('./parse-value.test');
require('./ui2camelcase.test');

require('./create-player-list.test');
require('./extract-player-list-item.test');

require('./create-player-item.test');
require('./get-player-core.test');


require('./extract-header-player-item.test');
require('./extract-teams-player-item.test');

require('./extract-player-skills/extract-player-ballskills.test');
require('./extract-player-skills/extract-player-shooting.test');
require('./extract-player-skills/extract-player-passing.test');
require('./extract-player-skills/extract-player-defence.test');
require('./extract-player-skills/extract-player-physical.test');
require('./extract-player-skills/extract-player-mental.test');
require('./extract-player-skills/extract-player-goalkeeper.test');

require('./extract-player-item.test');
