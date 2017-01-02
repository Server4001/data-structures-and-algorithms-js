'use strict';

class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    put(key, data) {
        const hashedKey = hash(key, this.table);
        this.table[hashedKey] = data;

        return this;
    }

    get(key) {
        return this.table[hash(key, this.table)];
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
