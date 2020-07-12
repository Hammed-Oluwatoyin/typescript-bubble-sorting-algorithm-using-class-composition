export class StringsCollection{

    constructor(public collection: string){
    
    }

    get length(): number{
       return  this.collection.length;
    }

    compare(leftIndex: number , rightIndex: number):boolean {
           
           return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    }

    swap(leftIndex: number , rightIndex: number): void {
            const characters = this.collection.split('');
            const leftHandValue=characters[leftIndex];
            characters[leftIndex] = characters[rightIndex]
            characters[rightIndex] = leftHandValue;
            
            this.collection = characters.join('');
    }
} 