
type linkedItem = {
    id: number;
    value: string;
    previous: number | null;
};

class LinkedList {
     itemsArray: linkedItem[] = [];


    constructor( myId: number, myValue: string, myPrevious:number) {
        this.itemsArray.push({id:myId, value:myValue, previous:myPrevious });
    }


    addElement(myId: number, myValue: string, myPrevious:number){
       this.itemsArray.push({id:myId, value:myValue, previous:myPrevious })
    }

    getElement(myId: number){
        return this.itemsArray[myId-1];
    }

}

let myLinkedList = new LinkedList(1,"Lak", 0);
myLinkedList.addElement(2, "kamal" , 1);
myLinkedList.addElement(3, "mal" , 2);

console.log(myLinkedList.getElement(1))
