var LinkedList = /** @class */ (function () {
    function LinkedList(myId, myValue, myPrevious) {
        this.itemsArray = [];
        this.itemsArray.push({ id: myId, value: myValue, previous: myPrevious });
    }
    LinkedList.prototype.addElement = function (myId, myValue, myPrevious) {
        this.itemsArray.push({ id: myId, value: myValue, previous: myPrevious });
    };
    LinkedList.prototype.getElement = function (myId) {
        return this.itemsArray[myId - 1];
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList(1, "Lak", 0);
myLinkedList.addElement(2, "kamal", 1);
myLinkedList.addElement(3, "mal", 2);
console.log(myLinkedList.getElement(1));
