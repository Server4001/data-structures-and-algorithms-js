'use strict';

// The issue with using an array as the underlying data store is when setting a numeric key. EG:
// data[5] = 'five';
// [ , , , , , 'five' ]
// data.length
// 6
// Even setting the numeric key as a string does not fix this issue:
// data['12'] = 'twelve';
// [ , , , , , 'five', , , , , , , 'twelve' ]
// data.length
// 13

class Dictionary {
    constructor() {
        this._data = [];
    }

    add(key, value) {
        this._data[key] = value;

        return this;
    }

    find(key) {
        return this._data[key];
    }


}

module.exports = Dictionary;
