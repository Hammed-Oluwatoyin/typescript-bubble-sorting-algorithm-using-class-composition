"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringsCollection = /** @class */ (function () {
    function StringsCollection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(StringsCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: true,
        configurable: true
    });
    StringsCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    };
    StringsCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.collection.split('');
        var leftHandValue = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHandValue;
        this.collection = characters.join('');
    };
    return StringsCollection;
}());
exports.StringsCollection = StringsCollection;
