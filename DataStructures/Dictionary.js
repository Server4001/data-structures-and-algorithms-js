'use strict';

class Dictionary {
    constructor() {
        this._data = {};
        this._length = 0;
    }

    add(key, value) {
        this._data[key] = value;
        this._length++;

        return this;
    }

    clear() {
        this._data = {};
        this._length = 0;

        return this;
    }

    find(key) {
        return this._data[key];
    }

    length() {
        return this._length;
    }

    remove(key) {
        if (this._data[key] !== undefined) {
            delete this._data[key];
            this._length--;
        }

        return this;
    }

    toString() {
        let str = '';

        for (let key in this._data) {
            if (this._data.hasOwnProperty(key)) {
                str += 'key: ' + key + '. value: ' + this._data[key] + "\n";
            }
        }

        return str;
    }

    toStringSorted() {
        let str = '';
        let keys = Object.keys(this._data);

        for (let key of keys) {
            str += 'key: ' + key + '. value: ' + this._data[key] + "\n";
        }

        return str;
    }
}

module.exports = Dictionary;
