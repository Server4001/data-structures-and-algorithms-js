'use strict';

let Node = require('./Node');

class BinarySearchTree {
    constructor() {
        // The root node.
        this.root = null;
    }

    add(data) {
        let newNode = new Node(data, null, null);

        if (this.root === null) {
            this.root = newNode;

            return;
        }

        let parentNode;
        let currentNode = this.root;

        while (true) {
            parentNode = currentNode;

            if (data < currentNode.data) {
                currentNode = currentNode.left;

                if (currentNode === null) {
                    parentNode.left = newNode;

                    break;
                }

                continue;
            }

            currentNode = currentNode.right;

            if (currentNode === null) {
                parentNode.right = newNode;

                break;
            }
        }
    }

    // An in-order traversal visits all of the nodes of a BST in ascending order of the node key values.
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    // A pre-order traversal visits the root node first,
    // followed by the nodes in the sub‐trees under the left child of the root node,
    // followed by the nodes in the subtrees under the right child of the root node.
    preOrder(node) {
        if (node !== null) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // A post-order traversal visits all of the child nodes of the left subtree up to the root node,
    // and then visits all of the child nodes of the right subtree up to the root node.
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }

    min(node = this.root) {
        if (node === null) {
            return null;
        }

        let currentNode = node;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
    }

    max(node = this.root) {
        if (node === null) {
            return null;
        }

        let currentNode = node;

        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }

        return currentNode.data;
    }

    exists(data) {
        let currentNode = this.root;

        while (true) {
            if (currentNode === null) {
                return null;
            }
            if (data === currentNode.data) {
                return currentNode;
            }
            if (data < currentNode.data) {
                currentNode = currentNode.left;

                continue;
            }

            currentNode = currentNode.right;
        }
    }

    remove(data) {
        this.root = this._removeNode(this.root, data);
    }

    printByLevel() {
        if (this.root === null) {
            console.log('No root node.');

            return;
        }

        const newline = new Node("\n");
        let queue = [this.root, newline];
        let str = '';

        while (queue.length) {
            const node = queue.shift();
            str += node.data.toString() + (node.data !== "\n" ? ' ' : '');

            if (node === newline && queue.length) {
                queue.push(newline);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        console.log(str.trim());
    }

    _removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            // This is the node we want to remove.

            if (node.left === null && node.right === null) {
                // Node has no children.
                return null;
            }
            if (node.left === null) {
                // Node has no left child.
                return node.right;
            }
            if (node.right === null) {
                // Node has no right child.
                return node.left;
            }

            // Node has both children.
            node.data = this.min(node.right);
            node.right = this._removeNode(node.right, node.data);

            return node;
        }
        if (data < node.data) {
            node.left = this._removeNode(node.left, data);

            return node;
        }

        // data > node.data
        node.right = this._removeNode(node.right, data);

        return node;
    }
}

module.exports = BinarySearchTree;
