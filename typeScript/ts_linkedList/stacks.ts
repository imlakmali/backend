class Stack {
    itemsArray: any = [];

    constructor() {
        this.itemsArray = [];
        
    }

    
    push(item:any) {
        this.itemsArray.push(item);
        console.log(`Pushed: ${item}`);
        
    }


    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        const item = this.itemsArray.pop();
        console.log(`Popped: ${item}`);
        return item;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        return this.itemsArray[this.itemsArray.length-1]

    }

    isEmpty():boolean{
       return this.itemsArray.length === 0; 
    }

    displayArray(){
        console.log(`Current items in stack: ${this.itemsArray}`);
        return;
    }
    

}

let stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(4);
stack.push(8);
console.log(stack.peek())
stack.displayArray()
stack.pop();
stack.displayArray()



    

