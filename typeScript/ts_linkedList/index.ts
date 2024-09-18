// Linked List data structure 
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
// let myLinkedList = new LinkedList("Lakmali", 1);
// myLinkedList.addElement("Methmini", 101,1);
// myLinkedList.addElement("Tharush", 290, 101);
// myLinkedList.displayList();


// console.log(myLinkedList.getLink("Lakmali", "Methmini"));
// console.log(myLinkedList.getLink("Methmini", "Lakmali"));
// console.log(myLinkedList.getLink("Tharush", "Methmini"));
// console.log(myLinkedList.getLink("Lakmali", "Tharush"));
// console.log(myLinkedList.getLink("Tharush", "Lakmali"));

// Stack data structure
class Stack{
  numberArray:any =[]

  constructor(){
    this.numberArray = []
  }

  push(element:any){

    this.numberArray.push(element)
    console.log(`Pushed : ${element}`);
  }

  pop() {

    const item = this.numberArray.splice(this.numberArray.length-1, 1);

    console.log(`Poped: ${item}`);
  }

  forcePop(index: number){
    let idx = index-1;

    const item = this.numberArray.splice(idx, this.numberArray.length-idx);
    console.log(`Poped Items: ${item}`);
  }

  displayNumberArray(){
    return this.numberArray
  }
}

// let stack = new Stack();
// stack.push(1);
// stack.push(5);
// stack.push(7);
// stack.push(3);
// stack.push(9);
// stack.push(23);
// stack.push(7);
// stack.push(10);
// stack.push(11);
// console.log(stack.displayNumberArray())
// stack.forcePop(7);
// console.log(stack.displayNumberArray())

// type Amenity = {
//   AmenityAreaMeasure: boolean,
//   AmenityCount:boolean,
//   AmenityAttachedToManufacturedHomeIndicator:boolean,
//   SwimmingPoolFeatureType:boolean
// }




// nighthawk-analytics  
function getDetailsComponents(aminityCategoryType:string, aminityType:string , improvementType:string , constructionMethod:string, outbuildingType:string  ){


      const results: any= {
        AmenityAreaMeasure: false,
        AmenityCount:false,
        AmenityAttachedToManufacturedHomeIndicator:false,
        SwimmingPoolFeatureType:false


    };
    

    if(aminityCategoryType === "WholeHome" && (aminityType=== "Balcony"||aminityType===  "Porch" ||aminityType=== "Portico" ||aminityType===  "Deck" ||aminityType=== "Patio"||aminityType=== "Gazebo"||aminityType=== "WoodStove"||aminityType===  "IndoorFireplace" )){
      results.AmenityAreaMeasure = true;
    }

    if((aminityCategoryType ==="WholeHome" && (aminityType === "WoodStove" || aminityType === "IndoorFireplace")) 
      || (aminityCategoryType === "WholeHome" && (aminityType !="WoodStove" && aminityType != "IndoorFireplace" ))){

      results.AmenityCount = true;
    };

    if((improvementType === "Dwelling" && constructionMethod ===  "Manufactured" && (aminityType=== "Porch" || aminityType=== "Portico" || aminityType=== "Deck"  ||   aminityType=== "Gazebo"  )) 
      || (improvementType === "Outbuilding" && outbuildingType ===  "ManufacturedHome"  && (aminityType === "Porch" || aminityType === "Portico" || aminityType === "Deck"||aminityType ===  "Gazebo" ) )){

          results.AmenityAttachedToManufacturedHomeIndicator = true;
      }
    
    if(aminityType === "IngroundPool" || aminityType === "IngroundSpa" ||aminityType ===  "Sauna"){
        results.SwimmingPoolFeatureType = true;
    }



 return results

}


// // Test 1: WholeHome with Balcony
// console.log("Test 1");
// console.log(getDetailsComponents("WholeHome", "Balcony", "", "", ""));


// // Test 2: WholeHome with WoodStove
// console.log("Test 2");
// console.log(getDetailsComponents("WholeHome", "WoodStove", "", "", ""));


// // Test 3: Dwelling with Manufactured method and Porch
// console.log("Test 3");
// console.log(getDetailsComponents("", "Porch", "Dwelling", "Manufactured", ""));


// // Test 4: Outbuilding with ManufacturedHome and Gazebo
// console.log("Test 4");
// console.log(getDetailsComponents("", "Gazebo", "Outbuilding", "", "ManufacturedHome"));


// // Test 5: Amenity with IngroundPool
// console.log("Test 5");
// console.log(getDetailsComponents("", "IngroundPool", "", "", ""));


// // Test 6: WholeHome with Patio
// console.log("Test 6");
// console.log(getDetailsComponents("WholeHome", "Patio", "", "", ""));


// // Test 7: Amenity with Sauna
//  console.log(getDetailsComponents("", "Sauna", "", "", ""));


// // Test 8: Invalid case with empty parameters
// console.log(getDetailsComponents("", "", "", "", ""));


// 


// Queues data structure
class Queue {
 employeeArray:string[]=[]



 enque(elmnt:string){
  this.employeeArray.push(elmnt);
 }

 deque(){
  return this.employeeArray.shift();
 }

 displayEmployee(){
  return this.employeeArray
 }

}

const queue = new Queue();

queue.enque("Amali")
queue.enque("Nimali")
queue.enque("Sumali")
queue.enque("Kamali")

console.log("After enque : ", queue.displayEmployee());
console.log("Dequed", queue.deque());
console.log("After dequed : ", queue.displayEmployee());






