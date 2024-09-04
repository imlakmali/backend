var LinkedList = /** @class */ (function () {
    function LinkedList(myValue, myId) {
        this.itemsArray = [];
        this.itemsArray.push({ value: myValue, id: myId, previous: null });
    }
    LinkedList.prototype.addElement = function (myValue, myId, myPrevious) {
        this.itemsArray.push({ value: myValue, id: myId, previous: myPrevious });
    };
    LinkedList.prototype.getLink = function () {
        var linkPath = [];
        var currentItemId = this.itemsArray[0].id;
        while (currentItemId !== null) {
            for (var i = 0; i < this.itemsArray.length; i++) {
                if (this.itemsArray[i].id === currentItemId) {
                    linkPath.push(this.itemsArray[i].value);
                    currentItemId = this.itemsArray[i].previous;
                }
            }
        }
        return linkPath.join("--->");
    };
    LinkedList.prototype.displayList = function () {
        console.log(this.itemsArray);
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList("Lakmali", 1);
myLinkedList.addElement("Methmini", 101, 1);
myLinkedList.addElement("Tharush", 290, 101);
// myLinkedList.displayList();
console.log(myLinkedList.getLink());
