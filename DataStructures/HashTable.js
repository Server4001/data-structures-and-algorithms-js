'use strict';

class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    put(data) {
        const key = hash(data, this.table);
        this.table[key] = data;

        return this;
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
    const H = 37;
    let total = 0;

    for (let i = 0; i < value.length; i++) {
        total += H * total + value.charCodeAt(i);
    }

    total %= table.length;

    return parseInt(total);
};

module.exports = HashTable;
