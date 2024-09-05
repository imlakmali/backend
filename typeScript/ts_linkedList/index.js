class LinkedList {
    // Add root element
    constructor(myValue, myId) {
        this.itemsArray = [];
        this.itemsArray.push({ value: myValue, id: myId, previous: null });
    }
    // Add element
    addElement(myValue, myId, myPreviousId) {
        this.itemsArray.push({ value: myValue, id: myId, previous: myPreviousId });
    }
    // Get Link for values
    getLink(myValue) {
        let linkPath = [];
        let currentItem = this.itemsArray.find(item => item.value === myValue);
        if (!currentItem) {
            return `Item with value "${myValue}" not found`;
        }
        while (currentItem) {
            linkPath.push(currentItem.value);
            currentItem = this.itemsArray.find(item => item.id === (currentItem === null || currentItem === void 0 ? void 0 : currentItem.previous));
        }
        return linkPath.reverse().join(" ---> ");
    }
    displayList() {
        console.log(this.itemsArray);
    }
}
let myLinkedList = new LinkedList("Lakmali", 1);
myLinkedList.addElement("Methmini", 101, 1);
myLinkedList.addElement("Tharush", 290, 101);
myLinkedList.displayList();
console.log(myLinkedList.getLink("Lakmali"));
console.log(myLinkedList.getLink("Methmini"));
console.log(myLinkedList.getLink("Tharush"));
