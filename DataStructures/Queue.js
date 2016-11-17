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
        let str = '';
        for (let i = 0; i < this.dataStore.length; i++) {
            str += this.dataStore[i] + "\n";
        }

        return str;
    }
}

module.exports = Queue;
