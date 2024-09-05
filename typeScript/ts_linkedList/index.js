class LinkedList {
    constructor(myValue, myId) {
        this.itemsArray = [];
        this.itemsArray.push({ value: myValue, id: myId, previous: null });
    }
    addElement(myValue, myId, myPrevious) {
        this.itemsArray.push({ value: myValue, id: myId, previous: myPrevious });
    }
    getLink(myValue) {
        let linkPath = [];
        let currentItem = this.itemsArray.find(item => item.value === myValue);
        if (!currentItem) {
            return `Item with value "${myValue}" not found`;
        }
        while (currentItem) {
            linkPath.push(currentItem.value);
            currentItem = this.itemsArray.find(item => item.id === currentItem.previous);
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
console.log(myLinkedList.getLink("Lakmali")); // Output: "Lakmali ---> Methmini ---> Tharush"
