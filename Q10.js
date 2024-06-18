// You are given an array of employee objects with id and name properties. Write a
// function to create a Map that maps employee IDs to their names.

let employes = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

console.log(employees)

function mapEmployeeIdsToNames(employees) {
    let employeeMap = new Map();
    employees.forEach((employee) => {
        employeeMap.set(employee.id, employee.name);
    });
    return employeeMap;
}

let emp = mapEmployeeIdsToNames(employees);
console.log(emp); // Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }

