// 12. Write a function that takes an array of numbers and returns a new array with all duplicate
// items removed. (Use Set Object)

function removeDuplicates(arr) {
    let uniqueSet = new Set(arr);
    let uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]