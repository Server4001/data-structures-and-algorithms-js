'use strict';

// Uses separate chaining for collision resolution.

class HashTable {
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

        for (let key in this.table) {
            if (this.table[key] !== undefined) {
                str += 'key: ' + key + '. value: ' + this.table[key] + "\n";
            }
        }

        return str;
    }

    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = [];
        }
    }
}

const hash = function(value, table) {
    const valueString = value.toString();
    const H = 37;
    let total = 0;

    for (let i = 0; i < valueString.length; i++) {
        total += H * total + valueString.charCodeAt(i);
    }

    total %= table.length;

    return parseInt(total);
};

module.exports = HashTable;
