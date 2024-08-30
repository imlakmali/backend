// class Person {
//  private name : string;
//    constructor(private nickName: string) {
//     console.log('Constructor is executing..')
//    }
//   public setName(name:string) {
//      this.name = name;
//   }
//   public sayName(){
//     console.log(`My name is:${this.name} (${this.nickName})`)
//   }
// }
// const person1 = new Person("Donky");
// person1.setName("June");
// person1.sayName();
// class Person{
//   name: string;
//   age: number;
//   constructor(name: string, age:number){
//     this.name = name;
//     this.age = age;
//   }
//   greet(){
//     console.log( `Hello I'm ${this.name} I'm ${this.age} years old`);
//   }
// }
// let person1 = new Person("Kamal", 25);
// person1.greet();
// class Book{
//   title: string;
//   author : string;
//   year: number;
//   constructor(title: string , author: string, year : number){
//     this.title = title;
//     this.author = author;
//     this.year = year
//   }
//   displayDetails(){
//     console.log(`${this.title} by ${this.author} publised in ${this.year}`);
//   }
// }
// let myBook = new Book("Death on the Nile","Agatha Christie " , 1937);
// myBook.displayDetails();
// const myBook2 = new Book ("Pride and Prejudice", "Jane Austen" , 1990 );
// myBook2.displayDetails();
// Using access Modifires
// class Employee {
//   private employeeName : string;
//   private address : string;
//   private salary : number;
//   constructor(name: string, address: string , salary: number){
//     this.employeeName = name;
//     this.address = address;
//     this.salary = salary;
//   }
//   getDetails(){
//     return `${this.employeeName} ${this.address} get ${this.salary} salary`
//   }
// }
// const employee1 = new Employee("Employee-1", "Kandy", 21000);
// console.log(employee1.getDetails())
// const employee2 = new Employee("Employee-2", "Colombo", 56000);
// console.log(employee2.getDetails())
// const employee3 = new Employee("Employee-3", "Jaffna", 78000);
// console.log(employee3.getDetails())
// const employee4 = new Employee("Employee-4", "Kegalla", 234000);
// console.log(employee4.getDetails())
// class bankAccount{
//   private balance: number;
//   constructor(initialBalance: number){
//     this.balance = initialBalance
//   }
//   public deposit(amount: number){
//     this.balance = this.balance + amount;
//     console.log(` show my current balance:  ${this.balance}`);
//   }
// }
// const balance = new bankAccount(5900);
// balance.deposit(200);
// class Person {
//   private name: string;
//   constructor (name: string){
//     this.name = name
//   }
//   public getName(){
//     return this.name;
//   }
// }
// const person = new Person("Anuradha");
// console.log(person.getName())
// Extending Interfaces
//  Example 01
// interface Employee{
//   id : number;
//   name : string;
//   position : string;
//   getDetails(): string
// }
// class Manager implements Employee{
//   public id :number;
//   public name: string 
//   public position: string 
//   constructor(id:number, name : string, position: string){
//     this.id = id;
//     this.name = name;
//     this.position = position;
//   }
//  public  getDetails(){
//   return `ID ${this.id} , Name ${this.name} , Position ${this.position}`
//  }
//  public manageTeam (){
//   console.log(`${this.name} is managing team`)
//  }
// }
// const Lakmali = new Manager(1, "Lakmali" , "Developer");
// console.log(Lakmali.getDetails());
// Lakmali.manageTeam();
// Example 02
// class vehicle{
//   public name : string;
//   public model  : string;
//   public year : number;
//   constructor (name:string , model:string, year: number){
//     this.name = name;
//     this.model = model;
//     this.year = year
//   }
//   public getDetails(){
//     return `${this.year} ${this.name} ${this.model}`
//   }
// }
// class Car extends vehicle{
//   public doors : number;
//   constructor(name:string, model: string, year :number, doors: number){
//     super(name, model,year);
//     this.doors = doors;
//   }
//   public showCarDetails (){
//     console.log(`${this.getDetails()} with ${this.doors} doors`)
//   }
// }
// const car1 = new Car("Toyota" , "ford", 2024, 4);
// car1.showCarDetails();
// Override 
// example 01
class Amimal {
    makeSound() {
        console.log(" some generic animal sound");
    }
}
class Dog extends Amimal {
    makeSound() {
        console.log("breah!....breah!");
    }
}
let animal1 = new Amimal();
animal1.makeSound();
let myDog = new Dog();
myDog.makeSound();
//# sourceMappingURL=index.js.map