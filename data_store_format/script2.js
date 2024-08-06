// Array.some() method, 

const persons = [
    { Id: 1, name: "kamal", age:18 },
    { Id: 2, name: "Nimal",age:20 },
    { Id: 3, name: "Sumal" ,age:50},
  ];
  
  const res = persons.some(isAdult);
  
  function isAdult(person){
      return person.age >= 18;
  }
console.log(res)  

// Next step---

// Change this recursive function to find more than one parents at the same time.

// allChildrenArrays = findChildrenArrayOf([123, 456])

// console.log(allChildrenArray)   //--->  [[], []]


