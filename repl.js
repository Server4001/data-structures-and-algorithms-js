/**
 * REPL for project.
 * Usage: node repl.js
 */

'use strict';

let path = require('path');
let fs = require('fs');
let repl = require('repl');

// let whatever = require('./some/file');

let replServer = repl.start({
    prompt: 'DS > '
});

// replServer.context.whatever = whatever;
replServer.context.path = path;
replServer.context.fs = fs;
