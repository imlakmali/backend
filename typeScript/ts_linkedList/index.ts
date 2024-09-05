
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

    getLink(myValue:string){

        let linkPath: string[]= [];
        let currentItem = this.itemsArray.find(item =>{
            item.value === myValue
    })

    if(!currentItem){
      return `Item with value "${myValue}" not found`
    }

      let currentItemId = currentItem?.id;

      while(currentItemId !== null){

        if(!currentItem){
          return `Item with value "${myValue}" not found`
        }
        
        linkPath.push(currentItem.value);

        currentItem = this.itemsArray.find(item =>{
          item.id = currentItem?.previous
        });
        currentItemId = currentItem ? currentItem.id : null;
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

console.log(myLinkedList.getLink("lakmali"));






