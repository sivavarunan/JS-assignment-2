// You have an array of objects representing employees. Write a function to filter out employees who are older than a given age.

let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];

let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter(function(employee) {
        return employee.age <= ageLimit;
    });
}

console.log(filterEmployees(employees, ageLimit));

// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
