'use strict';

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize++] = element;

        return this;
    }

    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;

        return this;
    }

    contains(element) {
        return (this.find(element) !== -1);
    }

    currPos() {
        return this.pos;
    }

    end() {
        this.pos = this.listSize - 1;

        return this;
    }

    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }

        return -1;
    }

    front() {
        this.pos = 0;

        return this;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

    insert(element, after) {
        const index = this.find(after);

        if (index < 0) {
            return false;
        }

        this.dataStore.splice(index + 1, 0, element);
        ++this.listSize;

        return true;
    }

    length() {
        return this.listSize;
    }

    moveTo(position) {
        if (position >= 0 && position < this.listSize) {
            this.pos = position;

            return true;
        }

        return false;
    }

    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }

        return this;
    }

    prev() {
        if (this.pos > 0) {
            --this.pos;
        }

        return this;
    }

    remove(element) {
        const index = this.find(element);

        if (index < 0) {
            return false;
        }

        this.dataStore.splice(index, 1);
        --this.listSize;

        return true;
    }

    toString() {
        return this.dataStore.join();
    }
}

module.exports = List;
