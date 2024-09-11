
(About stacks data structure)
1st step-----
created class Stack and created push and pop method,
In pop method I didn't use array.pop(), I used splice method

2nd step---
created forcePop method and I did this,
```  forcePop(num: number){
    const item = this.numberArray.splice(num, this.numberArray.length-num)
    console.log(item)
  }
  ```


After done those part
```class Stack{
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

  forcePop(num: number){
    const item = this.numberArray.splice(num, this.numberArray.length-num)
    console.log(item)
  }

  displayNumberArray(){
    return this.numberArray
  }
}

let stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(7);
stack.push(3);
stack.push(9);
stack.push(1);
console.log(stack.displayNumberArray())
stack.forcePop(3);
```

2024.09.11

3rd Step---
Task: Make the ForcePop() function accept a 1-based (not 0 based)  value.