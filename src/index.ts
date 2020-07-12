import {NumbersCollection} from './NumbersCollection';
import {StringsCollection} from './StringsCollection';
import {LinkedListCollection} from './LinkedListCollection';
import {Sorter} from './sorter';

// bubble sorting an arrays of numbers
const firstNumbersCollection = new NumbersCollection([6,13,-4, 8, -8]);
const SorterClass = new Sorter(firstNumbersCollection);
SorterClass.sort();
console.log(firstNumbersCollection.data);

//bubble sorting a  characters in string 
const firstStringsCollection = new StringsCollection('hammed');
const SorterString = new Sorter(firstStringsCollection);
SorterString.sort();
console.log(firstStringsCollection.collection);

//bubble sorting numbers  in a linked list
const firstLinkedListCollection = new LinkedListCollection();
firstLinkedListCollection.addNode(4);
firstLinkedListCollection.addNode(2);
firstLinkedListCollection.addNode(-8);
firstLinkedListCollection.addNode(9);
firstLinkedListCollection.addNode(-3);

 
const sorterLinkedListCollection = new Sorter (firstLinkedListCollection);
sorterLinkedListCollection.sort();
firstLinkedListCollection.print(); 