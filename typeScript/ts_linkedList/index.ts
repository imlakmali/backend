
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
      getLink(startValue:string , endValue: string):string{

        let linkPath: string[]= [];
        let startItem = this.itemsArray.find(item => item.value === startValue);
        let endtItem = this.itemsArray.find(item => item.value === endValue);

        if(!startItem){

          return `Item with value "${startValue}" not found`;

        }

        if(!endtItem){

          return `Item with value "${endValue}" not found`;

        }

        let currentItem:linkedItem | undefined = startItem;

          while(currentItem ){

            linkPath.push(currentItem.value);

            if(currentItem.id === endtItem.id){

              break;

            }
          
            currentItem = this.itemsArray.find(item => item.id === currentItem?.previous)
            
          }

          if(!currentItem){

            return `No link from "${startValue}" to "${endValue}"`;

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


console.log(myLinkedList.getLink("Lakmali", "Methmini"));
console.log(myLinkedList.getLink("Methmini", "Lakmali"));
console.log(myLinkedList.getLink("Tharush", "Methmini"));
console.log(myLinkedList.getLink("Lakmali", "Tharush"));
console.log(myLinkedList.getLink("Tharush", "Lakmali"));






