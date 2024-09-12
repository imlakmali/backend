
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

function getDetailsComponents(aminityCategoryType:string, aminityType:string , improvementType:string ='', constructionMethod:string ='', ){




      const results: any= {
        AmenityAreaMeasure: false,
        AmenityCount:false,
        AmenityAttachedToManufacturedHomeIndicator:false,
        SwimmingPoolFeatureType:false


    };
    let aminityTypeArray= [ ]

    if(aminityCategoryType === "WholeHome" && aminityType=== "Balcony"||aminityType===  "Porch"||aminityType=== "Portico"||aminityType===  "Deck"||aminityType=== "Patio"||aminityType=== "Gazebo"||aminityType=== "WoodStove"||aminityType===  "IndoorFireplace" ){
      results.AmenityAreaMeasure = true;
    }

    if((aminityCategoryType ==="WholeHome" && (aminityType === "WoodStove" || aminityType === "IndoorFireplace")) 
      || (aminityCategoryType === "WholeHome" && (aminityType !="WoodStove" && aminityType != "IndoorFireplace" ))){

      results.AmenityCount = true;
  }



 return results

}


console.log( getDetailsComponents("WholeHome","Balcony" ))












