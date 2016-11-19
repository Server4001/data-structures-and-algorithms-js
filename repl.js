/**
 * REPL for project.
 * Usage: node repl.js
 */

'use strict';

let path = require('path');
let fs = require('fs');
let repl = require('repl');
let List = require('./DataStructures/List');
let Stack = require('./DataStructures/Stack');
let Queue = require('./DataStructures/Queue');
let LinkedList = require('./DataStructures/LinkedList/LinkedList');

let replServer = repl.start({
    prompt: 'DS > '
});

replServer.context.path = path;
replServer.context.fs = fs;
replServer.context.List = List;
replServer.context.Stack = Stack;
replServer.context.Queue = Queue;
replServer.context.LinkedList = LinkedList;
replServer.context.baseConvert = require('./Functions/BaseConvert');
replServer.context.palindrome = require('./functions/Palindrome');

let l = new List();
l.append(1).append(2).append(3);
replServer.context.l = l;

let s = new Stack();
replServer.context.s = s;

let q = new Queue();
replServer.context.q = q;

let ll = new LinkedList();
ll.add(1).add(2).add(3);
replServer.context.ll = ll;
