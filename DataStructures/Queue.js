'use strict';

class Queue {
    constructor() {
        this.dataStore = [];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    dequeue() {
        return this.dataStore.shift();
    }

    empty() {
        return (this.dataStore.length === 0);
    }

    enqueue(element) {
        this.dataStore.push(element);

        return this;
    }

    front() {
        return this.dataStore[0];
    }

    toString() {
        return this.dataStore.reduce((accumulator, value) => {
            return accumulator + value + "\n"
        }, '');
    }
}

module.exports = Queue;
