var LinkedList = /** @class */ (function () {
    function LinkedList(myValue, myId) {
        this.itemsArray = [];
        this.itemsArray.push({ value: myValue, id: myId, previous: null });
    }
    LinkedList.prototype.addElement = function (myValue, myId, myPrevious) {
        this.itemsArray.push({ id: myId, value: myValue, previous: myPrevious });
    };
    // getElement(myId: number){
    //     return this.itemsArray[myId-1];
    // }
    LinkedList.prototype.displayList = function () {
        console.log(this.itemsArray);
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList("Lakmali", 1);
myLinkedList.addElement("Methmini", 101, 1);
myLinkedList.addElement("Tharush", 290, 101);
myLinkedList.displayList();
// console.log(myLinkedList.getElement(1));
