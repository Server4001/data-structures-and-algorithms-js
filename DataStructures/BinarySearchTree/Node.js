'use strict';

class Node {
    constructor(data, left, right) {
        // left and right are links to child nodes.
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}

module.exports = Node;
