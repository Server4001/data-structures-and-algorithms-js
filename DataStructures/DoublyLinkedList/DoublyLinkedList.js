'use strict';

let Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    add(value) {
        let node = new Node(value);

        if (!this._head && !this._tail) {
            // This is the first node.
            this._head = node;
            this._tail = node;
        } else {
            // Link this node to the current tail, then reset the tail to this node.
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = this._tail.next;
        }

        this._length++;

        return this;
    }

    contains(value) {
        let node = this._head;

        while (node) {
            if (node.value === value) {
                return true;
            }

            node = node.next;
        }

        return false;
    }

    find(value) {
        if (!this._head) {
            return null;
        }

        let current = this._head;

        while (current.value !== value) {
            if (current.next === null) {
                // At the end of the list, and couldn't find the value.
                return null;
            }

            current = current.next;
        }

        return current;
    }

    head() {
        return this._head;
    }

    insertAfter(newValue, existingValue) {
        let node = this.find(existingValue);

        if (node === null) {
            return this.add(newValue);
        }

        let newNode = new Node(newValue);
        newNode.next = node.next;
        newNode.previous = node;

        if (node.next !== null) {
            node.next.previous = newNode;
        }

        node.next = newNode;
        this._length++;

        if (this._tail === node) {
            this._tail = newNode;
        }

        return this;
    }

    remove(value) {
        let node = this.find(value);

        if (node === null) {
            return false;
        }

        if (node.next !== null) {
            node.next.previous = node.previous;
        }
        if (node.previous !== null) {
            node.previous.next = node.next;
        }
        if (this._head === node) {
            this._head = node.next;
        }
        if (this._tail === node) {
            this._tail = node.previous;
        }

        this._length--;

        return true;
    }

    size() {
        return this._length;
    }

    tail() {
        return this._tail;
    }

    toString() {
        if (!this._head) {
            return '';
        }

        let current = this._head;
        let str = current.value + "\n";

        while (current.next !== null) {
            current = current.next;
            str += current.value + "\n";
        }

        return str;
    }

    toStringBackwards() {
        if (!this._tail) {
            return '';
        }

        let current = this._tail;
        let str = current.value + "\n";

        while (current.previous !== null) {
            current = current.previous;
            str += current.value + "\n";
        }

        return str;
    }
}

module.exports = DoublyLinkedList;
