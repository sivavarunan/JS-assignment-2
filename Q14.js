// 14. Write a function that takes multiple arrays and returns a new array containing all unique
// elements from all arrays.

function union(...arrays) {
    let resultSet = new Set();

    arrays.forEach(array => {
        array.forEach(item => {
            resultSet.add(item);
        });
    });
    return Array.from(resultSet);
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [5, 6, 7];
console.log(union(arr1, arr2, arr3)); // Output: [1, 2, 3, 4, 5, 6, 7]