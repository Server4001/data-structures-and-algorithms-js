'use strict';

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push() {

    }

    pop() {

    }

    peek() {

    }

    empty() {
        return this.dataStore.length === 0;
    }

    clear() {
        this.dataStore = [];
        this.top = 0;
    }
}

module.exports = Stack;
