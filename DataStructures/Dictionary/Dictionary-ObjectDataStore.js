class DictionaryObjectStore {
    constructor() {
        this._data = {};
        this._length = 0;
    }

    add(key, value) {
        this._data[key] = value;
        this._length++;

        return this;
    }

    find(key) {
        return this._data[key];
    }

    length() {
        return this._length;
    }
}

module.exports = DictionaryObjectStore;
