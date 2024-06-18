// You are given an array of employee objects with id and name properties. Write a
// function to create a Map that maps employee IDs to their names.

let employees = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

function mapEmployeeIdsToNames(employees) {
    let newMap = new Map();
    employees.forEach((emp) => {
      newMap.set(emp.id, emp.name);
    });
    return newMap;
}

let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap); // Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }
