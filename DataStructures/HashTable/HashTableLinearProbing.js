'use strict';

// Uses linear probing for collision resolution. Also known as open-addressing hashing.

const hash = require('./HashFunction');

class HashTableLinearProbing {
    constructor() {
        this.table = new Array(137);
        this.values = new Array(137);
    }

    put(key, value) {
        let hashedKey = hash(key, this.table);

        while (this.table[hashedKey] !== undefined) {
            hashedKey++;
        }

        this.table[hashedKey] = key;
        this.values[hashedKey] = value;

        return this;
    }

    get(key) {
        let hashedKey = hash(key, this.table);

        while (this.table[hashedKey] !== undefined) {
            if (this.table[hashedKey] === key) {
                return this.values[hashedKey];
            }

            hashedKey++;
        }
    }

    toString() {
        let str = '';

        for (let key in this.table) {
            if (this.table[key] !== undefined) {
                str += 'key: ' + key + '. value: ' + this.values[key] + "\n";
            }
        }

        return str;
    }
}

module.exports = HashTableLinearProbing;
