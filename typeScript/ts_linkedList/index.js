"use strict";
// import * as crypto from 'crypto';
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    // Add root element using constuctor
    function LinkedList(myValue, myId) {
        this.itemsArray = [];
        this.itemsArray.push({ value: myValue, id: myId, previous: null });
    }
    // Add element for Array
    LinkedList.prototype.addElement = function (myValue, myId, myPreviousId) {
        this.itemsArray.push({ value: myValue, id: myId, previous: myPreviousId });
    };
    // Get Link for values
    LinkedList.prototype.getLink = function (startValue, endValue) {
        var linkPath = [];
        var startItem = this.itemsArray.find(function (item) { return item.value === startValue; });
        var endtItem = this.itemsArray.find(function (item) { return item.value === endValue; });
        if (!startItem) {
            return "Item with value \"".concat(startValue, "\" not found");
        }
        if (!endtItem) {
            return "Item with value \"".concat(endValue, "\" not found");
        }
        var currentItem = startItem;
        while (currentItem) {
            linkPath.push(currentItem.value);
            if (currentItem.id === endtItem.id) {
                break;
            }
            currentItem = this.itemsArray.find(function (item) { return item.id === (currentItem === null || currentItem === void 0 ? void 0 : currentItem.previous); });
        }
        if (!currentItem) {
            return "No link from \"".concat(startValue, "\" to \"").concat(endValue, "\"");
        }
        return linkPath.reverse().join(" ---> ");
    };
    LinkedList.prototype.displayList = function () {
        console.log(this.itemsArray);
    };
    return LinkedList;
}());
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
var Stack = /** @class */ (function () {
    function Stack() {
        this.numberArray = [];
        this.numberArray = [];
    }
    Stack.prototype.push = function (element) {
        this.numberArray.push(element);
        console.log("Pushed : ".concat(element));
    };
    Stack.prototype.pop = function () {
        var item = this.numberArray.splice(this.numberArray.length - 1, 1);
        console.log("Poped: ".concat(item));
    };
    Stack.prototype.forcePop = function (index) {
        var idx = index - 1;
        var item = this.numberArray.splice(idx, this.numberArray.length - idx);
        console.log("Poped Items: ".concat(item));
    };
    Stack.prototype.displayNumberArray = function () {
        return this.numberArray;
    };
    return Stack;
}());
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
function getDetailsComponents(aminityCategoryType, aminityType, improvementType, constructionMethod, outbuildingType) {
    var results = {
        AmenityAreaMeasure: false,
        AmenityCount: false,
        AmenityAttachedToManufacturedHomeIndicator: false,
        SwimmingPoolFeatureType: false
    };
    if (aminityCategoryType === "WholeHome" && (aminityType === "Balcony" || aminityType === "Porch" || aminityType === "Portico" || aminityType === "Deck" || aminityType === "Patio" || aminityType === "Gazebo" || aminityType === "WoodStove" || aminityType === "IndoorFireplace")) {
        results.AmenityAreaMeasure = true;
    }
    if ((aminityCategoryType === "WholeHome" && (aminityType === "WoodStove" || aminityType === "IndoorFireplace"))
        || (aminityCategoryType === "WholeHome" && (aminityType != "WoodStove" && aminityType != "IndoorFireplace"))) {
        results.AmenityCount = true;
    }
    ;
    if ((improvementType === "Dwelling" && constructionMethod === "Manufactured" && (aminityType === "Porch" || aminityType === "Portico" || aminityType === "Deck" || aminityType === "Gazebo"))
        || (improvementType === "Outbuilding" && outbuildingType === "ManufacturedHome" && (aminityType === "Porch" || aminityType === "Portico" || aminityType === "Deck" || aminityType === "Gazebo"))) {
        results.AmenityAttachedToManufacturedHomeIndicator = true;
    }
    if (aminityType === "IngroundPool" || aminityType === "IngroundSpa" || aminityType === "Sauna") {
        results.SwimmingPoolFeatureType = true;
    }
    return results;
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
var Queue = /** @class */ (function () {
    function Queue() {
        this.nameArray = [];
    }
    Queue.prototype.enque = function (elmnt) {
        this.nameArray.push(elmnt);
    };
    Queue.prototype.deque = function () {
        return this.nameArray.shift();
    };
    Queue.prototype.displayEmployee = function () {
        return this.nameArray;
    };
    return Queue;
}());
// const queue = new Queue();
// queue.enque("Amali")
// queue.enque("Nimali")
// queue.enque("Sumali")
// queue.enque("Kamali")
// console.log("After enque : ", queue.displayEmployee());
// console.log("Dequed", queue.deque());
// console.log("After dequed : ", queue.displayEmployee());
var crypto = require("crypto");
var LogInDetails = /** @class */ (function () {
    function LogInDetails(hashMethod) {
        // Array Object for store user details.
        this.users = [];
        this.hashMethod = hashMethod;
    }
    // Convert password string into a hash 
    LogInDetails.prototype.convertToHash = function (password) {
        switch (this.hashMethod) {
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
    };
    // Reguler Hash Method
    LogInDetails.prototype.regularHash = function (password) {
        var hash = 0;
        for (var i = 0; i < password.length; i++) {
            hash = (hash << 5) - hash + password.charCodeAt(i);
        }
        return hash.toString();
    };
    // XOR Hash Method
    LogInDetails.prototype.xorHash = function (password) {
        var hash = 0;
        for (var i = 0; i < password.length; i++) {
            hash ^= password.charCodeAt(i);
        }
        return hash.toString();
    };
    // sha-256 Hash Method
    LogInDetails.prototype.sha256Hash = function (password) {
        var hash = crypto.createHash('sha256');
        hash.update(password);
        return hash.digest('hex');
    };
    // Sha1 Hash Method
    LogInDetails.prototype.sha1Hash = function (password) {
        var hash = crypto.createHash('sha1');
        hash.update(password);
        return hash.digest('hex');
    };
    // hex Hash Method
    // private hexHash(password:string){
    //   const hash = crypto.getHashes();
    // }
    //  Create a new user
    LogInDetails.prototype.createUser = function (userName, password) {
        var hashedPassword = this.convertToHash(password);
        this.users.push({ userName: userName, password: hashedPassword });
        console.log("Stored user detail for ".concat(userName));
    };
    // login a user by cheking user name and password
    LogInDetails.prototype.login = function (user, pass) {
        var foundUser = this.users.find(function (u) { return u.userName === user; });
        if (!foundUser) {
            console.log(" Sorry! we can't found with the user name : ".concat(user, "\n        Check your user name."));
            return;
        }
        var hashedPassword = this.convertToHash(pass);
        if (foundUser && foundUser.password === hashedPassword) {
            console.log(" Congratulations ".concat(user, " Your Login Successful!"));
        }
        else {
            console.log(" Sorry! ".concat(user, " Your Login Is Failed."));
        }
    };
    return LogInDetails;
}());
var loginSystem = new LogInDetails('sha1');
loginSystem.createUser("Lakmali", "Lakmali@12345");
loginSystem.createUser("Methmini", "Methmini@12345");
loginSystem.login("Lakmali", "Lakmali@12345");
loginSystem.login("Lakmali", "Lakali@12345");
loginSystem.login("methmini", "Methmini@12345");
