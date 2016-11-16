'use strict';

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    clear() {
        this.top = 0;

        return this;
    }

    length() {
        return this.top;
    }

    push(element) {
        this.dataStore[this.top++] = element;

        return this;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }
}

module.exports = Stack;
