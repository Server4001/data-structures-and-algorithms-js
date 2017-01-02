'use strict';

class Set {
    constructor() {
        this.data = [];
    }

    add(value) {
        if (!this.contains(value)) {
            this.data.push(value);

            return true;
        }

        return false;
    }

    contains(value) {
        return (this.data.indexOf(value) > -1);
    }

    difference(set) {
        const newSet = new Set();

        this.data.forEach((value) => {
            if (!set.contains(value)) {
                newSet.add(value);
            }
        });

        return newSet;
    }

    intersect(set) {
        const newSet = new Set();

        this.data.forEach((value) => {
            if (set.contains(value)) {
                newSet.add(value);
            }
        });

        return newSet;
    }

    remove(value) {
        const position = this.data.indexOf(value);

        if (position > -1) {
            this.data.splice(position, 1);

            return true;
        }

        return false;
    }

    size() {
        return this.data.length;
    }

    subset(set) {
        if (this.size() > set.size()) {
            return false;
        }

        for (let value of this.data) {
            if (!set.contains(value)) {
                return false;
            }
        }

        return true;
    }

    toString() {
        return this.data.toString();
    }

    union(set) {
        const newSet = new Set();

        this.data.forEach(value => newSet.add(value));

        set.data.forEach((value) => {
            if (!newSet.contains(value)) {
                newSet.add(value);
            }
        });

        return newSet;
    }
}

module.exports = Set;
