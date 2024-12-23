
// import * as crypto from 'crypto';



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
 nameArray:string[]=[]



 enque(elmnt:string){
  this.nameArray.push(elmnt);
 }

 deque(){
  return this.nameArray.shift();
 }

 displayEmployee(){
  return this.nameArray
 }

}

// const queue = new Queue();

// queue.enque("Amali")
// queue.enque("Nimali")
// queue.enque("Sumali")
// queue.enque("Kamali")

// console.log("After enque : ", queue.displayEmployee());
// console.log("Dequed", queue.deque());
// console.log("After dequed : ", queue.displayEmployee());

import * as crypto from 'crypto';
interface Users{
  userName:string;
  password:string| undefined;
}


class LogInDetails{

  // Array Object for store user details.
  private users :Users[] =[]
  private hashMethod: string;

  constructor(hashMethod:string){
    this.hashMethod = hashMethod;
  }
  
// Convert password string into a hash 
private convertToHash(password:string){

  switch(this.hashMethod){
    case 'regular':
      return this.regularHash(password);

    case 'XOR':
      return this.xorHash(password);

    case 'sha-256':
      return this.sha256Hash(password);

    case 'sha1':
      return this.sha1Hash(password);

    // case 'hex':
    //   return this.hexHash(password);
  }

}


// Reguler Hash Method
private regularHash(password:string){
  
  let hash = 0;

  for(let i =0; i < password.length; i++){
    hash = (hash << 5) - hash + password.charCodeAt(i);
   
  }
  
  return hash.toString()
}


// XOR Hash Method
private xorHash(password:string){
  let hash = 0;
  for(let i=0; i<password.length; i++){
    hash ^= password.charCodeAt(i)
  }
  return hash.toString();
}


// sha-256 Hash Method
private sha256Hash(password:string){

  const hash = crypto.createHash('sha256');

  hash.update(password);

  return hash.digest('hex');
}

// Sha1 Hash Method
private sha1Hash(password:string){

  const hash = crypto.createHash('sha1');
  hash.update(password);
  return hash.digest('hex')
}


// hex Hash Method
// private hexHash(password:string){
//   const hash = crypto.getHashes();
// }


//  Create a new user
  createUser(userName:string, password:string){

    const hashedPassword = this.convertToHash(password);
    this.users.push({userName, password: hashedPassword});
    console.log(`Stored user detail for ${userName}`);

  }

// login a user by cheking user name and password
  login(user:string, pass:string){

    const foundUser = this.users.find((u) => u.userName === user);

    if(!foundUser){
      console.log( ` Sorry! we can't found with the user name : ${user}
        Check your user name.`);
      return;
    }


    const hashedPassword = this.convertToHash(pass);

    

    if(foundUser && foundUser.password === hashedPassword){
      console.log(` Congratulations ${user} Your Login Successful!`);
      
    }else{
      console.log(` Sorry! ${user} Your Login Is Failed.`)
    }
  }
}


// const loginSystem = new LogInDetails('regular');
// loginSystem.createUser("Lakmali", "Lakmali@12345");
// loginSystem.createUser("Methmini", "Methmini@12345");
// loginSystem.createUser("Tharush6699", "Taru@12345");


// loginSystem.login("Lakmali", "Lakmali@12345")
// loginSystem.login("Lakmali", "Lakali@12345")
// loginSystem.login("methmini", "Methmini@12345")
// loginSystem.login("Tharush", "Taru@12345")


