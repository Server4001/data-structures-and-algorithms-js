/**
 * REPL for project.
 * Usage: node repl.js
 */

'use strict';

let path = require('path');
let fs = require('fs');
let repl = require('repl');
let List = require('./DataStructures/List');

let replServer = repl.start({
    prompt: 'DS > '
});

replServer.context.path = path;
replServer.context.fs = fs;
replServer.context.List = List;

let l = new List();
l.append(1).append(2).append(3);
replServer.context.l = l;
