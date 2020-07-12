"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedListCollection = /** @class */ (function () {
    function LinkedListCollection() {
        this.head = null;
    }
    LinkedListCollection.prototype.addNode = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            var counter = 0;
            if (!this.head) {
                return counter;
            }
            var node = this.head;
            counter = 1;
            while (node.next) {
                counter++;
                node = node.next;
            }
            return counter;
        },
        enumerable: true,
        configurable: true
    });
    LinkedListCollection.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("the value u looking for is not available");
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index your are looking of is greater than the size");
    };
    LinkedListCollection.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("the list is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        if (this.compare(leftIndex, rightIndex)) {
            var leftNode = this.at(leftIndex);
            var rightNode = this.at(rightIndex);
            var leftHandValue = rightNode.data;
            rightNode.data = leftNode.data;
            leftNode.data = leftHandValue;
        }
    };
    LinkedListCollection.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedListCollection;
}());
exports.LinkedListCollection = LinkedListCollection;
