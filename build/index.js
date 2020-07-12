"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var StringsCollection_1 = require("./StringsCollection");
var LinkedListCollection_1 = require("./LinkedListCollection");
var sorter_1 = require("./sorter");
// bubble sorting an arrays of numbers
var firstNumbersCollection = new NumbersCollection_1.NumbersCollection([6, 13, -4, 8, -8]);
var SorterClass = new sorter_1.Sorter(firstNumbersCollection);
SorterClass.sort();
console.log(firstNumbersCollection.data);
//bubble sorting a  characters in string 
var firstStringsCollection = new StringsCollection_1.StringsCollection('hammed');
var SorterString = new sorter_1.Sorter(firstStringsCollection);
SorterString.sort();
console.log(firstStringsCollection.collection);
//bubble sorting numbers  in a linked list
var firstLinkedListCollection = new LinkedListCollection_1.LinkedListCollection();
firstLinkedListCollection.addNode(4);
firstLinkedListCollection.addNode(2);
firstLinkedListCollection.addNode(-8);
firstLinkedListCollection.addNode(9);
firstLinkedListCollection.addNode(-3);
var sorterLinkedListCollection = new sorter_1.Sorter(firstLinkedListCollection);
sorterLinkedListCollection.sort();
firstLinkedListCollection.print();
