'use strict';

// Uses separate chaining for collision resolution.

const hash = require('./HashFunction');

class HashTableSeparateChaining {
    constructor() {
        this.table = new Array(137);
        this.buildChains();
    }

    put(key, value) {
        const hashedKey = hash(key, this.table);
        const nextIndex = this.table[hashedKey].length;

        this.table[hashedKey][nextIndex] = key;
        this.table[hashedKey][nextIndex + 1] = value;

        return this;
    }

    get(key) {
        const bucket = this.table[hash(key, this.table)];

        for (let i = 0; i < bucket.length; i += 2) {
            if (bucket[i] === key) {
                return bucket[i + 1];
            }
        }
    }

    toString() {
        let str = '';

        this.table.forEach((bucket) => {
            for (let j = 0; j < bucket.length; j += 2) {
                str += 'Key: ' + bucket[j] + '. Value: ' + bucket[j + 1] + "\n";
            }
        });

        return str;
    }

    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = [];
        }
    }
}

module.exports = HashTableSeparateChaining;
