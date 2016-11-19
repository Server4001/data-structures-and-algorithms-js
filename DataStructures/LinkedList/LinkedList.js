'use strict';

let Node = require('./Node');

class LinkedList {
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

    head() {
        return this._head;
    }

    remove(value) {
        if (!this.contains(value)) {
            return false;
        }

        // Begin at the start of the list.
        let current = this._head;
        let previous = this._head;

        while (current) {
            if (current.value === value) {
                if (this._head === current) {
                    // Reset the head node to the next one.
                    this._head = this._head.next;
                    this._length--;

                    return true;
                }

                if (this._tail === current) {
                    // Reset the tail node to the previous one.
                    this._tail = previous;
                }

                // Reset the previous node's pointer (currently pointing to this node) to the next node.
                previous.next = current.next;
                this._length--;

                return true;
            }

            // "Increment" previous and current to their next nodes.
            previous = current;
            current = current.next;
        }
    }

    size() {
        return this._length;
    }

    tail() {
        return this.tail;
    }
}

module.exports = LinkedList;
