
// type linkedItem = {
//     value: string;
//     id: number;
//     previous: number | null;
// };

// class LinkedList {
//      itemsArray: linkedItem[] = [];
     

//     constructor( myValue: string, myId: number) {
//         this.itemsArray.push({ value:myValue, id:myId, previous : null});
//     }


//     addElement(myValue: string, myId: number,  myPrevious:number){
//        this.itemsArray.push({ value:myValue, id:myId, previous:myPrevious })
//     }

//     getLink(myValue:string){

//         let linkPath: string[]= [];
//         let currentItem = this.itemsArray.find(item =>{
//             item.value === startName 
//     })
        
//         while(currentItemId !== null){

//             for(let i =0; i< this.itemsArray.length; i++){

//                 if(this.itemsArray[i].id === currentItemId){

//                     linkPath.push(this.itemsArray[i].value);

//                     currentItemId = this.itemsArray[i].previous;
                    
//                     break;
                   
//                 }
//             }
//         }
//         return linkPath.join("--->")
//     }

//     displayList(){
//         console.log(this.itemsArray);
//     }

// }

// let myLinkedList = new LinkedList("Lakmali", 1);
// myLinkedList.addElement("Methmini", 101,1);
// myLinkedList.addElement("Tharush", 290, 101);
// // myLinkedList.displayList();

// console.log(myLinkedList.getLink());


type linkedItem = {
    value: string;
    id: number;
    previous: number | null;
};

class Foo {
  x: linkedItem[] = [];


  test() {

    this.x.push({value: 'foo', id: 0, previous: 0})

    let myItem = this.x.find((x: linkedItem) => {
      return x.value === 'foo'
    })


    console.log(myItem)

  }
  
}


let foo = new Foo();

foo.test();