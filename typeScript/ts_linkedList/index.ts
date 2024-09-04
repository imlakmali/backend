
type linkedItem = {
    value: string;
    id: number;
    previous: number | null;
};

class LinkedList {
     itemsArray: linkedItem[] = [];


    constructor( myValue: string, myId: number) {
        this.itemsArray.push({ value:myValue, id:myId, previous : null});
    }


    addElement(myValue: string, myId: number,  myPrevious:number){
       this.itemsArray.push({id:myId, value:myValue, previous:myPrevious })
    }

    // getElement(myId: number){
    //     return this.itemsArray[myId-1];
    // }

    displayList(){
        console.log(this.itemsArray);
    }

}

let myLinkedList = new LinkedList("Lakmali", 1);
myLinkedList.addElement("Methmini", 101,1);
myLinkedList.addElement("Tharush", 290, 101);
myLinkedList.displayList();

// console.log(myLinkedList.getElement(1));

