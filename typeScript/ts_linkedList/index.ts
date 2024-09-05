
type linkedItem = {
    value: string;
    id: number;
    previous: number | null;
};



class LinkedList {
     itemsArray: linkedItem[] = [];
     
// Add root element using constuctor

    constructor( myValue: string, myId: number) {
        this.itemsArray.push({ value:myValue, id:myId, previous : null});
    }


// Add element for Array

    addElement(myValue: string, myId: number,  myPreviousId:number){

       this.itemsArray.push({ value:myValue, id:myId, previous:myPreviousId})

    }


// Get Link for values

    getLink(myValue:string):string{

        let linkPath: string[]= [];
        let currentItem = this.itemsArray.find(item => item.value === myValue);

    if(!currentItem){
      return `Item with value "${myValue}" not found`
    }

      while(currentItem ){

        linkPath.push(currentItem.value);
        currentItem = this.itemsArray.find(item => item.id === currentItem?.previous);
        
      }
 
      return linkPath.reverse().join(" ---> ");  
    }

    displayList(){
        console.log(this.itemsArray);
    }

}

let myLinkedList = new LinkedList("Lakmali", 1);
myLinkedList.addElement("Methmini", 101,1);
myLinkedList.addElement("Tharush", 290, 101);
myLinkedList.displayList();


console.log(myLinkedList.getLink("Lakmali"));
console.log(myLinkedList.getLink("Methmini"));
console.log(myLinkedList.getLink("Tharush"));






