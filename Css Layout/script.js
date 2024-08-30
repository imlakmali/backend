let employees = [
  { id: "1", name: "John", Salary: "2600" },
  { id: "2", name: "Jane", Salary: "3200" },
  { id: "3", name: "Bob", Salary: "2900" },
  { id: "4", name: "Alice", Salary: "3100" },
  { id: "5", name: "Tom", Salary: "2700" },
  { id: "6", name: "Emma", Salary: "3300" },
  { id: "7", name: "Mike", Salary: "2800" },
  { id: "8", name: "Sarah", Salary: "3000" },
  { id: "9", name: "David", Salary: "2950" },
  { id: "10", name: "Sophia", Salary: "3150" },
  { id: "11", name: "James", Salary: "2750" },
  { id: "12", name: "Olivia", Salary: "3350" },
  { id: "13", name: "Ethan", Salary: "2850" },
  { id: "14", name: "Isabella", Salary: "3050" },
  { id: "15", name: "Liam", Salary: "3250" },
];

function calSalary(data){

    let newSalary = data.map((element)=>{
        
        let salary = Number(element.Salary)
        element.incresed_salary = salary + (salary * 1.1);
       
        return element;
    });

    
   return newSalary

}

let newSalaryList = calSalary(employees)

// console.log(newSalaryList)

function filteredSalary(data, value){
    let result = []
     data.forEach(element => {
        if(element.incresed_salary>= value){
            result.push(element);
        }
    });

return result;
}

console.log(filteredSalary(newSalaryList, 7000))

