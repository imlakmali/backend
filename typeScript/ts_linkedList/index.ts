
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
       this.itemsArray.push({ value:myValue, id:myId, previous:myPrevious })
    }

    getLink(){
        let linkPath: string[]= [];
        let currentItemId: number|null = this.itemsArray[0].id;
        
        while(currentItemId !== null){

            for(let i =0; i< this.itemsArray.length; i++){

                if(this.itemsArray[i].id === currentItemId){

                    linkPath.push(this.itemsArray[i].value);

                    currentItemId = this.itemsArray[i].previous;

                   
                }
            }
        }
        return linkPath.join("--->")
    }

    displayList(){
        console.log(this.itemsArray);
    }

}

let myLinkedList = new LinkedList("Lakmali", 1);
myLinkedList.addElement("Methmini", 101,1);
myLinkedList.addElement("Tharush", 290, 101);
// myLinkedList.displayList();

console.log(myLinkedList.getLink());

