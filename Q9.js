// Write a function that takes an array of strings and returns a Map where the keys are the
// unique strings and the values are the number of times each string appears in the array.
// (Use Map Object)

function countOccurrences(arr) {
    let newMap = new Map();

    arr.forEach(function (str) {
        if (newMap.has(str)) {
            newMap.set(str, newMap.get(str) + 1);
        } else {
            newMap.set(str, 1);
        }
    });

    return newMap;
}

// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings)); // Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
